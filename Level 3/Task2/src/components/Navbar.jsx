import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "backdrop-blur-xl bg-gray-900/60 border-b border-white/10 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <div className="flex items-center space-x-2 select-none">
                        <span className="text-2xl font-extrabold text-white tracking-wide">
                            My<span className="text-cyan-400">SPA</span>
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/contact", label: "Contact" },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative text-sm font-medium tracking-wide transition-all duration-300 
                   hover:text-cyan-400 ${isActive
                                        ? "text-cyan-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
                                        : "text-white/80"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
