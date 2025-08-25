import React, { useEffect, useState } from "react";

export default function AdminPanel() {
    const [users, setUsers] = useState([]);
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

    const handleDeleteUser = async (id) => {
        try {
            await fetch(`http://localhost:5000/delete-user/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            // Remove deleted user from state
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        } catch (err) {
            console.error("Failed to delete user:", err);
        }
    };

    const startEdit = (user) => {
        console.log("Edit user:", user);
        // Optional: handle edit logic if you add a separate form page
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

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
