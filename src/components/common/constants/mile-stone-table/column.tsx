import type  { ColumnDef } from "@tanstack/react-table"
import { Button } from "~/components/ui/button"
import {  MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { AlgeriaformatDate } from "~/utils/formate/AlgeriaFormate"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MileStone = {
  id: string
  mileStone: string
  date: Date
  description : string 

}

export const columns: ColumnDef<MileStone>[] = [
  {
    accessorKey: "mileStone",
    header: "MileStone",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({row}) => {
      return (
        AlgeriaformatDate(row.original.date)
      )
    },

  },
  {
    accessorKey: "description",
    header: "description",
  },
 
 
  {
    id: "actions",
    cell: () => {
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
            <DropdownMenuItem>Delete </DropdownMenuItem>
         
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
