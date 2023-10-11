import { cn } from "@/lib/utils"
import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { BoxCard } from "../layouts/box-card"

const RecentSessions: React.FunctionComponent<RecentQNASessionCardInterface> = ({
  lastMessageContent,
  title,
  ...props
}) => {
  return (
    <Link href="#" className="w-fit focus:outline-none focus:ring h-fit rounded-2xl max-sm:rounded-xl hover:scale-95 active:scale-90 transition-all focus:ring-offset-2 focus:ring-neutral-300">
      <BoxCard
        className={cn("bg-slate-100 to-neutral-800 text-neutral-50 hover:brightness-90"
        )}
        {...props}
      >
        <MessageSquare className={cn("absolute icon-wrapper top-4 right-4 text-black")} />
        {<p className="absolute font-medium text-lg text-slate-300 bottom-4 left-4 max-lg:text-base">{lastMessageContent}</p>}
      </BoxCard>
      <h4 className={"font-semibold text-xl leading-7 p-2"}>{title}</h4>
    </Link>
  )
}

export default RecentSessions;