'use client'

import { useAuth } from "@/app/context/AuthContext";
import Button from '@mui/material/Button';
import axios from "axios";
import { useEffect } from "react";
import useSWR from "swr";
const url = 'http://localhost:8888/feedbacks'
const fetcher = async() => {
    const response = await fetch(url)
    const data = response.json()
    return data
}

export default function page1() {
    
    const {data, error} = useSWR('http://localhost:8888/feedbacks', fetcher)
    console.log(data);
    

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
}