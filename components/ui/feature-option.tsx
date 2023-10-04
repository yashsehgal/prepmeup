import { cn } from "@/lib/utils"
import Link from "next/link"

const FeatureOption: React.FunctionComponent<FeatureOptionInterface> = ({
  featureName,
  icon,
  className,
  ...props
}) => {
  return (
    <Link href={""} className="w-fit focus:outline-none focus:ring h-fit rounded-2xl max-sm:rounded-xl hover:scale-95 active:scale-90 transition-all focus:ring-offset-2 focus:ring-neutral-300">
      <div
        className={cn("relative w-[240px] h-[140px] rounded-2xl border border-transparent bg-gradient-to-tr from-neutral-900 to-neutral-800 text-neutral-50 shadow transition-all",
          "max-xl:w-[220px] max-xl:h-[120px]",
          "max-lg:w-[200px] max-lg:h-[100px]",
          "max-sm:rounded-xl",
          "hover:shadow-md hover:brightness-125",
        )}
        {...props}
      >
        {icon && <div className="absolute icon-wrapper top-4 right-4">{icon}</div>}
        {<p className="absolute font-medium text-lg bottom-4 left-4 max-lg:text-base">{featureName}</p>}
      </div>
    </Link>
  )
}

export default FeatureOption;