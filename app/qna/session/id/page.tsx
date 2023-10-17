import PageContent from "@/components/layouts/page-content"
import ViewContainer from "@/components/layouts/view-container"
import { Button } from "@/components/ui/button"
import { QnaQuestionsList } from "@/components/sections/qna-questions-list"
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions"


const QNASession : React.FunctionComponent = () =>{
    
    return(
        <PageContent>
            <ViewContainer className="flex justify-between">
                <QnaQuestionsList data={fetchQnaQuestions()}/>
                <div>
                    <div className="flex">
                        <div className="remaining-time-wrapper">
                            <div className="remaining-time flex justify-between">
                                <p>Remaining Time</p>
                                <p>[time]</p>
                            </div>
                        </div>
                        <div className="remaining-time-line"></div>
                        <Button className="end-session-btn">End Session</Button>
                    </div>
                    <div className="question">[question]</div>
                    <div className="answer-wrapper"></div>
                    <Button className="mark-complete-btn">Mark as completed</Button>
                    <Button className="submit-btn">Submit and End Session</Button>
                </div>
            </ViewContainer>
        </PageContent>
    )
}
export default QNASession