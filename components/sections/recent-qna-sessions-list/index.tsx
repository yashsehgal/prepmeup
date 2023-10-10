import ViewContainer from "@/components/layouts/view-container"
import { cn } from "@/lib/utils"
import { fetchRecentQNASessions } from "@/middleware/qna/recent-sessions";

const RecentQnASessionsList: React.FunctionComponent = ()=>{
    return(
        <section className="recent-qna-sessions-container mt-12">
          <ViewContainer>
            <h3 className="leading-8 text-2xl font-semibold text-neutral-800">
              {"Recent sessions"}
            </h3>
            <div className={
              cn("features-list-container mt-3 py-2 flex flex-row gap-4 overflow-x-scroll hide-scrollbar",
                "max-md:grid max-md:grid-cols-2 max-md:gap-y-4 max-md:gap-x-4 max-md:overflow-visible max-md:w-fit",
              )
            }>
            
            </div>
          </ViewContainer>
        </section>
    )
}

export {RecentQnASessionsList} ;