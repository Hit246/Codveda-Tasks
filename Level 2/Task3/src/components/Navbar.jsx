import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/10 text-white shadow-md z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <div className="text-lg font-semibold">My<span className="text-brand-light">SPA</span></div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : "hover:opacity-90"}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "hover:opacity-90"}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "hover:opacity-90"}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
