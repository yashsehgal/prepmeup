import Link from "next/link";
import { BoxCard } from "../layouts/box-card";
import { cn } from "@/lib/utils";

const QnaQuesCard: React.FunctionComponent<QnaQueCardInterface> = ({question, questionId, score})=>{
    return(
        <Link href="#">
            <BoxCard className={cn('bg-neutral-200 hover:brightness-90 flex flex-col justify-between p-4')}>
            <div className="font-semibold text-lg">{question}</div>
            <div className="
            text-neutral-400">+{score} score</div>
            </BoxCard>
        </Link>
    )
}

export {QnaQuesCard};