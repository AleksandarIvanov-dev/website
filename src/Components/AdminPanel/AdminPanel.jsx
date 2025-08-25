import React, { useEffect, useState } from "react";

export default function AdminPanel() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", role: "user" });
    const [editingUser, setEditingUser] = useState(null);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    // Fetch users whenever `page` changes
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`http://localhost:5000/get-users?page=${page}`, {
                    credentials: "include",
                    method: "GET",
                });
                const data = await res.json();

                if (data.users) {
                    setUsers(data.users);
                    setPageCount(data.pagination.pageCount);
                }
            } catch (err) {
                console.error("Failed to fetch users:", err);
            }
        };

        fetchUsers();
    }, [page]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddUser = async () => {
        try {
            await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setFormData({ name: "", email: "", role: "user" });
            setPage(1); // reload first page
        } catch (err) {
            console.error("Failed to add user:", err);
        }
    };

    const handleUpdateUser = async () => {
        try {
            await fetch(`/api/users/${editingUser._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setEditingUser(null);
            setFormData({ name: "", email: "", role: "user" });
            setPage(1); // reload first page
        } catch (err) {
            console.error("Failed to update user:", err);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await fetch(`http://localhost:5000/delete-user/${id}`, {
                method: "DELETE",
                credentials: "include",
            });
            
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (err) {
            console.error("Failed to delete user:", err);
        }
    };

    const startEdit = (user) => {
        setEditingUser(user);
        setFormData({ name: user.name, email: user.email, role: user.role });
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

            {/* User Form */}
            <div className="border rounded-lg shadow p-6 mb-6 bg-white">
                <h2 className="text-lg font-semibold mb-4">
                    {editingUser ? "Update User" : "Add User"}
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
                        {editingUser ? (
                            <>
                                <button
                                    onClick={handleUpdateUser}
                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => setEditingUser(null)}
                                    className="px-4 py-2 rounded-lg bg-gray-300 text-black hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleAddUser}
                                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                            >
                                Add User
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Users List */}
            <div className="border rounded-lg shadow p-6 bg-white">
                <h2 className="text-lg font-semibold mb-4">Users</h2>
                <div className="space-y-3">
                    {users && users.length > 0 ? (
                        users.map((user) => (
                            <div
                                key={user._id}
                                className="flex items-center justify-between border rounded-lg p-3"
                            >
                                <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                    <p className="text-xs text-gray-400">Role: {user.role}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => startEdit(user)}
                                        className="px-3 py-1 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">No users found.</p>
                    )}
                </div>

                {/* Pagination Controls */}
                <footer className="flex justify-between mt-4">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Назад
                    </button>
                    <span>
                        Страница {page} от {pageCount}
                    </span>
                    <button
                        disabled={page === pageCount}
                        onClick={() => setPage((p) => p + 1)}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Напред
                    </button>
                </footer>
            </div>
        </div>
    );
}
