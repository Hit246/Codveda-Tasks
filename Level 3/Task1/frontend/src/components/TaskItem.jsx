import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div className="p-4 bg-white rounded-lg shadow-sm flex justify-between items-start">
            <div>
                <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    {task.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                <p className="text-xs text-gray-400 mt-2">Created: {new Date(task.created_at).toLocaleString()}</p>
            </div>
            <div className="flex flex-col items-end space-y-2">
                <button onClick={() => onToggle(task)} className="px-3 py-1 rounded-md bg-green-500 text-white text-sm">
                    {task.completed ? 'Undo' : 'Done'}
                </button>
                <button onClick={() => onDelete(task)} className="px-3 py-1 rounded-md bg-red-500 text-white text-sm">
                    Delete
                </button>
            </div>
        </div>
    );
}
