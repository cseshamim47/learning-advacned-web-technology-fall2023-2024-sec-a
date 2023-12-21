import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
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
        let tid = Math.floor(Math.random() * 10000) + 1;
        if(taskToEdit) tid = taskToEdit.id;
        await onAdd({id: tid, name: taskName, description: taskDescription});
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