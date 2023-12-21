import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";

type addTaskProps = {
    onAdd: (task: {name: string, description: string}) => void;
}

const EditTask = ({onAdd}: addTaskProps) => {
    

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const addTheTask = async () => {
        if(!taskName)
        {
            alert("Please add a task name");
            return
        }
        await onAdd({name: taskName, description: taskDescription});
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
export default EditTask