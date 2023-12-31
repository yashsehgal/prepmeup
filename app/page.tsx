import PageContent from '@/components/layouts/page-content';
import ViewContainer from '@/components/layouts/view-container';
import StatusAlert from '@/components/ui/status-alert';

const App: React.FunctionComponent = () => {
  return (
    <PageContent>
      <ViewContainer>
        <StatusAlert />
      </ViewContainer>
    </PageContent>
  );
};

export default App;
