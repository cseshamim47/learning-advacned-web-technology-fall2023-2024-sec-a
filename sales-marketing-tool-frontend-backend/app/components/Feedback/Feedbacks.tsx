import { useFeedback } from "@/app/context/FeedbackContext";
import { Box, Button, Grid, Paper, Stack, styled } from "@mui/material";
import FeedbackRatingReadOnly from "./FeedbackRatingReadOnly";
import { useRouter } from 'next/navigation'


const Feedbacks = () => {
    const router = useRouter()

    const { feedbacks, SetFeedback } = useFeedback();
  return (
    <div className="w-full">
        {feedbacks.map((feedback) => (
            <div key={feedback.id} onClick={()=>router.push(`/feedback/show/${feedback.id}`)} className="bg-green-200 rounded shadow-inner p-2 mb-2 hover:bg-green-300 hover:cursor-pointer">
                <div className="flex justify-between">
                    <div>
                    <p className="text-lg font-bold">{feedback.title}</p>
                    <div className="flex flex-start text-sm text-gray-500">
                        <p>{feedback.username} {" | "}</p>
                        <p>{" "} {feedback.date}</p>

                    </div>
                    
                    </div>
                    <FeedbackRatingReadOnly rating={feedback.rating} />
                </div>
                <p>{feedback.description.slice(0,150)} {" "}...</p>
            </div>
            
        ))}
    </div>
       
  )
}
export default Feedbacks