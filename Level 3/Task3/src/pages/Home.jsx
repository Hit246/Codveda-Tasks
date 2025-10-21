import React, { useEffect, useState, lazy, Suspense } from "react";
import { motion, useScroll } from "framer-motion";

const GithubFinder = lazy(() => import("../components/GithubFinder"));

function useTypingEffect(text, speed = 60) {
    const [display, setDisplay] = useState("");
    useEffect(() => {
        let i = 0;
        setDisplay("");
        const timer = setInterval(() => {
            setDisplay((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) clearInterval(timer);
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);
    return display;
}

export default function Home() {
    const typed = useTypingEffect("Transforming Education, Careers & Technology", 45);
    const { scrollYProgress } = useScroll();

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
        }),
    };

    return (
        <section className="relative min-h-screen text-white overflow-hidden">
            {/* Scroll progress bar */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 origin-left z-50"
            />

            {/* Animated glowing background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black"></div>
            <motion.div
                className="absolute w-40 h-40 bg-blue-500/20 rounded-full blur-3xl top-10 left-10"
                animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl bottom-20 right-20"
                animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative max-w-6xl mx-auto px-6 py-24">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 shadow-2xl text-center transform transition hover:scale-[1.01] duration-700"
                >
                    <p className="uppercase tracking-wider text-sm text-blue-300 mb-2">
                        Empowering Growth with IT Innovation
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span>{typed}</span>
                        <span className="ml-1 text-lg md:text-2xl animate-pulse">▌</span>
                    </h1>
                    <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
                        We empower students and freshers with real-world projects, guided mentorship,
                        and industry-level learning. Build, deploy, and showcase what you create.
                    </p>

                    <motion.a
                        href="#api"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-blue-500/40"
                    >
                        🚀 Try API Demo
                    </motion.a>
                </motion.div>

                {/* Features Section */}
                <motion.div
                    className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.25 }}
                >
                    {[
                        { title: "Responsive Design", desc: "Seamlessly works on all devices." },
                        { title: "Practical Projects", desc: "Hands-on coding that builds portfolio." },
                        { title: "Mentorship", desc: "Guidance, reviews, and interview prep." },
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            custom={i}
                            whileHover={{ scale: 1.08, rotate: 1 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20"
                        >
                            <h3 className="text-cyan-300 font-semibold text-lg">{f.title}</h3>
                            <p className="mt-2 text-sm text-white/80">{f.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* API Section */}
                <div id="api" className="mt-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 drop-shadow-md">
                        🔍 API Demo — GitHub User Finder
                    </h2>
                    <p className="text-sm md:text-base text-white/70 mt-3 max-w-2xl mx-auto">
                        Search and explore GitHub profiles in real-time with client-side filtering
                        and interactive cards powered by the GitHub API.
                    </p>
                    <div className="mt-10">
                        <Suspense fallback={<p className="text-gray-400">Loading GitHub Finder...</p>}>
                            <GithubFinder />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}
