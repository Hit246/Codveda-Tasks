import React, { useEffect, useState } from "react";

export default function GithubFinder() {
    const [q, setQ] = useState("");
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(() => {
        if (!q) {
            setUsers([]); setStatus("");
            return;
        }

        setStatus("loading");
        const id = setTimeout(async () => {
            try {
                const res = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(q)}+in:login&per_page=30`);
                if (!res.ok) throw new Error("Fetch failed");
                const data = await res.json();
                const filtered = (data.items || []).filter(u => u.login.toLowerCase().includes(q.toLowerCase()));
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
        <div className="bg-gray-100/20 rounded-lg p-6 shadow">
            <div className="flex items-center gap-3">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-md px-3 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
                    placeholder="Type username (partial allowed), e.g. ram or ram123"
                />
                <button onClick={() => setQ(q)} className="bg-gray-700 border-gray-200 cursor-pointer text-gray-100 px-4 py-2 rounded-md">Search</button>
            </div>

            <div className="mt-6">
                {status === "loading" && <p className="text-brand">Loading...</p>}
                {status === "error" && <p className="text-red-500">No matching users found.</p>}
            </div>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users.map(user => (
                    <div key={user.id} className="border border-gray-100 rounded-lg p-4 text-center hover:shadow-lg transition">
                        <img src={user.avatar_url} alt={user.login} className="mx-auto w-20 h-20 rounded-full" />
                        <h4 className="mt-2 font-medium text-brand">{user.login}</h4>
                        <a className="text-sm text-white underline" href={user.html_url} target="_blank" rel="noreferrer">View profile</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
