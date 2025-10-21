import React, { useState } from "react";

export default function Contact() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            {/* Dynamic gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,195,255,0.25),_transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,123,255,0.25),_transparent_70%)]"></div>

            <div className="relative z-10 w-full max-w-2xl mx-auto px-6 py-16">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-blue-500/30 transition duration-700">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-300 mb-4">
                        📩 Get in Touch
                    </h2>
                    <p className="text-center text-white/70 mb-8">
                        Have a question, idea, or collaboration in mind? Send a message below and I’ll respond soon.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Your Name</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-1">Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-cyan-500/40 transition-transform hover:-translate-y-1"
                            >
                                ✉️ Send Message
                            </button>
                            {sent && (
                                <span className="text-green-400 font-medium animate-pulse">
                                    ✅ Message Sent Successfully
                                </span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
