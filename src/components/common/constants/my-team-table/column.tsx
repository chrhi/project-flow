import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"




export type MyTeam = {
  id: string
  name: string
  email: string
  role  : string 
  image : string
}

export const columns: ColumnDef<MyTeam>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: " Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: ({ row }) => {
     
 
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
             Delete User
            </DropdownMenuItem>
            </ DropdownMenuContent >
        </DropdownMenu>
      )
    },
  }
]
