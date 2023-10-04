import { Button } from "@/components/ui/button";
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import ViewContainer from "@/components/layouts/view-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar py-6">
      <ViewContainer className="flex items-center justify-between">
        <h1 className="font-semibold text-2xl">
          {"Welcome User"}
        </h1>
        <div className="flex gap-2">
          <Button variant="ghost" className="rounded-full">
            {true ?
              <Moon className="w-5 h-auto" />
              : <Sun className="w-5 h-auto" />}
          </Button>
          <Avatar>
            <AvatarImage></AvatarImage>
            <AvatarFallback>{"YS"}</AvatarFallback>
          </Avatar>
        </div>
      </ViewContainer>
    </nav>
  )
}

export default Navbar;