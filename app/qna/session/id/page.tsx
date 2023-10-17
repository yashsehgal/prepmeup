import PageContent from "@/components/layouts/page-content"
import ViewContainer from "@/components/layouts/view-container"
import { Button } from "@/components/ui/button"


const QNASession : React.FunctionComponent = () =>{
    console.log()
    return(
        <PageContent>
            <ViewContainer className="flex justify-between">
                <section className="qna-session-question-list">
                    <div className="qna-session-topic">[Topic]</div>
                    <div className="qna-questions flex flex-col">[question-list]</div>
                </section>
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