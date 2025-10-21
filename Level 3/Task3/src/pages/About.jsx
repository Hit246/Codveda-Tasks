import React from "react";

export default function About() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Layered gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,195,255,0.25),_transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,123,255,0.25),_transparent_70%)]"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-300 mb-3">
                        💡 About This Project
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        This Single Page Application (SPA) showcases modern frontend development practices —
                        featuring clean UI design, API integration, and responsive layouts using React & Tailwind CSS.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Tech Stack Card */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-500 ease-out">
                        <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                            🧩 Tech Stack
                        </h3>
                        <ul className="space-y-3 text-white/85 text-base">
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">•</span> React + React Router for SPA navigation
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">•</span> Tailwind CSS for rapid responsive styling
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">•</span> Fetch API for REST data integration
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">•</span> Modern ES6+ JavaScript features
                            </li>
                        </ul>
                    </div>

                    {/* Design Philosophy Card */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.03] transition-all duration-500 ease-out">
                        <h3 className="text-xl font-semibold text-cyan-300 mb-4">
                            🎨 Design Philosophy
                        </h3>
                        <p className="text-white/85 leading-relaxed mb-4">
                            The UI follows a <span className="text-cyan-300">“clarity-first”</span> approach — blending
                            minimalism with visual depth through gradients, blur, and motion.
                        </p>
                        <p className="text-white/80 leading-relaxed">
                            Each section adapts seamlessly across devices, maintaining readability and aesthetic balance.
                            The goal: deliver information with elegance and precision.
                        </p>
                    </div>
                </div>

                {/* Footer section */}
                <div className="text-center mt-16 text-white/60 text-sm">
                    <p>© {new Date().getFullYear()} — Built by Hitarth Chauhan using React & Tailwind CSS.</p>
                </div>
            </div>
        </section>
    );
}
