import React from "react";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 page">
            <h2 className="text-2xl font-bold text-gray-100">About This Project</h2>
            <p className="mt-4 text-gray-400">
                This SPA demonstrates modern React patterns: client-side routing (React Router),
                component-driven UI, TailwindCSS-based styling, and REST API integration.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-5 shadow">
                    <h3 className="font-semibold text-gray-100">Tech Stack</h3>
                    <ul className="mt-3 text-sm text-white/80 space-y-2">
                        <li>• React + React Router</li>
                        <li>• Tailwind CSS for utility styling</li>
                        <li>• Fetch API for REST integration</li>
                    </ul>
                </div>
                <div className="bg-white/10 rounded-lg p-5 shadow">
                    <h3 className="font-semibold text-gray-100">Why this design</h3>
                    <p className="mt-3 text-sm text-white/80">
                        The UI is minimal, responsive, and accessible. Components are reusable and
                        the layout scales for small to large screens.
                    </p>
                </div>
            </div>
        </section>
    );
}
