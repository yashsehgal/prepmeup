import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion"
import { cn } from "@/lib/utils";
import { DialogFooter } from "../dialog";
import { Button } from "../button";
import { Github } from "lucide-react";

const LoginFlow: React.FunctionComponent = () => {
  // to switch between flows in login procedure
  const [flow, setFlow] = useState<LoginFlowType>("email");
  // to store the email input
  const [emailInput, setEmailInput] = useState<string>("");

  return (
    <>
      {flow === "email"
        && <LoginEmailInputView
          emailInput={emailInput}
          setEmailInput={setEmailInput}
          setFlow={setFlow}
        />}
      {flow === "password"
        && <LoginPasswordInputView
          setFlow={setFlow}
        />}
      {flow === "email" && <> <div className="content-seperator flex flex-row items-center justify-between gap-3 text-neutral-200 select-none">
        <div className="h-[2px] w-full bg-neutral-100"></div>
        <span>{"OR"}</span>
        <div className="h-[2px] w-full bg-neutral-100"></div>
      </div>
        <DialogFooter>
          <Button size="lg" variant={"secondary"} className="text-base h-auto px-6 py-4 w-full flex flex-row items-center justify-center gap-2">
            <Github className="w-5 h-5" />
            {"Continue with GitHub"}
          </Button>
        </DialogFooter></>}
    </>
  )
}

const LoginEmailInputView: React.FunctionComponent<LoginEmailInputViewProps> = ({
  emailInput,
  setEmailInput,
  setFlow
}) => {
  // auto-focus to login email input
  useEffect(() => {
    document.querySelector('input')?.focus();
  }, []);
  return (
    <>
      <Input
        type="text"
        placeholder="Enter your email or username"
        className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
        onChange={(e) => setEmailInput(e.target.value as string)}
        onKeyDown={(e) => {
          if (emailInput && e.key === "Enter") setFlow("password");
        }}
        value={emailInput}
      />
      {emailInput && <motion.button
        initial={{
          y: 6
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: "spring",
          bounce: 0.75
        }}
        className={cn("mt-3 border border-transparent bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-100 font-medium text-lg px-6 py-3 rounded-lg w-full shadow-md hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all")}
        onClick={() => setFlow("password")}
      >
        {"Continue"}
      </motion.button>}
    </>
  )
}

const LoginPasswordInputView: React.FunctionComponent<LoginPasswordInputViewProps> = ({
  setFlow
}) => {
  // auto-focus to login password input
  useEffect(() => {
    document.querySelector('input')?.focus();
  }, []);
  return (
    <>
      <Input
        type="password"
        placeholder="Enter your password"
        className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
      />
      <div className=" grid grid-cols-2 gap-3 items-center">
        <motion.button
          initial={{
            y: 6
          }}
          animate={{
            y: 0,
          }}
          transition={{
            type: "spring",
            bounce: 0.75
          }}
          className={cn("mt-3 border border-neutral-200 bg-neutral-50  text-neutral-800 font-medium text-lg px-6 py-3 rounded-lg w-full hover:transition-all hover:scale-95 active:scale-90 active:transition-all")}
          onClick={() => setFlow("email")}
        >
          {"Go back"}
        </motion.button>
        <motion.button
          initial={{
            y: 6
          }}
          animate={{
            y: 0,
          }}
          transition={{
            type: "spring",
            bounce: 0.75
          }}
          className={cn("mt-3 border border-transparent bg-gradient-to-b from-neutral-700 to-neutral-800 text-neutral-100 font-medium text-lg px-6 py-3 rounded-lg w-full shadow-md hover:shadow-sm hover:transition-all hover:scale-95 active:scale-90 active:transition-all")}
        >
          {"Login"}
        </motion.button>
      </div>
    </>
  )
}

export default LoginFlow;