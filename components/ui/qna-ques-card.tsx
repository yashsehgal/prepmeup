import Link from "next/link";
import { BoxCard } from "../layouts/box-card";
import { cn } from "@/lib/utils";

const QnaQuesCard: React.FunctionComponent<QnaQueCardInterface> = ({question, questionId, score})=>{
    return(
        <BoxCard className={cn('bg-neutral-200 hover:brightness-90 flex flex-col justify-between p-4 min-h-[140px]')}>
        <div className="flex gap-1 align-items-center font-semibold text-lg truncate " >
            <span>{questionId}.</span>
            <p>{question}</p>
        </div>   
        <span className="
        text-neutral-400">+{score} score</span>
        </BoxCard>
    )
}

export {QnaQuesCard};