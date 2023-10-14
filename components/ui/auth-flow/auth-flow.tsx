import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";

const AuthFlow: React.FunctionComponent = () => {
  // setting the first default view as "login"
  const [view, setView] = useState<AuthFlowViewType>("login");

  return (
    <>
      <Dialog defaultOpen>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  )
}

export default AuthFlow;