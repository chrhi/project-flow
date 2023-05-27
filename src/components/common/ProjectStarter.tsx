import React from 'react'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import { useState } from 'react'
import animatin from "~/assets/svg/94021-startup.gif"
import Image from 'next/image'
import { Input } from '../used/Input'
import { TextField } from '../used/TextField'
import NewTimePicker from '../used/NewTimePicker'
import toast from 'react-hot-toast';
import { api } from '~/utils/api'
import { DateRangePickerValue } from '@tremor/react'
import { getUserMetadata } from '~/lib/MetaData'


export const ProjectStarter = () => {

  const [value, setValue] = useState<DateRangePickerValue>([
    new Date(),
    new Date(),
  ])
  const [data , setData ] = useState({
    password : "",
    userId : "" ,
    title : "" ,
    description : ""
  })

    const mutation = api.projectRouter.create_project.useMutation({
      onSuccess : () => {
        // acivate refetch 
        
      } , 
      onError : () => {
        toast.error("quelque chose s'est mal passé, veuillez réessayer")
      }
    })
  


 
  const handleSubmit =  () => {
   if(!data.password || !data.userId || !data.title  || !data.description || value ){
    toast.error("tous les champs sont requis")
    return 
   }
   mutation.mutate({
    title : data.title , 
    endsAt : value[1] as Date,
    startAt : value[0] as Date,
    user_id : getUserMetadata()
   })
  }






  return (
       <div className='w-full max-w-4xl duration-500 transform hover:-translate-y-1 hover:shadow-2xl  bg-white rounded-lg flex h-[500px] shadow-xl border '>
         <div className='w-[50%] gird grid-cols-12 p-4 gap-y-4 h-full '>
              <div className='col-span-12 my-4 h-[40px] flex items-center'>
                  <h1 className='text-2xl font-semibold text-stone-900'>démarrage du projet </h1>
              </div>
              <Input
                lable='enter your password'
                  value={""}
                  onChange={(e) => setData({...data , password : e.target.value})}
              />
                <div className='col-span-12'>
              <NewTimePicker value={value} setValue={setValue}   text="sélectionner une heure à laquelle ce projet doit commencer et se terminer"/>
              </div>
              <Input
                lable='quel est le titre du projet ?'
                value={""}
                onChange={(e) => setData({...data , title : e.target.value})}
             
              />
            
              <TextField 
                lable='pouvez-vous décrire le projet ?'
                value={""}
                onChange={(e) => setData({...data , description : e.target.value})}
              />
         </div>
            <div className='w-[50%] h-full flex flex-col justify-end items-center '>
              
              <Image 
              width={200} 
              className='mb-24'
                src={animatin}
                alt="starting up the project"
              />
              <div 
                className='w-full flex justify-end items-center p-8 h-[50px]'
              >
              
                <AbdullahButton className={buttonVariants({variant:"primary"})}
                onClick={handleSubmit}
                    >
               Démarrer le projet
                </AbdullahButton>
              </div>
            </div>
           
       </div>
  )
}

