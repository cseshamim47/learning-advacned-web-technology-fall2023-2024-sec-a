import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import axios from 'axios';
import { describe } from "node:test";
interface Task {
    id: number;
    name: string;
    description: string;
  }
type addTaskProps = {
    onAdd: (task: {id: number, name: string, description: string}) => void;
    taskToEdit: Task | undefined;
}

const AddTask = ({onAdd, taskToEdit}: addTaskProps) => {
    
    const baseURL = "http://localhost:8888/task-management";

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    useEffect(() => {
        if(taskToEdit)
        {
            setTaskName(taskToEdit.name);
            setTaskDescription(taskToEdit.description);
        }
    },[taskToEdit]);

    const addTheTask = async () => {
        if(!taskName)
        {
            alert("Please add a task name");
            return
        }
        if(taskToEdit) 
        {
            axios
            .put(`${baseURL}/${taskToEdit.id}`, {
                name: taskName,
                description: taskDescription,
            })
            .then((response) => {
                onAdd({id: response.data.id , name: taskName, description: taskDescription});
            });
        }else
        {
            axios
            .post(baseURL, {
                name: taskName,
                description: taskDescription,
            })
            .then((response) => {
                onAdd({id: response.data.id , name: taskName, description: taskDescription});
            });
        }
        setTaskName("");
        setTaskDescription("");
    }

  return (
    <>
                <TextField 
                id="outlined-basic" 
                label="Task Name" 
                variant="outlined" 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                />

                <TextField
                id="outlined-basic"
                label="Task Desc"
                variant="outlined"
                multiline
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                maxRows={4}
                />

                <Button
                variant="contained"
                size="small"
                color="success"
                onClick={addTheTask}
                >
                Save Task
                </Button>
            </>
  )
}
export default AddTask