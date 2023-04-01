/* eslint-disable react/no-unescaped-entities */
import { Container } from '../ui/used/Container'
import React from 'react'
import { Input } from '../ui/used/Input'
import { AbdullahButton, buttonVariants } from '../ui/buildingBlocks/AbdullahButton'
import { useState } from 'react'
import { api } from '~/utils/api'
import { toast } from 'react-toastify'
import {v4 as uuidV4} from "uuid"
import { getUserMetadata, setoreProjectMetaData } from '~/lib/MetaData'



type Props ={
  refetch : () => Promise<any>
}

export const ProjectStarter = ({refetch} : Props) => {


  

  const {mutate , isLoading} = api.ProjectRouter.createProject.useMutation({
    onSuccess : async ({project_id}) => {
      toast(" the project started successfully ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       
       setoreProjectMetaData({project_id })
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
      user_id : getUserMetadata()
    })
  }






  return (
    <Container className='flex flex-col items-center p-8 pt-12 bg-gray-50 '>
        <div className='w-[700px] h-[70px] flex flex-col justify-center gap-y-4 '>
            <h1 className='text-xl font-semibold text-gray-900 '>Start your project life sycle now</h1>
            <p className='text-lg  text-gray-400 '>Let's Get Started</p>
        </div>
        <div className=' w-[700px] my-4 flex flex-col h-[250px] bg-white p-6 gap-y-4 '>
        <Input
        lable='confirme your email'
        onChange={(e) =>setData(e.target.value)}
        value={data}

        />
        <Input
        lable='the title of your project'
        onChange={(e) =>setData(e.target.value)}
        value={data}

        />
        <div className='w-full h-[70px] flex justify-start items-center my-2'>
      
       <AbdullahButton
       onClick={handleClick}
       isLoading={isLoading}
       className={`${buttonVariants({variant:"primary" })} `}
        >
          start my project
       </AbdullahButton>
        </div>
        </div>
    </Container>
  )
}

{/* <Input
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
</AbdullahButton> */}