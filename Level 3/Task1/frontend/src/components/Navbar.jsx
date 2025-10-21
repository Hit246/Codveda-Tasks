import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-4 flex justify-between items-center shadow-lg fixed w-full top-0 z-50"
        >
            <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition">
                Codveda Task 1
            </Link>

            <div className="space-x-6 font-medium">
                <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
                <Link to="/register" className="hover:text-yellow-300 transition">Register</Link>
                <Link to="/reset-password" className="hover:text-yellow-300 transition">Forgot Password</Link>
            </div>
        </motion.nav>
    );
}
