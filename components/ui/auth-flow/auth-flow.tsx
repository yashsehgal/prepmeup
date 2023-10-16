"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../dialog";
import { Button } from "../button";
import { Github } from "lucide-react";
import { CreateAccountFlow, LoginFlow } from ".";

const AuthFlow: React.FunctionComponent = () => {
  // setting the first default view as "login"
  const [view, setView] = useState<AuthFlowViewType>("login");
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Get started</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="mb-3">
            <DialogTitle className="text-4xl font-semibold">
              {view === "login" ? "Login" : "Create Account"}
            </DialogTitle>
            <DialogDescription className="text-neutral-400 text-base">
              {view === "login" ? <>Don&apos;t have an account?</> : <>Already have an account?</>}{" "}
              <button
                className="text-neutral-800"
                onClick={() => {
                  if (view === "login") setView("create-account");
                  else setView("login");
                }}
              >
                {view === "login" ? "Create here" : "Login"}
              </button>
            </DialogDescription>
          </DialogHeader>
          {view === "login" && <LoginFlow />}
          {view === "create-account" && <CreateAccountFlow />}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AuthFlow;