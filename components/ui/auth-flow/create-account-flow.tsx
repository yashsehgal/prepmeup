import React, { useEffect, useState } from "react";
import { DialogFooter } from "../dialog";
import { Button } from "../button";
import { Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CreateAccountFlow: React.FunctionComponent = () => {
  // to switch between flows in account creation procedure
  const [flow, setFlow] = useState<CreateAccountFlowType>("name");

  // account creation input fields state
  const [createAccountData, setCreateAccountData] = useState<CreateAccountDataType>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  });

  return (
    <>
      {flow === "name"
        && <CreateAccountNameInputView
          setCreateAccountData={setCreateAccountData}
          data={createAccountData}
          setFlow={setFlow}
        />}
      {flow === "email"
        && <CreateAccountEmailInputView
          setCreateAccountData={setCreateAccountData}
          data={createAccountData}
          setFlow={setFlow}
        />}
      {flow === "password"
        && <CreateAccountPasswordInputView
          setCreateAccountData={setCreateAccountData}
          data={createAccountData}
          setFlow={setFlow}
        />}
      {flow === "name" && <> <div className="content-seperator flex flex-row items-center justify-between gap-3 text-neutral-200 select-none">
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

const CreateAccountNameInputView: React.FunctionComponent<CreateAccountNameInputViewProps> = ({
  data,
  setCreateAccountData,
  setFlow
}) => {
  // auto-focus to first name input
  useEffect(() => {
    document.querySelector('input')?.focus();
  }, []);
  return (
    <>
      <div className="grid grid-cols-2 items-center gap-3">
        <Input
          type="text"
          placeholder="First name"
          className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
          onChange={(e: any) => {
            setCreateAccountData({
              ...data,
              firstName: e.target.value as string
            })
          }}
          value={data.firstName}
        />
        <Input
          type="text"
          placeholder="Last name"
          className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
          onChange={(e: any) => {
            setCreateAccountData({
              ...data,
              lastName: e.target.value as string
            })
          }}
          value={data.lastName}
        />
      </div>
      <Input
        type="text"
        placeholder="Create a username"
        className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
        onChange={(e: any) => {
          setCreateAccountData({
            ...data,
            username: e.target.value as string
          });
        }}
        value={data.username}
      />
      {data.username && <motion.button
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
        onClick={() => setFlow("email")}
      >
        {"Next"}
      </motion.button>}
    </>
  )
}

const CreateAccountEmailInputView: React.FunctionComponent<CreateAccountEmailInputViewProps> = ({
  data,
  setCreateAccountData,
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
        placeholder="Enter your email"
        className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
        onChange={(e: any) => {
          setCreateAccountData({
            ...data,
            email: e.target.value as string
          })
        }}
        value={data.email}
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
          onClick={() => setFlow("name")}
        >
          {"Go back"}
        </motion.button>
        {data.email && <motion.button
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
          {"Next"}
        </motion.button>}
      </div>
    </>
  )
}

const CreateAccountPasswordInputView: React.FunctionComponent<CreateAccountPasswordInputViewProps> = ({
  setFlow,
  setCreateAccountData,
  data
}) => {
  // auto-focus to login password input
  useEffect(() => {
    document.querySelector('input')?.focus();
  }, []);
  return (
    <>
      <Input
        type="password"
        placeholder="Create a password"
        className="px-6 py-4 text-lg placeholder:text-neutral-400 bg-neutral-100 focus:bg-neutral-50"
        onChange={(e: any) => {
          setCreateAccountData({
            ...data,
            password: e.target.value as string
          })
        }}
      />
      <Input
        type="password"
        placeholder="Confirm your password"
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
          {"Create account"}
        </motion.button>
      </div>
    </>
  )
}

export default CreateAccountFlow;