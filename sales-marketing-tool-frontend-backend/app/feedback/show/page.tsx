'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { Dropdown } from "flowbite-react";
import MyDropdown from '@/app/components/Feedback/MyDropdown';
import Feedbacks from '@/app/components/Feedback/Feedbacks';
import { useFeedback } from '@/app/context/FeedbackContext';


const ShowFeedback = () => {
    const { feedbacks, SetFeedback } = useFeedback();
  return (
    
        <Grid container spacing={2} className=''    >
            <Grid xs={12} className='bg-green-300'>
                <h1 className="font-bold text-4xl text-center">View All Feedback</h1>
            </Grid>
            <Grid xs={12}>
                <Box display="flex" justifyContent="flex-end">
                    
                <MyDropdown />

                </Box>
            </Grid>
            <Grid xs={12}>
                <Box display="flex" justifyContent="center">
                    <Button variant="contained" color='success'
                        onClick={() => {
                            SetFeedback(2,"shakil","another title", "another message", 5);
                            console.log(feedbacks);
                        }}
                    >Submit</Button>
                </Box>
            </Grid>
            
            <Feedbacks />
        </Grid>
        
  )
}
export default ShowFeedback