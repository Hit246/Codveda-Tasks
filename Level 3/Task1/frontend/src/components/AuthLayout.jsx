import { motion } from "framer-motion";

export default function AuthLayout({ children, title }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">{title}</h2>
                {children}
            </motion.div>
        </div>
    );
}
