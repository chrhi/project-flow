/* eslint-disable react/no-unescaped-entities */
import { Container } from '../ui/used/Container'
import Image from 'next/image'
import React from 'react'
import start from "~/assets/Time management-amico.png"
import { Input } from '../ui/used/Input'
import { AbdullahButton, buttonVariants } from '../ui/buildingBlocks/AbdullahButton'
import { Heading } from '../ui/typography/Heading'
import { useState } from 'react'
import { api } from '~/utils/api'
import { toast } from 'react-toastify'
import { userReducer } from "~/store/userReducer";
import {v4 as uuidV4} from "uuid"



type Props ={
  refetch : () => Promise<any>
}

export const ProjectStarter = ({refetch} : Props) => {

  const user_current_id = userReducer(state => state.id)
  const set_project_id = userReducer(state => state.set_project_id)

  const {mutate , isLoading} = api.ProjectRouter.createProject.useMutation({
    onSuccess : async ({project_id}) => {
      toast(" the project started successfully ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_project_id({project_id})
      await  refetch()
    },
    onError : () => {
      toast(" error starting the project",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
    }
  })

  const [data , setData ] = useState<string>("")

  const handleClick =  () => {

    const id:string  = uuidV4()
    mutate({
      id,
      user_id : user_current_id
    })
  }




  return (
    <Container className='flex bg-white '>
        <div className='w-[45%] h-full flex items-center justify-center '>
            <Image  alt='project starter' src={start}  />
        </div>
        <div className='w-[50%] h-full flex flex-col pt-20 '>
            
            <Heading >lance votre projet </Heading>
            <p className='text-start text-sm text-gray-400 mt-4 mb-2'>
            Se familiariser avec le Guide PMBOK en français : Le Guide PMBOK est un ensemble de lignes directrices et de meilleures pratiques pour la gestion de projet développé par le Project Management Institute (PMI)
            </p>
            <p className='text-start text-sm text-gray-400 mb-4'>
            Vous pouvez trouver la version française du Guide PMBOK sur le site web du PMI. Familiarisez-vous avec le contenu et la structure du guide pour mieux comprendre le processus de gestion de projet.
            </p>
            <div className='w-[70%] h-[300px]  gap-y-4 my-4 flex flex-col '>
               
             <Input
              lable='the title of your project'
              onChange={(e) =>setData(e.target.value)}
              value={data}
             

             />
               <div className=''>
             <AbdullahButton
             onClick={handleClick}
             isLoading={isLoading}
             className={buttonVariants({variant:"default" , size:"lg"})}
             >
              start my project
             </AbdullahButton>
               </div>
            </div>

        </div>
    </Container>
  )
}

