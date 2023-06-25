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
import { Badge } from "@tremor/react"
import { getColor } from "~/utils/formate/getColor"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Resource = {
  id: string
  name: string
  description: string
  cost : number 
  quality : string
}

export const columns: ColumnDef<Resource>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: ({ row }) => {

      return <Badge color="yellow"  className="rounded-lg ">€ {row.original.cost}</Badge>
    }
  },
  {
    accessorKey: "quality",
    header: "Quality",
    cell : ({row}) => {
      
      // Convert to lowercase
    const lowercaseString = row.original.quality.toLowerCase();

    // Split by underscores
    const splitString = lowercaseString.split('_');

    // Join by spaces
    const formattedString = splitString.join(' ');

     return <Badge color={getColor({text : row.original.quality})} className="rounded-lg ">{formattedString}</Badge>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      
 
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
            <DropdownMenuItem>Delete tool</DropdownMenuItem>
         
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
