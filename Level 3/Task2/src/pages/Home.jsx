import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
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
    const revealRef = useRef([]);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (en.isIntersecting)
                        en.target.classList.add("opacity-100", "translate-y-0");
                });
            },
            { threshold: 0.15 }
        );
        revealRef.current.forEach((el) => el && obs.observe(el));
        return () => obs.disconnect();
    }, []);

    return (
        <section className="relative min-h-screen text-white overflow-hidden">
            {/* Background with gradient and blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,195,255,0.25),_transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,123,255,0.2),_transparent_60%)]"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-24">
                {/* Hero Section */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-16 shadow-2xl text-center transform transition hover:scale-[1.01] duration-700">
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
                    <div className="mt-8">
                        <a
                            href="#api"
                            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-blue-500/40 transition-transform transform hover:-translate-y-1"
                        >
                            🚀 Try API Demo
                        </a>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "📱 Responsive Design",
                            desc: "Seamlessly works on mobile, tablet, and desktop devices.",
                        },
                        {
                            title: "💻 Practical Projects",
                            desc: "Hands-on coding tasks that build your real-world portfolio.",
                        },
                        {
                            title: "🧠 Mentorship",
                            desc: "Expert guidance, feedback, and interview preparation support.",
                        },
                    ].map((f, i) => (
                        <div
                            key={i}
                            ref={(el) => (revealRef.current[i] = el)}
                            className="opacity-0 translate-y-6 transition-all duration-700 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl hover:bg-white/15 hover:-translate-y-2 hover:shadow-blue-500/30"
                        >
                            <h3 className="text-cyan-300 font-semibold text-xl">{f.title}</h3>
                            <p className="mt-3 text-sm text-white/80 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

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
