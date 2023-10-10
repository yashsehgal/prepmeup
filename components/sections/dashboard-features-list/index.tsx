import ComponentList from "@/components/layouts/component-list";
import ViewContainer from "@/components/layouts/view-container";
import FeatureOption from "@/components/ui/feature-option";
import { cn } from "@/lib/utils";
import { Briefcase, FileSearch, MessagesSquare, PencilLine, Video } from "lucide-react";

const FeatureList: Array<FeatureOptionInterface> = [
  {
    featureName: "Video Interview",
    icon: <Video className={cn("max-md:w-4 h-auto")} />,
    link: "#"
  },
  {
    featureName: "ATS Resume Review",
    icon: <FileSearch className={cn("max-md:w-4 h-auto")} />,
    link: "#"
  },
  {
    featureName: "Topic Based Q/A",
    icon: <MessagesSquare className={cn("max-md:w-4 h-auto")} />,
    link: "/qna"
  },
  {
    featureName: "Mock Aptitude",
    icon: <PencilLine className={cn("max-md:w-4 h-auto")} />,
    link: "#"
  },
  {
    featureName: "Behavioural Rounds",
    icon: <Briefcase className={cn("max-md:w-4 h-auto")} />,
    link: "#"
  },
]

const DashboardFeatureList: React.FunctionComponent = () => {
  return (
    <section className="dashboard-features-list">
      <ViewContainer>
        <h3 className="text-lg font-semibold">
          {"Start new activity"}
        </h3>
        <ComponentList>
          {FeatureList.map((featureItem, featureIndex) => (
            <FeatureOption
              featureName={featureItem.featureName}
              icon={featureItem.icon}
              link={featureItem.link}
              key={featureIndex}
            />
          ))}
        </ComponentList>
      </ViewContainer>
    </section>
  )
}

export default DashboardFeatureList;