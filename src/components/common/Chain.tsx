/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useRouter } from 'next/router'


type chainType = {
    path: string , 
    name :string
}


export const Chain = ({path , name} : chainType) => {


    const router = useRouter()
    //"/app/startup"

  return (
    
    <div key={path + name}
             
     onClick={() => router.push(path) }
     className="bg-white shadow transition duration-500 transform hover:-translate-y-1 hover:shadow-2xl  flex cursor-pointer rounded-lg justify-center w-[150px]  h-[150px] items-center">
        <h3 className='text-gray-900 font-bold  '>{name}</h3>
    </div>
   
  )
}
