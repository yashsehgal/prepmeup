import ViewContainer from "@/components/layouts/view-container"
import { cn } from "@/lib/utils"
import { fetchRecentQNASessions } from "@/middleware/qna/recent-sessions"
import RecentSessions from "@/components/ui/recent-sessions"
import ComponentList from "@/components/layouts/component-list"

const RecentQnASessionsList: React.FunctionComponent = () => {
  const RecentSessionsData: Array<RecentQNASessionCardInterface> = fetchRecentQNASessions();
  return (
    <section className="recent-qna-sessions-container mt-12">
      <ViewContainer>
        <h3 className="leading-8 text-2xl font-semibold text-neutral-800">
          {"Recent sessions"}
        </h3>
        <ComponentList>
          {RecentSessionsData.map(obj => {
            return (
              <div>
                <RecentSessions lastMessageContent={obj.lastMessageContent} sessionID={obj.sessionID} title={obj.title} />
                <h4 className={"font-semibold text-xl leading-7 p-2"}>{obj.title}</h4>
              </div>
            )
          }
          )}
        </ComponentList>
      </ViewContainer>
    </section>
  )
}

export { RecentQnASessionsList };