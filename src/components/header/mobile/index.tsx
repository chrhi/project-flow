import { Button } from "~/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { Home, Menu, MessageCircle, Package } from "lucide-react"
 
export function MobileSideBar() {
  return (
    <Sheet>
      <div>
        <div className="bg-white md:hidden flex items-center justify-between px-4 z-[99] w-full h-[70px] absolute bottom-0 ">
          <div className="w-[90%] flex items-center gap-x-4 h-full">
          <Button variant="ghost" className="lg:hidden">
             <Home className="w-6 h-6 text-[#64748B]" />
          </Button>
          <Button variant="ghost" className="lg:hidden">
             <MessageCircle className="w-6 h-6 text-[#64748B]" />
          </Button>
          <Button variant="ghost" className="lg:hidden">
          <Package  className="w-6 h-6 text-[#64748B]" />
             </Button>
          </div>
          <Button variant="ghost" className="lg:hidden">
            <Menu className="w-6 h-6 text-[#64748B]"  />
          </Button>
        </div>
       
      </div>
      <SheetContent className="w-full">
        <SheetHeader>
          <SheetTitle>ProjectFlow Navigation</SheetTitle>
        </SheetHeader>
        <div className="w-full flex h-[90%] mt-4 flex-col items-start gap-4 py-4">
         <Button variant="ghost" size="lg">Home</Button>
         <Button variant="ghost" size="lg" >Chat</Button>
         <Button variant="ghost" size="lg" >Projects</Button>
         <Button variant="ghost" size="lg" >Profile</Button>
         <Button variant="ghost" size="lg" >Controlling</Button>
         <Button variant="ghost" size="lg" >Logout</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}