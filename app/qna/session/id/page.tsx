'use client'
import PageContent from "@/components/layouts/page-content"
import ViewContainer from "@/components/layouts/view-container"
import { Button } from "@/components/ui/button"
import { QnaQuestionsList } from "@/components/sections/qna-questions-list"
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Input } from "@/components/ui/input"


const QNASession : React.FunctionComponent = () =>{
    
    const [time, setTime] = useState("12:34")

    return(
        <PageContent>
            <ViewContainer className="flex justify-between gap-[120px]">
                <QnaQuestionsList data={fetchQnaQuestions()}/>
                <div className="w-full flex flex-col gap-16 ">
                    <div className="remainingTime-endSessionAction-wrapper flex justify-between">
                        <div className="remainingTime-progress-wrapper w-3/4 flex flex-col gap-4">
                            <div className="remaining-time-wrapper">
                                <div className="remaining-time flex justify-between">
                                    <h3 className="font-semibold text-lg">Remaining Time</h3>
                                    <p className="text-neutral-400 font-medium">{time} min</p>
                                </div>
                            </div>
                            {/* <div className="qna-progress-line"></div> */}
                            <Progress/>
                        </div>
                        <Button variant="destructive" className="end-session-btn">End Session</Button>
                    </div>
                    <div>
                        <div className="flex flex-col gap-16">
                            <h2 className="question text-3xl font-semibold">[Question]</h2>
                            <div className="answer-wrapper ">
                                <p>Write your answer here</p>
                                <Input className="answer-box h-3/4 " height="50px" />
                            </div>
                        </div>
                        <Button className="mark-complete-btn">Mark as completed</Button>
                    </div>
                    <Button className="submit-btn w-fit ml-auto">Submit and End Session</Button>
                </div>
            </ViewContainer>
        </PageContent>
    )
}
export default QNASession