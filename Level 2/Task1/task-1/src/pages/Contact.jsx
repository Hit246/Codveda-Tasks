import React, { useState } from "react";

export default function Contact() {
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("Thank you for reaching out! We’ll get back to you soon.");
    };
    return (
        <section className="page contact">
            <h2>Contact Me</h2>
            <p>
                Got feedback, questions, or collaboration ideas? I’d love to hear from
                you! Fill out the form below and I’ll get back to you as soon as
                possible.
            </p>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            {message && <p>{message}</p>}

            <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#555" }}>
                Alternatively, you can reach out directly at{" "}
                <strong>contact@example.com</strong>
            </p>
        </section >
    );
}
