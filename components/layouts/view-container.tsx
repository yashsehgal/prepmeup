import { cn } from '@/lib/utils';

const ViewContainer: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div className={cn('view-container', className)} {...props}>
      {children}
    </div>
  );
};

export default ViewContainer;
