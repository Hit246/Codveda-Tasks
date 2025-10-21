import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

export default function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: "" });
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/accounts/login/", form);
            setMsg(`✅ Welcome ${res.data.user}!`);
            navigate("/dashboard");
        } catch {
            setMsg("❌ Invalid credentials.");
        }
    };

    return (
        <AuthLayout title="Welcome Back">
            <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <Button type="submit" label="Login" />
                {msg && <p className="text-center text-sm text-gray-700">{msg}</p>}
            </form>
        </AuthLayout>
    );
}
