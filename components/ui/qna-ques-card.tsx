import Link from "next/link";
import { BoxCard } from "../layouts/box-card";
import { cn } from "@/lib/utils";

const QnaQuesCard: React.FunctionComponent<QnaQueCardInterface> = ({question, questionId, score})=>{
    return(
        <BoxCard className={cn('bg-neutral-200 hover:brightness-90 flex flex-col justify-between p-4')}>
        <p className="font-semibold text-lg truncate">{question}</p>
        <span className="
        text-neutral-400">+{score} score</span>
        </BoxCard>
    )
}

export {QnaQuesCard};