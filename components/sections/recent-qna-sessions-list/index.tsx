import ViewContainer from "@/components/layouts/view-container"
import { fetchRecentQNASessions } from "@/middleware/qna/recent-sessions"
import RecentSession from "@/components/ui/recent-session"
import BoxCardSlider from "@/components/layouts/box-card-slider"

const RecentQnASessionsList: React.FunctionComponent = () => {
  const RecentSessionsData: Array<QNASessionCardInterface> = fetchRecentQNASessions();
  return (
    <section className="recent-qna-sessions-container mt-12">
      <ViewContainer>
        <h3 className="leading-8 text-2xl font-semibold text-neutral-800">
          {"Recent sessions"}
        </h3>
        <BoxCardSlider>
          {RecentSessionsData.map((recentSession, index) => {
            return (
              <RecentSession key={index} lastMessageContent={recentSession.lastMessageContent} sessionID={recentSession.sessionID} title={recentSession.title} />
            )
          }
          )}
        </BoxCardSlider>
      </ViewContainer>
    </section>
  )
}

export { RecentQnASessionsList };