"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";
import { Button } from "../button";

const AuthFlow: React.FunctionComponent = () => {
  // setting the first default view as "login"
  const [view, setView] = useState<AuthFlowViewType>("login");

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Get started</Button>
        </DialogTrigger>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  )
}

export default AuthFlow;