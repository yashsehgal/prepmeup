import { Button } from "@/components/ui/button";
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
import ViewContainer from "@/components/layouts/view-container";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar">
      <ViewContainer className="flex">
        <h1 className="font-semibold text-2xl">Welcome User</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Sun /><span className="text-lg mx-1">/</span><Moon />
          </Button>
          <Button className="rounded-full w-10 h-10 font-bold">YS</Button>
        </div>
      </ViewContainer>
    </nav>
  )
}

export default Navbar;