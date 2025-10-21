import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

export default function RegisterPage() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg(""); // clear old message
        try {
            const res = await axios.post("https://codveda-tasks.onrender.com/api/accounts/register/", {
                username: form.username,
                email: form.email,
                password: form.password,
                password2: form.password2,
            });

            console.log("✅ Registration successful:", res.data);
            setMsg("✅ Registration successful! You can now log in.");
            setForm({ username: "", email: "", password: "", password2: "" }); // clear form
        } catch (err) {
            console.error("❌ Registration failed:", err.response?.data);
            if (err.response?.data) {
                const errors = Object.entries(err.response.data)
                    .map(([key, value]) => `${key}: ${value}`)
                    .join(", ");
                setMsg(`❌ Registration failed: ${errors}`);
            } else {
                setMsg("❌ Registration failed. Try again.");
            }
        }
    };

    return (
        <AuthLayout title="Create an Account">
            <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={form.password2}
                    onChange={(e) => setForm({ ...form, password2: e.target.value })}
                />

                <Button type="submit" label="Register" />
                {msg && (
                    <p
                        className={`text-center text-sm ${msg.startsWith("✅") ? "text-green-600" : "text-red-600"
                            }`}
                    >
                        {msg}
                    </p>
                )}
            </form>
        </AuthLayout>
    );
}
