import { Container } from '../ui/used/Container'
import Image from 'next/image'
import React from 'react'
import start from "~/assets/start.png"
import { Input } from '../ui/used/Input'
import { AbdullahButton } from '../ui/buildingBlocks/AbdullahButton'

export const ProjectStarter = () => {
  return (
    <Container className='flex '>
        <div className='w-[45%] h-full flex items-center justify-center '>
            <Image  alt='project starter' src={start}  />
        </div>
        <div className='w-[50%] h-full flex flex-col pt-20 '>
            <h1 className='text-3xl font-semibold text-gray-900 text-start'>lance votre projet </h1>
            <p className='text-lg  text-gray-400 text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui at consequuntur illo explicabo laboriosam doloribus eaque assumenda aliquam cum dicta eveniet dolorum placeat, quos, odio, adipisci quaerat sunt sapiente perferendis.</p>
            <div className='w-[70%] h-[300px]  gap-y-4 my-4 flex flex-col '>
                <Input  
                    lable='titre de projet'
                    value={""}
                    onChange={() => console.log("hi")}
                    lableClassName='text-xl font-bold text-gray-900'
                />
               <div className=''>
               <AbdullahButton  
                    className='!bg-orange-500 !text-white  !rounded-lg  '
                    onClick={() => console.log("hi")}
                    text='lance ma projet'
                    title='click ici pour lance vote projet'
                 />
               </div>
            </div>

        </div>
    </Container>
  )
}

