import PageContent from '@/components/layouts/page-content';
import DashboardFeatureList from '@/components/sections/dashboard-features-list';
import DashboardRecentActivity from '@/components/sections/dashboard-recent-activity';
import TopicSuggestions from '@/components/sections/topic-suggestions';

const Dashboard: React.FunctionComponent = () => {
  return (
    <PageContent>
      <div className="dashboard grid grid-cols-1 gap-20">
        <DashboardFeatureList />
        {/* <DashboardRecentActivity /> */}
        {/* <TopicSuggestions /> */}
      </div>
    </PageContent>
  );
};
export default Dashboard;
