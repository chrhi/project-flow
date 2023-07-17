import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "~/components/ui/popover"
import { AbdullahButton , buttonVariants } from '../used/AbdullahButton'
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
import { Label } from '../ui/label'
import { organizationReduer } from '~/store/organization-reducer';





function AddTeamMember() {

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
      toast.error("error fetching the data")
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
      OrganizationId : organizationId ,
      OrganizationName : organizationName, 
      targetEmail : formData.email , 
      typeRelation : formData.relationType
    })

   

  }

  return (
  
    <Popover>
           <PopoverTrigger asChild> 
                 <AbdullahButton  >
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
                    <AbdullahSelect onValueChange={(value) => setFormData({...formData , relationType : value})} defaultValue="TeamMember">
                              <SelectTrigger className="w-full mt-2">
                                      <SelectValue placeholder="TeamMember" />
                              </SelectTrigger>
                              <SelectContent>
                                     <SelectItem value="TeamMember">team member</SelectItem>
                                     <SelectItem value="Client">client</SelectItem>
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

export default AddTeamMember