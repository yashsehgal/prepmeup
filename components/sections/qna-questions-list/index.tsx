import { QnaQuesCard } from "@/components/ui/qna-ques-card";
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions";

const QnaQuestionsList: React.FunctionComponent<{
    data: Array<QnaQueCardInterface>;
  }> = ({ data }) => {
    return(
        <section className="qna-question-list flex flex-col items-center">
            <div className="qna-topic mb-5 text-xl font-bold">Frontend Engineering</div>
            <div className="qna-questions flex flex-col gap-4 overflow-y-scroll hide-scrollbar h-[75svh]">
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