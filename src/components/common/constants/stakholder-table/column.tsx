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
import { Badge } from "@tremor/react"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<MemberOrg>[] = [
  {
    accessorKey: "index",
    header: ({ column }) => {
      return (
        <Button
          className="flex items-center justify-start pl-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          #
       
        </Button>
      )
    },
  },
  {
    accessorKey: "image",
    header: "Avatar",
    cell: ({ row }) => {

      return (
        <img src={row.original.image || "/assets/avatar.png"} alt="avatar" className="w-[40px] rounded-[50%]"  />
    
      )
    }
  },
  {
    accessorKey: "name",
  
    header: ({ column }) => {
      return (
        <Button
        className="flex items-center justify-start pl-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
        
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
   
    header: ({ column }) => {
      return (
        <Button
        className="flex items-center justify-start pl-0"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          
        </Button>
      )
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {

      return <Badge color="blue" className="rounded-md ">{row.original.role}</Badge>
    }
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
