import React, { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 page">
            <h2 className="text-2xl font-bold text-gray-100">Contact</h2>
            <p className="mt-3 text-gray-400">Questions or ideas? Drop a message below.</p>

            <form onSubmit={handleSubmit} className="mt-6 bg-white/10 p-6 rounded-lg shadow">
                <label className="block text-sm font-medium text-gray-200">Name</label>
                <input className="mt-2 w-full border border-gray-200 rounded-md px-3 py-2 text-white" required />

                <label className="block text-sm font-medium text-gray-200 mt-4">Email</label>
                <input type="email" className="mt-2 w-full border border-gray-200 rounded-md px-3 py-2 text-white" required />

                <label className="block text-sm font-medium text-gray-200 mt-4">Message</label>
                <textarea className="mt-2 w-full border border-gray-200 rounded-md px-3 py-2 text-white" rows="5" required />

                <div className="mt-4 flex items-center justify-between">
                    <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-200">Send</button>
                    {sent && <span className="text-green-400 font-medium">Message sent </span>}
                </div>
            </form>
        </section>
    );
}
