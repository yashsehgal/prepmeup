'use client'
import PageContent from "@/components/layouts/page-content"
import ViewContainer from "@/components/layouts/view-container"
import { Button } from "@/components/ui/button"
import { QnaQuestionsList } from "@/components/sections/qna-questions-list"
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions"
import { useState } from "react"
import { Timer } from "@/components/ui/qna-timer"
import { QnaQuestionAnswerSection } from "@/components/sections/qna-question-answer-section"
import { QnaEndSessionDialog } from "@/components/ui/qna-end-session-dialog"


const QNASession: React.FunctionComponent = () => {

    const questionData = fetchQnaQuestions();
    const [questionNum, setQuestionNum] = useState(0);

    return (
        <PageContent>
            <ViewContainer className="flex justify-between gap-[120px]">
                <QnaQuestionsList data={fetchQnaQuestions()} setQuestionNum={setQuestionNum} />
                <div className="w-full flex flex-col gap-16 ">
                    <div className="remainingTime-endSessionAction-wrapper flex justify-between">
                        <Timer seconds={3600} />
                        {/* <Button variant="destructive" className="end-session-btn">End Session</Button> */}
                        <QnaEndSessionDialog variant="destructive" btnText="End Session" />
                    </div>
                    <QnaQuestionAnswerSection questionData={questionData} questionNum= {questionNum}/>
                    <QnaEndSessionDialog variant="default" btnText="Submit and End Session" classname="w-fit ml-auto mt-[-25px]" />
                </div>
            </ViewContainer>
        </PageContent>
    )
}
export default QNASession