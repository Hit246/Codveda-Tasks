import React, { useState } from "react";

export default function GithubUsers() {
    const [query, setQuery] = useState("");
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");

    const fetchUsers = async (e) => {
        e.preventDefault();

        if (!query.trim()) {
            setError("Please enter a username.");
            setInfo("");
            setUsers([]);
            return;
        }

        try {
            setError("");
            setInfo("Searching...");
            const res = await fetch(
                `https://api.github.com/search/users?q=${query.trim()}+in:login`
            );
            const data = await res.json();

            if (data.items && data.items.length > 0) {
                const filtered = data.items.filter((user) =>
                    user.login.toLowerCase().includes(query.trim().toLowerCase())
                );
                setUsers(filtered);
                setInfo(`Found ${filtered.length} user(s)`);
            } else {
                setUsers([]);
                setError("No users found.");
                setInfo("");
            }
        } catch {
            setError("Something went wrong. Try again later.");
            setInfo("");
            setUsers([]);
        }
    };

    return (
        <div>
            <div className="container">
                <h2>GitHub User Finder</h2>
                <p>Search GitHub users by their username.</p>

                <form onSubmit={fetchUsers}>
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Enter GitHub username..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>

                {info && <p className="info">{info}</p>}
                {error && <p className="error">{error}</p>}

                <div className="grid">
                    {users.map((user) => (
                        <div className="card" key={user.id}>
                            <img src={user.avatar_url} alt={user.login} />
                            <h4>{user.login}</h4>
                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
