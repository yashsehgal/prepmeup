import { ReactHTMLElement } from "react";
import { cn } from "@/lib/utils";

const BoxCard : React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> =
({className, children, ...props}) =>(
        <div className={cn("relative w-[240px] h-[140px] rounded-2xl border-transparent shadow transition-all hover:shadow-md",
        "max-xl:w-[220px] max-xl:h-[120px]",
        "max-lg:w-[200px] max-lg:h-[100px]",
        "max-sm:rounded-xl", 
        className)} 
        {...props}>
            {children}
        </div>
    )

export {BoxCard}