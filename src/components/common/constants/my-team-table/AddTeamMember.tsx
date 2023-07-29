import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"
import { AbdullahButton , buttonVariants } from '~/components/used/AbdullahButton'
import { cn } from '~/lib/utils'
import {
  Select as AbdullahSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

import Select  from 'react-select';
import { api } from '~/utils/api'
import { useSession } from "next-auth/react"
import { toast } from 'react-hot-toast'
import { Label } from '~/components/ui/label'
import { organizationReduer } from '~/store/organization-reducer';
import { getOrgName, getOrganizationId } from '~/lib/data-in-cookies'





export default function AddTeamMember() {

  const session= useSession()

 const  {organizationId , organizationName  } = organizationReduer()

  const [emails , setEmails] = useState<{ label: string; value: string; }[]>([] as { label: string; value: string; }[])


  const [formData , setFormData] = useState({
    email : "",
    relationType : "" 
  })

  api.userRouter.getAllEmails.useQuery({email : session?.data?.user.email || ""},{
    onSuccess : (data) => {
        const prepare = data.map(item => {
            return {
              label : item ,
              value : item
            }
        })

      setEmails(prepare)
    },
    onError : (error) => {
      toast.error("error fetching the data")
    }
  })

  const mutaion = api.notificatioRouter.create_invitaion.useMutation({
    onSuccess :() => {
      toast.success("your invitation has been send")
    },
    onError : () => {

    }
  })

  const handleSubmit = () => {

    if(!formData.email || !formData.relationType){
      toast.error("all fiealds are require")
      return
    }
   
    mutaion.mutate({
      OrganizationId : getOrganizationId() ,
      OrganizationName : getOrgName(), 
      targetEmail : formData.email , 
      typeRelation : formData.relationType
    })
  }

  return (
  
    <Popover>
           <PopoverTrigger asChild> 
                
                 <AbdullahButton className={cn(buttonVariants({variant :"primary" , size :"sm"}) , "ml-auto ")} >
                       Invite Members
                 </AbdullahButton>
           </PopoverTrigger>
           <PopoverContent>
      <div className="w-[500px] h-[300px] flex flex-col ">
        <div className='w-full h-[50px] flex justify-start  items-center'>
                <p className='text-lg text-neutral-800'>Invite Organization Members</p>
        </div>
        <div className='w-full h-[50px] flex justify-center flex-col my-4 gap-y-2 items-start'>
          <Label>Select the email of the person you want </Label>
                  <Select
                      onChange={(e) => setFormData({...formData , email : e?.value || ""})}
                      placeholder="Email Adress"
                      name="email adresses"
                      options={emails}
                      className="basic-multi-select !w-full"
                      classNamePrefix="select"
                  />
        </div>

        <div className='w-full h-[50px] flex justify-center flex-col my-4 gap-y-2 items-start'>
                   <Label>Select what type  </Label>
                    <AbdullahSelect onValueChange={(value) => setFormData({...formData , relationType : value})} >
                              <SelectTrigger className="w-full mt-2">
                                      <SelectValue placeholder="select the type of invitaion" />
                              </SelectTrigger>
                              <SelectContent>
                                     <SelectItem value="CO_LEADER">Co-Leader</SelectItem>
                                     <SelectItem value="ELDER">Elder</SelectItem>
                                     <SelectItem value="MEMBER">Member</SelectItem>
                              </SelectContent>
                   </AbdullahSelect>
        </div>
      

        <div className='w-full h-[50px] flex justify-end my-4 items-center'>
                 <AbdullahButton 
                 onClick={handleSubmit}
                 isLoading={mutaion.isLoading}
                 className={cn(buttonVariants({size :"sm" , variant :"primary"}))}>
                     send invate
                 </AbdullahButton>
        </div>

      </div>
       </PopoverContent>
   </Popover>
       
  )
}

