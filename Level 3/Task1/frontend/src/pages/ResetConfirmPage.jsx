import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ResetConfirmPage() {
    const { uid, token } = useParams();
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://127.0.0.1:8000/api/accounts/reset-password/${uid}/${token}/`, {
                password,
            });
            setMsg("Password reset successful! You can now log in.");
        } catch {
            setMsg("Error: Invalid or expired reset link.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Set New Password</h2>
            <Input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" label="Reset Password" />
            {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
        </form>
    );
}
