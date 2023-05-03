/* eslint-disable @typescript-eslint/no-misused-promises */

import { useRouter } from 'next/router'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'




type chainType = {
    path: string , 
    name :string ,
    selected? : boolean ,
    image : string | StaticImageData,
    available?: boolean
  
}
export const Chain = ({path , name , selected ,available, image } : chainType) => {
  const router = useRouter()

  const [isHover , setIsHover] = useState<boolean>(false)

  return (
    
    <div key={path + name}
     onMouseEnter={() => setIsHover(true)} 
     onMouseLeave={() => setIsHover(false)}
     onClick={() => router.push(path) }
     className={` relative shadow border-1 transition bg-white duration-500 transform hover:-translate-y-1 hover:shadow-2xl  flex cursor-pointer rounded-lg justify-center w-[250px] flex-col p-2   h-[250px] items-center`}
     >
      <div className={`${available ? "hidden" : "absolute"} inset-0 flex justify-center items-center bg-white `}>
      <svg
       xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24"
         strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

      </div>
      <div className='w-full h-[80%] my-4 rounded-lg'>
        <Image alt={name} src={image}  />
      </div>

    
        <h3 className={` text-lf  text-gray-900 font-bold  `}>{name}</h3>
    </div>
   
  )
}
