import BoxCardSlider from '@/components/layouts/box-card-slider';
import ViewContainer from '@/components/layouts/view-container';
import FeatureOption from '@/components/ui/feature-option';
import { FeatureList } from '@/common/dashboard-feature-list';

const DashboardFeatureList: React.FunctionComponent = () => {
  return (
    <section className="dashboard-features-list">
      <ViewContainer>
        <h3 className="text-lg font-semibold">{'Start new activity'}</h3>
        <BoxCardSlider>
          {FeatureList.map((featureItem, featureIndex) => (
            <FeatureOption
              featureName={featureItem.featureName}
              icon={featureItem.icon}
              link={featureItem.link}
              key={featureIndex}
            />
          ))}
        </BoxCardSlider>
      </ViewContainer>
    </section>
  );
};

export default DashboardFeatureList;
