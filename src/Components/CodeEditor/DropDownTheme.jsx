import React from "react";

export default function DropDownTheme({ selectedTheme, onSelect }) {
  const themes = [
    { value: 'vs', label: 'Light Theme' },
    { value: 'vs-dark', label: 'Visual Studio Dark' },
    { value: 'hc-black', label: 'High Contrast Black' }
  ];

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedTheme}
        onChange={(e) => onSelect(e.target.value)}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
      >
        {themes.map((theme) => (
          <option key={theme.value} value={theme.value}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
}