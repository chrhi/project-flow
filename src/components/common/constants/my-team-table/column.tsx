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
import { api } from "~/utils/api"
import { getOrganizationId } from "~/lib/data-in-cookies"
import toast from "react-hot-toast"



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
     
      const mutation = api.organizationRouter.remove_persone_from_org.useMutation({
        onSuccess : (data) => {
          window?.location?.reload()    
        },
        onError : () => {
          toast.error("faild to remove him")
        }
      })

      const handleDelete = () => {
        if(row.original.role === "leader"){
          toast.error("you can not remove the leader")
        }
        mutation.mutate({
          organization_id : getOrganizationId(),
          target_id : row.original.id
        })
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
           copy email
            </DropdownMenuItem>
            <DropdownMenuItem
            disabled={mutation.isLoading}
            className="cursor-pointer text-red-600 font-medium hover:text-red-700"
              onClick={handleDelete}
            >
             remove
            </DropdownMenuItem>
            </ DropdownMenuContent >
        </DropdownMenu>
      )
    },
  }
]
