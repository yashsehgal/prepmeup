import { cn } from "@/lib/utils"
import Link from "next/link"

const FeatureOption: React.FunctionComponent<FeatureOptionInterface> = ({
  featureName,
  icon,
  className,
  ...props
}) => {
  return (
    <Link href={""}>
      <div
        className={cn("relative w-[240px] h-[140px] rounded-2xl border border-transparent bg-neutral-800 text-neutral-50 shadow hover:shadow-md transition-all")}
        {...props}
      >
        {icon && <div className="absolute icon-wrapper top-4 right-4">{icon}</div>}
        {<p className="absolute font-medium text-lg bottom-4 left-4">{featureName}</p>}
      </div>
    </Link>
  )
}

export default FeatureOption;