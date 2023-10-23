'use client'
import PageContent from "@/components/layouts/page-content"
import ViewContainer from "@/components/layouts/view-container"
import { Button } from "@/components/ui/button"
import { QnaQuestionsList } from "@/components/sections/qna-questions-list"
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions"
import { useEffect, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Check } from 'lucide-react';
import { Timer } from "@/components/ui/qna-timer"
import { QnaQuesCard } from "@/components/ui/qna-ques-card";
import { BoxCard } from "@/components/layouts/box-card"
import { cn } from "@/lib/utils";


const QNASession: React.FunctionComponent = () => {

    const [time, setTime] = useState("12:34")
    const [progressVal, setProgressVal] = useState(0);
    const qData = fetchQnaQuestions();
    const [qNum, setQNum] = useState(0);
    const [storeAns, setStoreAns] = useState(["", "", "", "", "", "", "", "", "", "",])
    const handleAnsChange = (e: any) => {
        setStoreAns([
            storeAns[qNum] = e.target.value as string
        ])
    }

    return (
        <PageContent>
            <ViewContainer className="flex justify-between gap-[120px]">
                {/* <QnaQuestionsList data={fetchQnaQuestions()}/> */}
                {/**/}
                <section className="qna-question-list flex flex-col items-center">
                    <div className="qna-topic mb-7 text-xl font-bold">Frontend Engineering</div>
                    <div className="qna-questions flex flex-col gap-4 overflow-y-scroll max-h-[575px] hide-scrollbar h-[90svh]">
                        {qData?.map((q, index) => {
                            return (
                                // <QnaQuesCard
                                //     key={index}
                                //     question={q.question}
                                //     score = {q.score}
                                //     questionId={q.questionId}
                                // />
                                <BoxCard className={cn('bg-neutral-200 hover:brightness-90 flex flex-col justify-between p-4 min-h-[140px] cursor-pointer')} onClick={() => setQNum(q?.questionId)} key={index}>
                                    <div className="flex gap-1 align-items-center font-semibold text-lg truncate " >
                                        <span>{q?.questionId+1}.</span>
                                        <p>{q?.question}</p>
                                    </div>
                                    <span className="
                            text-neutral-400">+{q?.score} score</span>
                                </BoxCard>
                            );
                        })}
                    </div>
                </section>
                {/**/}
                <div className="w-full flex flex-col gap-16 ">
                    <div className="remainingTime-endSessionAction-wrapper flex justify-between">
                        <Timer seconds={3600} />
                        <Button variant="destructive" className="end-session-btn">End Session</Button>
                    </div>
                    <div>
                        <div className="flex flex-col gap-11">
                            <h2 className="question text-3xl font-semibold">{qData[qNum].question}</h2>
                            <div className="answer-wrapper ">
                                <p className="font-medium mb-1 text-sm" >Write your answer here</p>
                                <Textarea className="answer-box min-h-[300px] w-full px-4 py-2 placeholder:text-base text-base" placeholder="Good luck! You will do well" onChange={handleAnsChange} value={storeAns[qNum]} />
                            </div>
                        </div>
                        <Button className="mark-complete-btn mt-3 flex gap-1"><Check /><span>Mark as completed</span></Button>
                    </div>
                    <Button className="submit-btn w-fit ml-auto mt-[-25px]">Submit and End Session</Button>
                </div>
            </ViewContainer>
        </PageContent>
    )
}
export default QNASession