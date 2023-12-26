import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { color } from '@mui/system';
import FeedbackRating from './FeedbackRating';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';



export default function BasicGrid() {
    
  return (
    
    <div className="flex justify-center ">
        <Box
        component="form"
        sx={{
            "& > :not(style)": { m: 1, width: "70ch" },
        }}
        noValidate
        autoComplete="off"
        className="border-2 rounded border-green-300 mt-3 bg-green-100"
        >
        <Grid container spacing={2} className=''    >
            <Grid xs={12} className='bg-green-300'>
                <h1 className="font-bold text-4xl text-center">Customer Feedback Form</h1>
            </Grid>
            <Grid xs={12}>
                <Box display="flex" justifyContent="center">
                    <FeedbackRating />
                </Box>
            </Grid>
            <Grid xs={12}>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Feedback Title" required/>
            </Grid>
            <Grid xs={12}>
            <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-green-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            </Grid>

            <Grid xs={12}>
                <Box display="flex" justifyContent="center">
                    <Button variant="contained" color='success' >Submit</Button>
                </Box>
            </Grid>
            

        </Grid>
        </Box>
  </div>
   
  );
}