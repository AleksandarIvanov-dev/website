import { useState, useEffect } from "react";

const AddUser = ({ initialData, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "user",
    });

    // Fill fields if editing
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSave(formData);
    };

    return (
        <div className="border rounded-lg shadow p-6 bg-white">
            <h2 className="text-lg font-semibold mb-4">
                {initialData ? "Update User" : "Add User"}
            </h2>
            <div className="space-y-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2 w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2 w-full"
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role (admin/user)"
                    value={formData.role}
                    onChange={handleChange}
                    className="border rounded-lg px-3 py-2 w-full"
                />

                <div className="flex gap-2">
                    <button
                        onClick={handleSubmit}
                        className={`px-4 py-2 rounded-lg ${initialData
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-green-600 hover:bg-green-700"
                            } text-white`}
                    >
                        {initialData ? "Update" : "Add"}
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
