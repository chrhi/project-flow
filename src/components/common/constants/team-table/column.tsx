import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { confirmDeleteUser } from '~/store/confirm-actions'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { ReactNode } from "react"
import { Badge } from "@tremor/react"
import { api } from "~/utils/api"
import { toast } from "react-hot-toast"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string
  firstName: string
  email: string
  LastName : string 
  // type : string
  // street : string , 
  // phone : string , 
  // zipCode : string , 
  // createdAt : string , 
  status : string,
  // password : string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "LastName",
    header: "Last Name",
  },
  // {
  //   accessorKey: "type",
  //   header: "Type",

  // },
 
  // {
  //   accessorKey: "street",
  //   header: "street",
  // },
  // {
  //   accessorKey: "phone",
  //   header: "Phone",
  // },
 
  // {
  //   accessorKey: "zipCode",
  //   header: "Zip Code",
  // },
  // {
  //   accessorKey: "createdAt",
  //   header: "Created At",
  // },

 
 
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
     
      return <Badge>{row.original.status}</Badge>
    }
  },
  // {
  //   accessorKey: "password",
  //   header: "password",
  // },
  {
    id: "actions",
    cell: ({ row }) => {
     
      const setShowModel = confirmDeleteUser(state =>  state.setShowModel)
      const setUserId = confirmDeleteUser(state =>  state.setId)

      const handleDeleteUser = () => {
        if(row.original.email === "mahdi.chahri55@gmail.com"){
          toast.success("  sorry you can not delete me")
          return
        }
        setUserId(row.original.id)
        setShowModel(true)
      }

      const handleBlockUnBlockUser = () => {

      

        if(row.original.status === "BLOCKED"){
          console.log("this feature is not supported")
        }

        
      }
    
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
             Copier l'ID utilisateur
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onClick={handleBlockUnBlockUser} >{row.original.status === "BLOCKED"? "débloquer l'utilisateur" : "Bloquer un utilisateur" }</DropdownMenuItem>
            <DropdownMenuItem 
        
            className="cursor-pointer !hover:bg-red-300" onClick={handleDeleteUser}>Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
