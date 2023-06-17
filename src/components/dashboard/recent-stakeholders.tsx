import { StakeHolder } from "@prisma/client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { getProjectMetaData } from "~/lib/MetaData"
import { api } from "~/utils/api"

export function RecentStakeholdersNew() {
  const [stakeHolders , setStakeHolders] = useState<StakeHolder[]>([] as StakeHolder[])

  const {isLoading} = api.StakeHolderRouter.get_stakeholders.useQuery({projectId : getProjectMetaData()}, {
    onSuccess(data){
      setStakeHolders(data)
    }
  })

  
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle>parties prenantes impliquées</CardTitle>
        <CardDescription>
          ici, vous pouvez voir les parties prenantes 
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {
          stakeHolders.map(item => (
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                       <Avatar>
                       <AvatarImage src="https://i.pinimg.com/originals/da/e5/bf/dae5bfd63a6f3586c90f134f10844fb9.jpg" />
                       <AvatarFallback>OM</AvatarFallback>
                       </Avatar>
                       <div>
                        <p className="text-sm font-medium leading-none">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.contact}</p>
                       </div>
                    </div>
                </div>
          ))
        }
      
       
      </CardContent>
    </Card>
  )
}