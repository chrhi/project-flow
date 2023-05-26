import { Container } from '../used/Container'
import React from 'react'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import { useState } from 'react'
import animatin from "~/assets/svg/94021-startup.gif"
import Image from 'next/image'
import { Input } from '../used/Input'
import { TextField } from '../used/TextField'
import NewTimePicker from '../used/NewTimePicker'



export const ProjectStarter = () => {


  


  const [data , setData ] = useState<string>("")

  const handleClick =  () => {
   //todo
  }






  return (
       <div className='w-full max-w-4xl duration-500 transform hover:-translate-y-1 hover:shadow-2xl  bg-white rounded-lg flex h-[500px] shadow-xl border '>
         <div className='w-[50%] gird grid-cols-12 p-4 gap-y-4 h-full '>
              <div className='col-span-12 my-4 h-[40px] flex items-center'>
                  <h1 className='text-2xl font-semibold text-stone-900'>starting up the project </h1>
              </div>
              <Input
                lable='enter your password'
                  value={""}
                  onChange={() => console.log("")}
              />
                <div className='col-span-12'>
              <NewTimePicker  isLoading={false} text="sélectionner une heure à laquelle ce projet doit commencer et se terminer"/>
              </div>
              <Input
                lable='what is the project title ?'
                value={""}
                onChange={() => console.log("")}
              />
            
              <TextField 
                lable='can you descripe the project ?'
                value={""}
                onChange={() => console.log("")}
              />
         </div>
            <div className='w-[50%] h-full flex flex-col justify-end items-center '>
              
              <Image 
              width={200} 
                src={animatin}
                alt="starting up the project"
              />
              <div 
                className='w-full flex justify-end items-center p-8 h-[50px]'
              >
              
                <AbdullahButton className={buttonVariants({variant:"primary"})}
                    >
                  start the project
                </AbdullahButton>
              </div>
            </div>
           
       </div>
  )
}

