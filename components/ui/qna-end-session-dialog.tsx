'use client'
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./dialog";
import { Button } from "./button";

interface QnaEndSessionDialogProps {
  variant: string; // You can use a more specific type if necessary
  btnText: string;
  classname?: string;
}

const QnaEndSessionDialog: React.FunctionComponent<QnaEndSessionDialogProps> = (props) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={props.btnText==="End Session"? "destructive": "default"} className={props.classname}>{props.btnText}</Button>
        </DialogTrigger >
        <DialogContent>
          <DialogHeader className="p-2">
            <DialogTitle className="mb-1">Are you sure about {props.btnText==="End Session"?"ending": "submitting"}?</DialogTitle>
            <DialogDescription >
                <p className="text-neutral-400 text-base mb-4">This action will end this test and will be considered as your final submission to this Q/A Session!</p>
                <div className="flex justify-end gap-2 ">
                    <Button variant="outline" className="text-base text-stale-900 font-base">Ah, let me try more</Button>
                    <Button className="text-base font-base">Sure, Enought now</Button>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { QnaEndSessionDialog };
