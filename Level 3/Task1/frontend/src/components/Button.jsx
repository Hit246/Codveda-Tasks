import { motion } from "framer-motion";

export default function Button({ label, type = "button", onClick }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type={type}
            onClick={onClick}
            className="w-full bg-indigo-600 text-white py-2 rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
            {label}
        </motion.button>
    );
}
