'use client'
import PageContent from "@/components/layouts/page-content"
import ViewContainer from "@/components/layouts/view-container"
import { Button } from "@/components/ui/button"
import { QnaQuestionsList } from "@/components/sections/qna-questions-list"
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Check } from 'lucide-react';
import  {Timer}  from "@/components/ui/qna-timer"


const QNASession : React.FunctionComponent = () =>{
    
    const [time, setTime] = useState("12:34")
    const [progressVal, setProgressVal] = useState(0);

    return(
        <PageContent>
            <ViewContainer className="flex justify-between gap-[120px]">
                <QnaQuestionsList data={fetchQnaQuestions()}/>
                <div className="w-full flex flex-col gap-16 ">
                    <div className="remainingTime-endSessionAction-wrapper flex justify-between">
                        <Timer seconds={3600}/>
                        <Button variant="destructive" className="end-session-btn">End Session</Button>
                    </div>
                    <div>
                        <div className="flex flex-col gap-11">
                            <h2 className="question text-3xl font-semibold">[Question]</h2>
                            <div className="answer-wrapper ">
                                <p className="font-medium mb-1 text-sm" >Write your answer here</p>
                                <Textarea className="answer-box min-h-[300px] w-full px-4 py-2 placeholder:text-sm text-lg" placeholder="Good luck! You will do well" />
                            </div>
                        </div>
                        <Button className="mark-complete-btn mt-3 flex gap-1"><Check/><span>Mark as completed</span></Button>
                    </div>
                    <Button className="submit-btn w-fit ml-auto mt-[-25px]">Submit and End Session</Button>
                </div>
            </ViewContainer>
        </PageContent>
    )
}
export default QNASession