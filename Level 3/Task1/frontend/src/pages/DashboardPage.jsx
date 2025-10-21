import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components/TaskItem";
import Input from "../components/Input";
import Button from "../components/Button";

export default function DashboardPage() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [message, setMessage] = useState({ text: "", type: "" });

    const apiBase = "https://codveda-tasks.onrender.com/api/tasks/";

    const showMessage = (text, type = "info") => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    };

    const fetchTasks = async () => {
        try {
            const res = await axios.get(apiBase, { withCredentials: true });
            setTasks(res.data);
        } catch (err) {
            console.error("Fetch tasks error:", err.response?.data || err.message);
            showMessage("Failed to fetch tasks.", "error");
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const createTask = async (e) => {
        e.preventDefault();
        if (!title.trim()) return showMessage("Task title required.", "error");
        try {
            const res = await axios.post(apiBase, { title, description: desc });
            setTasks(prev => [res.data, ...prev]);
            setTitle(""); setDesc("");
            showMessage("Task added successfully!", "success");
        } catch (err) {
            console.error("Create error:", err.response?.data || err.message);
            showMessage("Error adding task.", "error");
        }
    };

    const toggleTask = async (task) => {
        try {
            const res = await axios.patch(`${apiBase}${task.id}/`, { completed: !task.completed });
            setTasks(prev => prev.map(t => t.id === task.id ? res.data : t));
            showMessage(task.completed ? "Marked as incomplete." : "Marked as completed.", "success");
        } catch (err) {
            console.error(err);
            showMessage("Update failed.", "error");
        }
    };

    const deleteTask = async (task) => {
        try {
            await axios.delete(`${apiBase}${task.id}/`);
            setTasks(prev => prev.filter(t => t.id !== task.id));
            showMessage("Task deleted successfully!", "success");
        } catch (err) {
            console.error(err);
            showMessage("Failed to delete task.", "error");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md text-gray-600 rounded-xl p-8 shadow-lg border border-white/20 mt-8">
            <h2 className="text-3xl font-bold mb-4 text-blue-300 text-center">📋 Your Tasks</h2>

            {message.text && (
                <div
                    className={`mb-4 text-center px-4 py-2 rounded-md transition-all duration-500
                    ${message.type === "success" ? "bg-green-500/20 text-green-300 border border-green-400/50"
                            : message.type === "error" ? "bg-red-500/20 text-red-300 border border-red-400/50"
                                : "bg-blue-500/20 text-blue-300 border border-blue-400/50"}`}
                >
                    {message.text}
                </div>
            )}

            <form onSubmit={createTask} className="mb-6 space-y-3">
                <Input
                    placeholder="Enter task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    placeholder="Enter description (optional)"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
                <Button type="submit" label="Add Task" />
            </form>

            <div className="space-y-3 mt-6">
                {tasks.length === 0 ? (
                    <p className="text-gray-300 text-center italic">No tasks yet. Add one above!</p>
                ) : (
                    tasks.map(task => (
                        <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                    ))
                )}
            </div>
        </div>
    );
}
