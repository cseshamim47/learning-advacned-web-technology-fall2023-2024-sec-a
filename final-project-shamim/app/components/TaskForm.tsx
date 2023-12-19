// components/TaskForm.tsx
import React, { useState } from 'react';

interface TaskFormProps {
  onCreate: (newTask: { name: string; description: string; dueDate: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');

  const handleCreateTask = () => {
    // Validate form fields (add your validation logic here)

    // Create a new task object
    const newTask = {
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
    };

    // Call the onCreate function passed as a prop to handle task creation
    onCreate(newTask);

    // Reset form fields
    setTaskName('');
    setTaskDescription('');
    setTaskDueDate('');
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </label>
        <label>
          Due Date:
          <input type="date" value={taskDueDate} onChange={(e) => setTaskDueDate(e.target.value)} />
        </label>
        <button type="button" onClick={handleCreateTask}>
          Create New Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
