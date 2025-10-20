import React, { useEffect, useRef, useState } from "react";
import GithubFinder from "../shared/GithubFinder";

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
        <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 md:p-16 shadow-2xl text-center">
                    <p className="uppercase tracking-widest text-sm text-white/90 mb-2">
                        Empowering Growth with IT Innovation
                    </p>

                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
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
                            className="inline-block bg-gray-700 text-brand font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-500 transition-transform transform hover:-translate-y-1"
                        >
                            Try API Demo
                        </a>
                    </div>
                </div>

                <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Responsive Design", desc: "Seamlessly works on mobile, tablet, and desktop devices." },
                        { title: "Practical Projects", desc: "Hands-on coding that builds your professional portfolio." },
                        { title: "Mentorship", desc: "Expert guidance, feedback, and interview preparation." },
                    ].map((f, i) => (
                        <div
                            key={i}
                            ref={(el) => (revealRef.current[i] = el)}
                            className="opacity-0 translate-y-6 transition-all duration-700 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:bg-white/15 hover:scale-[1.02]"
                        >
                            <h3 className="text-gray-100 font-semibold text-lg">{f.title}</h3>
                            <p className="mt-2 text-sm text-white/80 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>

                <div id="api" className="mt-20 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">API Demo — GitHub User Finder</h2>
                    <p className="text-sm md:text-base text-white/70 mt-2 max-w-2xl mx-auto">
                        Search and explore GitHub profiles in real-time with smooth client-side filtering.
                    </p>
                    <div className="mt-8">
                        <GithubFinder />
                    </div>
                </div>
            </div>
        </section>
    );
}
