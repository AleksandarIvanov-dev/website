import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HomePageHeader from "../HomePageLoggedIn/HomePageHeader";

export default function EditUser() {
    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        progressLevel: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { id } = useParams()
    const navigate = useNavigate()
    //console.log(id)

    // Fetch user info on mount
    useEffect(() => {
        async function fetchUser() {
            try {
                setLoading(true);
                const res = await fetch(`http://localhost:5000/get-user/${id}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include", // include cookies for auth
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.message || "Failed to fetch user");

                console.log(data.progressLevel)
                setFormData({
                    id: data._id,
                    firstName: data.firstName || "",
                    lastName: data.lastName || "",
                    email: data.email || "",
                    role: data.role || "",
                    progressLevel: data.progressLevel || "",
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, [id]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleBackButton = () => {
        navigate(-1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError("");
        setSuccess("");
        try {
            const res = await fetch("http://localhost:5000/put-user", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || data.message);

            setSuccess("User updated successfully!");
        } catch (err) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <p className="p-4">Loading user...</p>;

    return (
        <div>
            <HomePageHeader />

            <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4">Edit User</h2>

                {error && <p className="text-red-500 mb-2">{error}</p>}
                {success && <p className="text-green-600 mb-2">{success}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="id" value={formData.id} />

                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Role</label>
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Progress Level</label>
                        <input
                            type="text"
                            name="progressLevel"
                            value={formData.progressLevel}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-2"
                        />
                    </div>

                    <div className="flex gap-2 justify-end">
                        <button
                            type="button"
                            className="px-4 py-2 rounded-lg border"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save"}
                        </button>
                        <button
                            type="button"
                            onClick={handleBackButton}
                            className="px-4 py-2 rounded-lg border"
                        >
                            Back
                        </button>
                    </div>
                </form >
            </div >
        </div>

    );
}
