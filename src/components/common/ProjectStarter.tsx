import { Container } from '../used/Container'
import React from 'react'
import { Input } from '../used/Input'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import { useState } from 'react'





type Props ={
  refetch : () => Promise<any>
}

export const ProjectStarter = ({refetch} : Props) => {


  


  const [data , setData ] = useState<string>("")

  const handleClick =  () => {
   //todo
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
      
       isLoading={true}
       className={`${buttonVariants({variant:"primary" })} `}
        >
          start my project
       </AbdullahButton>
        </div>
        </div>
    </Container>
  )
}

