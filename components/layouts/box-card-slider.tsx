import { cn } from "@/lib/utils"

const BoxCardSlider: React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("mt-3 py-2 flex flex-row gap-4 overflow-x-scroll hide-scrollbar",
      "max-md:grid max-md:grid-cols-2 max-md:gap-y-4 max-md:gap-x-4 max-md:overflow-visible max-md:w-fit",
      className)} {...props}>
      {children}
    </div>
  )
}

export default BoxCardSlider;