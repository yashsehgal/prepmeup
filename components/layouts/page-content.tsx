import { cn } from "@/lib/utils"

const PageContent: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("page-content my-10", className)} {...props}>
      {children}
    </div>
  )
};

export default PageContent;