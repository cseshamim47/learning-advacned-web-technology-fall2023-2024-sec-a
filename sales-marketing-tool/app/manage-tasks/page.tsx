"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

interface Task {
  id: number;
  name: string;
  description: string;
}

const ManageTasks = () => {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            name: "Task 1",
            description: "This is task 1",
        },
        {
            id: 2,
            name: "Task 2",
            description: "This is task 2",
        },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [buttonColor, setButtonColor] = useState(true);

  
    const [buttonStyle, setButtonStyle] = useState({
      color: "success",
      text: "Add",
    });
    
    const toggleForm = () => {
      setShowForm(!showForm);
      setButtonColor(!buttonColor);
      setButtonStyle((prevStyle) => ({
        ...prevStyle,
        text: showForm ? "Add" : "Cancel",
      }));
    };
 
    const addTask = async (task: { name: string; description: string }) => {
        const tid = Math.floor(Math.random() * 10000) + 1;
        const newTask = { ...task, id: tid }; 
        setTasks([...tasks, newTask]);
        toggleForm();
    };

    const deleteTask = async (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    const editTask = async (id: number) => {
        if(!showForm)
        toggleForm();

        const taskToEdit = tasks.find((task) => task.id === id);
        
    }
    

  return (
    <div className="flex justify-center ">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        className="border-2 rounded border-green-300 mt-3"
      >
        <Stack spacing={2}>
          <h1 className="font-bold text-4xl text-center">Task Manager</h1>

          <Grid container justifyContent="flex-end">
            <Button
                color={buttonColor ? "success" : "warning"}
                variant="contained"
                style={{ width: 120 }}
                onClick={toggleForm}
            >
                {buttonStyle.text}
            </Button>
          </Grid>

          {showForm && (
            <AddTask onAdd={addTask} />
          )}

          {tasks.length > 0 ? (
          <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onEdit={editTask}
          />): <p className="font-semibold text-center">No tasks to show</p>}

        </Stack>
      </Box>
    </div>
  );
};
export default ManageTasks;
