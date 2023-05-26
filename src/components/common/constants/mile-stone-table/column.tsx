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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type MileStone = {
  id: string
  name: string
  email: string
  impact : string 
  type : string
}

export const columns: ColumnDef<MileStone>[] = [
  {
    accessorKey: "OBJECTIFS_DU_PROJET",
    header: "OBJECTIFS DU PROJET",
  },
  {
    accessorKey: "APPROBATION",
    header: "APPROBATION"
  },
  {
    accessorKey: "CRITÈRES_DU_SUCCÈS",
    header: "CRITÈRES DU SUCCÈS",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "type",
    header: "Type",
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
