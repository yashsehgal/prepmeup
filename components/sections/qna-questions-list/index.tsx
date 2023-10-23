import { QnaQuesCard } from "@/components/ui/qna-ques-card";

const QnaQuestionsList: React.FunctionComponent<{ data: Array<QnaQueCardInterface> }> = ({ data }) => {
  
    return(
        <section className="qna-question-list flex flex-col items-center">
            <div className="qna-topic mb-7 text-xl font-bold">Frontend Engineering</div>
            <div className="qna-questions flex flex-col gap-4 overflow-y-scroll max-h-[575px] hide-scrollbar h-[90svh]">
            {data.map((q, index) => {
            return (
              <QnaQuesCard
                key={index}
                question={q.question}
                score = {q.score}
                questionId={q.questionId}
              />
            );
          })}
            </div>
        </section>
    )
}

export {QnaQuestionsList};