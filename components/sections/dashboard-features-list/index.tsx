import ViewContainer from "@/components/layouts/view-container";
import FeatureOption from "@/components/ui/feature-option";
import { Video } from "lucide-react";

const FeatureList: Array<FeatureOptionInterface> = [
  {
    featureName: "Video Interview",
    icon: <Video />
  },
  {
    featureName: "ATS Resume Review",
  },
  {
    featureName: "Topic Based Q/A"
  },
  {
    featureName: "Mock Aptitude"
  },
  {
    featureName: "Behavioural Rounds"
  },
]

const DashboardFeatureList: React.FunctionComponent = () => {
  return (
    <section className="dashboard-features-list">
      <ViewContainer>
        <h3 className="text-lg font-semibold">
          {"Start new activity"}
        </h3>
        <div className="features-list-container mt-3 flex flex-row gap-4 overflow-x-scroll hide-scrollbar">
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