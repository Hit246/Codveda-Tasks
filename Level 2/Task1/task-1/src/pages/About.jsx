import React from "react";

export default function About() {
    return (
        <section className="page about">
            <h2>About This Project</h2>
            <p>
                This website is a minimal single-page app (SPA) built using React. It
                uses dynamic routing to switch between pages seamlessly, showing how
                simple it can be to build fast and interactive UIs without backend
                complexity.
            </p>
            <p>
                The design focuses on clarity and responsiveness — clean colors, smooth
                animations, and optimized typography. It’s meant as a starter template
                for anyone learning React or building lightweight sites.
            </p>
            <p>
                You can extend this by adding a backend (like Firebase or Express.js),
                user authentication, and data persistence — turning it into a fully
                functional production app.
            </p>
        </section>
    );
}
