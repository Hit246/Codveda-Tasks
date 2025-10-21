import React, { useEffect, useState } from "react";

export default function GithubFinder() {
    const [q, setQ] = useState("");
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!q) {
            setUsers([]);
            setStatus("");
            return;
        }

        setStatus("loading");
        const id = setTimeout(async () => {
            try {
                const res = await fetch(
                    `https://api.github.com/search/users?q=${encodeURIComponent(
                        q
                    )}+in:login&per_page=30`
                );
                if (!res.ok) throw new Error("Fetch failed");
                const data = await res.json();
                const filtered = (data.items || []).filter((u) =>
                    u.login.toLowerCase().includes(q.toLowerCase())
                );
                setUsers(filtered);
                setStatus(filtered.length ? "ok" : "error");
            } catch (err) {
                setStatus("error");
                console.log(err);
                setUsers([]);
            }
        }, 600);

        return () => clearTimeout(id);
    }, [q]);

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg text-white">
            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search GitHub users (e.g. hitarth, torvalds, etc.)"
                    className="flex-1 w-full sm:w-96 bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                />
                <button
                    onClick={async () => {
                        if (!q.trim()) return;
                        setStatus("loading");
                        try {
                            const res = await fetch(
                                `https://api.github.com/search/users?q=${encodeURIComponent(
                                    q
                                )}+in:login&per_page=30`
                            );
                            if (!res.ok) throw new Error("Fetch failed");
                            const data = await res.json();
                            const filtered = (data.items || []).filter((u) =>
                                u.login.toLowerCase().includes(q.toLowerCase())
                            );
                            setUsers(filtered);
                            setStatus(filtered.length ? "ok" : "error");
                        } catch {
                            setStatus("error");
                            setUsers([]);
                        }
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:from-blue-500 hover:to-cyan-500 hover:scale-105 transition-transform"
                >
                    Search
                </button>
            </div>

            {/* Status */}
            <div className="mt-6 text-center">
                {status === "loading" && (
                    <p className="text-cyan-400 animate-pulse">Loading...</p>
                )}
                {status === "error" && (
                    <p className="text-red-400">No matching users found.</p>
                )}
            </div>

            {/* Results */}
            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="group relative bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-md hover:bg-white/15 hover:border-cyan-400 transition-all"
                    >
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            className="mx-auto w-24 h-24 rounded-full border-2 border-cyan-400 group-hover:scale-105 transition-transform"
                        />
                        <h4 className="mt-3 text-lg font-semibold text-cyan-300 group-hover:text-white transition">
                            {user.login}
                        </h4>
                        <p className="text-sm text-gray-300">ID: {user.id}</p>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-3 text-sm text-white/80 hover:text-cyan-400 underline"
                        >
                            View Profile →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
