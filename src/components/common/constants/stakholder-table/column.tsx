import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import { OpenDeteRisksDeleteModel } from "~/store/open-models"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<MemberOrg>[] = [
  {
    accessorKey: "image",
    header: "Avatar",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
 
 
  
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {

      const setRisksDelete = OpenDeteRisksDeleteModel(state => state.setId)

      const setIsShowing = OpenDeteRisksDeleteModel(state => state.setShowModel)

      const handleDelete = () => {
        setRisksDelete(row.original.id)
        setIsShowing(true)

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
           
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
           
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
