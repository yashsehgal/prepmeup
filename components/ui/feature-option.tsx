import { cn } from '@/lib/utils';
import Link from 'next/link';
import { BoxCard } from '../layouts/box-card';

const FeatureOption: React.FunctionComponent<FeatureOptionInterface> = ({
  featureName,
  icon,
  link,
  className,
  ...props
}) => {
  return (
    <Link
      href={link}
      className="w-fit focus:outline-none h-fit rounded-2xl max-sm:rounded-xl hover:scale-95 active:scale-90 transition-all">
      <BoxCard
        className={cn(
          'bg-gradient-to-tr from-neutral-900 to-neutral-800 text-neutral-50',
          'hover:brightness-125',
        )}
        {...props}>
        {icon && (
          <div className="absolute icon-wrapper top-4 right-4">{icon}</div>
        )}
        {
          <p className="absolute font-medium text-lg bottom-4 left-4 max-lg:text-base">
            {featureName}
          </p>
        }
      </BoxCard>
    </Link>
  );
};

export default FeatureOption;
