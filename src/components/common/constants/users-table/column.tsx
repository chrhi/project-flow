import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { confirmDeleteUser } from '~/store/app-reducer/confirm-actions'
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


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string
  firstName: string
  email: string
  LastName : string 
  type : string
  street : string , 
  phone : string , 
  zipCode : string , 
  createdAt : string , 
  status : string
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
  {
    accessorKey: "type",
    header: "Type",

  },
 
  {
    accessorKey: "street",
    header: "street",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
 
  {
    accessorKey: "zipCode",
    header: "Zip Code",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
 
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
     
      return <Badge>{row.original.status}</Badge>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
     
      const setShowModel = confirmDeleteUser(state =>  state.setShowModel)
      const setUserId = confirmDeleteUser(state =>  state.setId)

      const handleDeleteUser = () => {
        setUserId(row.original.id)
        setShowModel(true)
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
              Copy User ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Update User</DropdownMenuItem>
            <DropdownMenuItem 
        
            className="cursor-pointer !hover:bg-red-300" onClick={handleDeleteUser}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
