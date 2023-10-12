import ViewContainer from '@/components/layouts/view-container';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const RecentSessionsEmptyStateView: React.FunctionComponent = () => {
  return (
    <section className="recent-sessions-empty-state-view py-[70px] cursor-default select-none">
      <ViewContainer>
        <div className="recent-sessions-empty-state-content-wrapper w-fit mx-auto">
          <Image
            src={'/media/empty-state-graphic.svg'}
            width={'400'}
            height={'400'}
            className={cn('')}
            id="empty-state-graphic"
            loading="lazy"
            alt="No Recent Sessions"
          />
          <p className="text-neutral-300 text-lg font-medium text-center">
            No Recents <br />
            Start by creating a new session
          </p>
        </div>
      </ViewContainer>
    </section>
  );
};

export { RecentSessionsEmptyStateView };
