'use client'
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "./dialog";
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
        <DialogTrigger>
          <Button variant={props.btnText==="End Session"? "destructive": "default"} className={props.classname}>{props.btnText}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader></DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export { QnaEndSessionDialog };
