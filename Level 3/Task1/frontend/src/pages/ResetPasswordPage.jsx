import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ResetPasswordPage() {
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://codveda-tasks.onrender.com/api/accounts/reset-password/", { email });
            setMsg("Password reset link sent! Check your email.");
        } catch {
            setMsg("Error: Unable to send reset link.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Reset Password</h2>
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" label="Send Reset Link" />
            {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
        </form>
    );
}
