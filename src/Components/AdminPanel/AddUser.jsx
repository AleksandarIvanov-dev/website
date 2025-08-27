import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AddUser = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        role: "",
        language: "",
        progressLevel: "",
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/add-user", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    formData
                )
            })

            const data = await response.json()

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-blue-700">Добавяне на потребител</h1>

            <div className="border rounded-lg shadow p-6 bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Име</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Име"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Фамилия</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Фамилия"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Имейл</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Имейл"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Парола</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Парола"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Роля</label>
                        <input
                            type="text"
                            name="role"
                            placeholder="'student', 'teacher', 'admin'"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Програмен език</label>
                        <input
                            type="text"
                            name="language"
                            placeholder="Програмен език"
                            value={formData.language}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-blue-700 mb-1">Ниво на напредък</label>
                        <input
                            type="text"
                            name="progressLevel"
                            placeholder="'beginner', 'intermediate', 'advanced'"
                            value={formData.progressLevel}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div className="flex gap-2 justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg border text-blue-700 hover:bg-blue-50"
                            onClick={() => navigate(-1)}
                        >
                            Откажи
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Добави
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
