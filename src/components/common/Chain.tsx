/* eslint-disable @typescript-eslint/no-misused-promises */

import { useRouter } from 'next/router'
import { ReactNode } from 'react'




type chainType = {
    path: string , 
    name :string ,
    selected? : boolean ,
    children : ReactNode
}
export const Chain = ({path , name , selected , children} : chainType) => {
  const router = useRouter()

  return (
    
    <div key={path + name}
             
     onClick={() => router.push(path) }
     className={`${selected ? "bg-blue-500 " : "bg-white "} shadow transition duration-500 transform hover:-translate-y-1 hover:shadow-2xl  flex cursor-pointer rounded-lg justify-center w-[150px] flex-col text-3xl  h-[150px] items-center`}>
        {children}
        <h3 className={`text-gray-900  text-lg font-bold ${selected ? "text-white" : "text-gray-900"} `}>{name}</h3>
    </div>
   
  )
}
