import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

export default function VersionOptions({ selectedLanguage, onSelect }) {
    const [selected, setSelected] = useState('Изберете версия'); // Default text for the dropdown

    const handleSelect = (value, label) => {
        setSelected(label);
        onSelect(value); // This sends the version value back to parent
    };

    // Define the version options for each language
    // The options are structured as an object with language keys and their respective versions
    const versionOptions = {
        java: {
            "1": "JDK 9.0.1",
            "2": "JDK 10.0.1",
            "3": "JDK 11.0.4",
            "4": "JDK 17.0.1",
            "5": "JDK 21.0.1"
        },
        cpp: {
            "1": "Zapcc 5.0.0",
            "2": "GCC 7.2.0",
            "3": "GCC 8.1.0",
            "4": "GCC 9.1.0",
            "5": "GCC 11.1.0"
        },
        python3: {
            "1": "Python 3.6.3",
            "2": "Python 3.6.5",
            "3": "Python 3.7.4",
            "4": "Python 3.9.9",
            "5": "Python 3.11.5"
        },
        csharp: {
            "1": "Mono 5.0.0",
            "2": "Mono 5.10.1",
            "3": "Mono 6.0.0",
            "4": "Mono-6.12.0",
            "5": ".Net: 7.0.13"
        },
    }

    if (!selectedLanguage || !versionOptions[selectedLanguage]) return null;

    const versions = selectedLanguage ? versionOptions[selectedLanguage] : null;
    

    //if (!versions) return null; // Don't render if language not selected

    // Get the currently selected language from the parent component
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    {selected}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
                <div className="py-1">
                    {Object.entries(versions).map(([key, label]) => (
                        <MenuItem key={key}>
                            <a
                                href="#"
                                onClick={() => handleSelect(key, label)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                {label}
                            </a>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    );
}