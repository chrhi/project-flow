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
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"



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
    cell : ({row}) => {
      return  <Avatar>
      <AvatarImage src={row.original.image} alt={`${row.original.name} image`} />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
    }
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
           copy email
            </DropdownMenuItem>
            <DropdownMenuItem
            className="cursor-pointer text-red-600 font-medium hover:text-red-700"
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
             remove
            </DropdownMenuItem>
            </ DropdownMenuContent >
        </DropdownMenu>
      )
    },
  }
]
