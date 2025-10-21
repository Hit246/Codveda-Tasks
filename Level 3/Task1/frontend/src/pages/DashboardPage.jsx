import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "../components/TaskItem";
import Input from "../components/Input";
import Button from "../components/Button";

export default function DashboardPage() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const apiBase = "http://127.0.0.1:8000/api/tasks/";

    const fetchTasks = async () => {
        try {
            const res = await axios.get(apiBase, { withCredentials: true });
            setTasks(res.data);
        } catch (err) {
            console.error("Fetch tasks error:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const createTask = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(apiBase, { title, description: desc }, { withCredentials: true });
            setTasks(prev => [res.data, ...prev]);
            setTitle(""); setDesc("");
        } catch (err) {
            console.error("Create error:", err.response?.data || err.message);
        }
    };

    const toggleTask = async (task) => {
        try {
            const res = await axios.patch(`${apiBase}${task.id}/`, { completed: !task.completed }, { withCredentials: true });
            setTasks(prev => prev.map(t => t.id === task.id ? res.data : t));
        } catch (err) { console.error(err); }
    };

    const deleteTask = async (task) => {
        try {
            await axios.delete(`${apiBase}${task.id}/`, { withCredentials: true });
            setTasks(prev => prev.filter(t => t.id !== task.id));
        } catch (err) { console.error(err); }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>

            <form onSubmit={createTask} className="mb-6 space-y-3">
                <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
                <Button type="submit" label="Add Task" />
            </form>

            <div className="space-y-3">
                {tasks.length === 0 ? <p className="text-gray-500">No tasks yet</p> : tasks.map(task => (
                    <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
}
