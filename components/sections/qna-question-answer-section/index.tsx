"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react';
import Tiptap from "@/components/ui/tiptap";
import { fetchQnaQuestions } from "@/middleware/qna/qna-questions"
import { useEffect, useState } from "react";

function QnaQuestionAnswerSection(props:any){

    const responseList = ()=>{
        let response: {id: number, question: string, answer: string}[] = [];
        fetchQnaQuestions().map((object,index)=>{
            response.push({
                id: index,
                question: object.question,
                answer: "" 
            })
        })
        return response;
    }

    const [responses, setResponses] = useState(responseList());

    const handleTextAreaChange = (questionNum: number, value: string)=>{
        let newResponses = [...responses];
        newResponses[questionNum].answer = value;
        setResponses(newResponses)
    }
    
    return(
        <section>
            <div className="flex flex-col gap-11">
                <h2 className="question text-3xl font-semibold">{props.questionData[props.questionNum].question}</h2>
                <div className="answer-wrapper ">
                    <p className="font-medium mb-1 text-sm" >Write your answer here</p>
                    <Textarea className="answer-box min-h-[300px] w-full px-4 py-2 placeholder:text-base text-base" placeholder="Good luck! You will do well" value={responses[props.questionNum].answer} onChange={(e)=>{handleTextAreaChange(props.questionNum, e.target.value)}}/>
                    {/* <Tiptap  /> */}
                </div>
            </div>
            <Button className="mark-complete-btn mt-3 flex gap-1"><Check /><span>Mark as completed</span></Button>
        </section>
    )
}

export {QnaQuestionAnswerSection};