'use client'

// components/TaskList.tsx
import React from 'react';

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  const handleEdit = (taskId: number) => {
    // Placeholder for the edit functionality
    onEdit(taskId);
  };

  const handleDelete = (taskId: number) => {
    // Placeholder for the delete functionality
    onDelete(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
            <p>{task.description}</p>
            <p>{task.dueDate}</p>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
