import {
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
  import { userReducer } from "~/store/userReducer"
  import { Button } from "~/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "~/components/ui/dropdown-menu"

 import { ChevronsUpDown } from "lucide-react"
import { Title } from "@tremor/react"
  
  export function DropDownAdmin() {
    const {email} = userReducer()
    return (
      <DropdownMenu>
        <div className="flex gap-x-4 items-center justify-start">
        <Title>{email}</Title>
        <DropdownMenuTrigger asChild>
        <Button variant="ghost"><ChevronsUpDown className="w-4 h-4 text-gray-400" /></Button>
        </DropdownMenuTrigger>
        </div>
        
        <DropdownMenuContent className="w-56">
           
        <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Retourner à mon compte</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Déconnexion</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  