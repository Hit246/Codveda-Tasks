import React from "react";

export default function Home() {
    return (
        <section className="page home">
            <div className="hero-content">
                <h1>Welcome to My SPA</h1>
                <p>
                    This single-page React application demonstrates smooth client-side
                    navigation without any reloads. It's simple, fast, and efficient —
                    perfect for modern web experiences.
                </p>
                <p>
                    Built with reusable components, it’s a great foundation to expand
                    into something bigger — like a portfolio, business site, or learning
                    platform.
                </p>
                <button className="cta-btn">Get Started</button>
            </div>
        </section>
    );
}
