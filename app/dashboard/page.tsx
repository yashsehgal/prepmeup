import DashboardFeatureList from "@/components/sections/dashboard-features-list";
import DashboardRecentActivity from "@/components/sections/dashboard-recent-activity";
import TopicSuggestions from "@/components/sections/topic-suggestions";
import StatusAlert from "@/components/ui/status-alert";

const Dashboard: React.FunctionComponent = () => {
    return (
        <div className="dashboard">
            <DashboardFeatureList />
            <DashboardRecentActivity />
            <TopicSuggestions />
        </div>
    )
}
export default Dashboard;