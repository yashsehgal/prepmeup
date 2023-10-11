import { cn } from "@/lib/utils"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

const RecentSessions: React.FunctionComponent<RecentQNASessionCardInterface> = ({
    lastMessageContent
}) => {
  return (
    <Link href="#" className="w-fit focus:outline-none focus:ring h-fit rounded-2xl max-sm:rounded-xl hover:scale-95 active:scale-90 transition-all focus:ring-offset-2 focus:ring-neutral-300">
      <div
        className={cn("card-box bg-slate-100 to-neutral-800 text-neutral-50",
          "max-xl:w-[220px] max-xl:h-[120px]",
          "max-lg:w-[200px] max-lg:h-[100px]",
          "max-sm:rounded-xl",
          "hover:shadow-md hover:brightness-90",
        )}
      >
        <MessageSquare className={cn("absolute icon-wrapper top-4 right-4 text-black")} />
        {<p className="absolute font-medium text-lg text-slate-300 bottom-4 left-4 max-lg:text-base">{lastMessageContent}</p>}
      </div>
    </Link>
  )
}

export default RecentSessions;