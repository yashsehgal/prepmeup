import { Button } from "@/components/ui/button";
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
// import ViewContainer from "@/components/layouts/view-container";

const Navbar: React.FunctionComponent = () => {
  return (
    <nav className="navbar">
      <section className="view-container justify-between">
        {/* <ViewContainer className="view-container"> */}
          <div className="font-semibold text-2xl">Welcome User</div>
          <div className="flex gap-2">
            <Button variant="outline">
            <Sun/><span className="text-lg mx-1">/</span><Moon/>
            </Button>
            <Button className="rounded-full w-10 h-10 font-bold">YS</Button>
          </div>
        {/* </ViewContainer> */}
      </section>
    </nav>
  )
}

export default Navbar;