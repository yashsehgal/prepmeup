import { cn } from '@/lib/utils';
import {
  Briefcase,
  FileSearch,
  MessagesSquare,
  PencilLine,
  Video,
} from 'lucide-react';

const FeatureList: Array<FeatureOptionInterface> = [
  {
    featureName: 'Video Interview',
    icon: <Video className={cn('max-md:w-4 h-auto')} />,
    link: '#',
  },
  {
    featureName: 'ATS Resume Review',
    icon: <FileSearch className={cn('max-md:w-4 h-auto')} />,
    link: '#',
  },
  {
    featureName: 'Topic Based Q/A',
    icon: <MessagesSquare className={cn('max-md:w-4 h-auto')} />,
    link: '/qna',
  },
  {
    featureName: 'Mock Aptitude',
    icon: <PencilLine className={cn('max-md:w-4 h-auto')} />,
    link: '#',
  },
  {
    featureName: 'Behavioural Rounds',
    icon: <Briefcase className={cn('max-md:w-4 h-auto')} />,
    link: '#',
  },
];

export { FeatureList };
