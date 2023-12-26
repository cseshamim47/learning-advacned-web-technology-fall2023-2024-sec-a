import { ReactNode, createContext, useContext, useState } from "react";

type feedbackType = {
    id: number;
    username: string;
    title: string;
    description: string;
    rating: number;
    date: Date;
}

type feedbackContextType = { 
    feedbacks: feedbackType[];
    SetFeedback: (Id:number, Username:string,Title:string,Description:string,Rating:number) => void;
};


const FeedbackContextDefaultValues: feedbackContextType = {
    feedbacks: [],
    SetFeedback: (Id:number, Username:string,Title:string,Description:string,Rating:number) => {}
}

const FeedbackContext = createContext<feedbackContextType>(FeedbackContextDefaultValues);

export function useFeedback() {
    return useContext(FeedbackContext);
}

type Props = {
    children: ReactNode;
};

export function FeedbackProvider({ children }: Props) {
    const [feedbacks, setFeedback] = useState<feedbackType[]>([
        {
            id: 1,
            username: "cseshamim47",
            title: "This is a title",
            description: "This is a description lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.",
            rating: 3,
            date: new Date(),
        },
    ])


    const SetFeedback = (Id:number, Username:string,Title:string,Description:string,Rating:number) => {
        setFeedback([...feedbacks, {id: Id, username:Username,title:Title,description:Description,rating:Rating, date: new Date()}]);
    }

    const value = {
        feedbacks,
        SetFeedback,
    };

    return (
        <>
            <FeedbackContext.Provider value={value}>
                {children}
            </FeedbackContext.Provider>
        </>
    );
}