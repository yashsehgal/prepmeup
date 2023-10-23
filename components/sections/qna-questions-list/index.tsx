import { QnaQuesCard } from "@/components/ui/qna-ques-card";
import { useState } from "react";

const QnaQuestionsList = (props:any) => {
    return(
      <section className="qna-question-list flex flex-col items-center">
        <div className="qna-topic mb-7 text-xl font-bold">Frontend Engineering</div>
        <div className="qna-questions flex flex-col gap-4 overflow-y-scroll max-h-[575px] hide-scrollbar h-[90svh]">
            {props.data?.map((question:any) => {
                return (
                    <QnaQuesCard
                        key={question.index}
                        question={question.question}
                        score = {question.score}
                        questionId={question.questionId}
                        setQuestionNum = {props.setQuestionNum}
                    />
                );
            })}
        </div>
    </section>
    )
}

export {QnaQuestionsList};