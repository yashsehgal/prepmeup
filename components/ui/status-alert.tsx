import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const StatusAlert: React.FunctionComponent = () => {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle className="flex flex-row items-center gap-2">
        All systems running
        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
      </AlertTitle>
      <AlertDescription>
        Dashboard UI going to be live soon.
      </AlertDescription>
    </Alert>
  )
}

export default StatusAlert;