import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function AdminPanel() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const navigate = useNavigate();

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

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-black-700">Админ Панел</h1>

            {/* Users List */}
            <div className="border rounded-lg shadow p-6 bg-white">
                <div className="flex ...">
                    <h2 className="w-64 flex-auto text-lg font-semibold mb-4 text-blue-600" >Потребители</h2>
                    <button className="w-1 flex-auto px-3 py-1 rounded-lg bg-blue-700 text-white hover:bg-blue-800" onClick={() => navigate("/admin/add-user")}>Добави потребител</button>
                </div>

                <div className="space-y-3">
                    {users && users.length > 0 ? (
                        users.map((user) => (
                            <div
                                key={user._id}
                                className="flex items-center justify-between border rounded-lg p-3 bg-white"
                            >
                                <div>
                                    <p className="font-medium text-black">{user.name}</p>
                                    <p className="text-sm text-black">{user.email}</p>
                                    <p className="text-xs text-black">Роля: {user.role}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate(`/admin/edit-user/${user._id}`)}
                                        className="px-3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        Редактирай
                                    </button>
                                    <button
                                        onClick={() => handleDeleteUser(user._id)}
                                        className="px-3 py-1 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
                                    >
                                        Изтрий
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-blue-500 text-sm">Няма намерени потребители.</p>
                    )}
                </div>

                {/* Pagination Controls */}
                <footer className="flex justify-between mt-4 items-center">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 disabled:opacity-50"
                    >
                        Назад
                    </button>
                    <span className="text-black-700">
                        Страница {page} от {pageCount}
                    </span>
                    <button
                        disabled={page === pageCount}
                        onClick={() => setPage((p) => p + 1)}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 disabled:opacity-50"
                    >
                        Напред
                    </button>
                </footer>
            </div>
        </div>
    );

}
