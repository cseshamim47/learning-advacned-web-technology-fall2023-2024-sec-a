'use client'

// pages/tasks.tsx
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

interface Task {
  id: number;
  name: string;
  description: string;
  dueDate: string;
}

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'Task 1', description: 'Description 1', dueDate: '2023-01-01' },
    { id: 2, name: 'Task 2', description: 'Description 2', dueDate: '2023-02-01' },
    // Add more tasks as needed
  ]);

  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleEdit = (taskId: number) => {
    // Replace this with your actual edit logic
    console.log(`Edit task with ID ${taskId}`);
  };

  const handleDelete = (taskId: number) => {
    // Replace this with your actual delete logic
    console.log(`Delete task with ID ${taskId}`);
  };

  const handleCreateTask = (newTask: { name: string; description: string; dueDate: string }) => {
    // Create a new task with a unique ID (replace with your logic to generate unique IDs)
    const newTaskWithId = {
      ...newTask,
      id: tasks.length + 1,
    };

    // Update the tasks state with the new task
    setTasks((prevTasks) => [...prevTasks, newTaskWithId]);

    // Hide the task form after creating a task
    setShowTaskForm(false);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <button onClick={() => setShowTaskForm(true)}>Create New Task</button>

      {showTaskForm && <TaskForm onCreate={handleCreateTask} />}

      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TasksPage;
