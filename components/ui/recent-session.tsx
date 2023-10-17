import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { BoxCard } from '../layouts/box-card';

const RecentSession: React.FunctionComponent<QNASessionCardInterface> = ({
  lastMessageContent,
  title,
  sessionID,
}) => {
  return (
    <Link
      href="#"
      className="w-fit active:outline-none active:transition-none focus:outline-none h-fit rounded-2xl max-sm:rounded-xl hover:scale-95 active:scale-90 transition-all">
      <BoxCard className={cn('bg-neutral-700 hover:brightness-90')}>
        <MessageSquare
          className={cn('absolute icon-wrapper top-4 right-4 text-black')}
        />
        {
          <p className="absolute font-medium text-base text-transparent bg-gradient-to-tr from-black/20 to-neutral-100/50 bg-clip-text bottom-4 left-4 max-lg:text-sm">
            {'...'}
            <br />
            {lastMessageContent}
          </p>
        }
      </BoxCard>
      <h4 className={'font-semibold text-base leading-snug p-2'}>{title}</h4>
    </Link>
  );
};

export default RecentSession;
