import ViewContainer from "@/components/layouts/view-container";
import FeatureOption from "@/components/ui/feature-option";
import { cn } from "@/lib/utils";
import { Briefcase, FileSearch, MessagesSquare, PencilLine, Video } from "lucide-react";

const FeatureList: Array<FeatureOptionInterface> = [
  {
    featureName: "Video Interview",
    icon: <Video className={cn("max-md:w-4 h-auto")} />
  },
  {
    featureName: "ATS Resume Review",
    icon: <FileSearch className={cn("max-md:w-4 h-auto")} />
  },
  {
    featureName: "Topic Based Q/A",
    icon: <MessagesSquare className={cn("max-md:w-4 h-auto")} />
  },
  {
    featureName: "Mock Aptitude",
    icon: <PencilLine className={cn("max-md:w-4 h-auto")} />
  },
  {
    featureName: "Behavioural Rounds",
    icon: <Briefcase className={cn("max-md:w-4 h-auto")} />
  },
]

const DashboardFeatureList: React.FunctionComponent = () => {
  return (
    <section className="dashboard-features-list">
      <ViewContainer>
        <h3 className="text-lg font-semibold">
          {"Start new activity"}
        </h3>
        <div className={cn("features-list-container mt-3 py-2 flex flex-row gap-4 overflow-x-scroll hide-scrollbar",
          "max-md:grid max-md:grid-cols-2 max-md:gap-y-4 max-md:gap-x-4 max-md:overflow-visible max-md:w-fit",
        )}>
          {FeatureList.map((featureItem, featureIndex) => (
            <FeatureOption
              featureName={featureItem.featureName}
              icon={featureItem.icon}
              key={featureIndex}
            />
          ))}
        </div>
      </ViewContainer>
    </section>
  )
}

export default DashboardFeatureList;