/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useRouter } from 'next/router'

const items = [
    {
        name :"démarrage",
        path:"/startup"
    },
  
]

export const Chain = () => {


    const router = useRouter()

  return (
    <div className='w-[800px] h-[500px] rounded-lg bg-white z-50 shadow-xl  flex justify-center items-center gap-x-4 p-4 flex-wrap'>

      
        {items && items.map(item => (
            <div key={item.name}
             
            onClick={() => router.push("/app/startup") }
            className="bg-black flex cursor-pointer rounded-lg justify-center w-[150px]  h-[150px] items-center">
                    <h3 className='text-white font-bold'>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}
