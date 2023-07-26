import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"
import { Menu } from "lucide-react"
 
export function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
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