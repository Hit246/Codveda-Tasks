import TaskItem from "./TaskItem";

export default {
    title: "Components/TaskItem",
    component: TaskItem,
};

const demoTask = {
    id: 1,
    owner: "demo",
    title: "Buy groceries",
    description: "Milk, eggs, bread",
    completed: false,
    created_at: new Date().toISOString(),
};

export const Default = () => (
    <div style={{ width: 600 }}>
        <TaskItem task={demoTask} onToggle={() => alert('toggle')} onDelete={() => alert('delete')} />
    </div>
);

export const Completed = () => (
    <div style={{ width: 600 }}>
        <TaskItem task={{ ...demoTask, completed: true }} onToggle={() => { }} onDelete={() => { }} />
    </div>
);
