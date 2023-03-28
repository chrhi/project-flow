/* eslint-disable @typescript-eslint/no-misused-promises */

import { useRouter } from 'next/router'
import Image, { StaticImageData } from 'next/image'




type chainType = {
    path: string , 
    name :string ,
    selected? : boolean ,
    image : string | StaticImageData
  
}
export const Chain = ({path , name , selected , image } : chainType) => {
  const router = useRouter()

  return (
    
    <div key={path + name}
             
     onClick={() => router.push(path) }
     className={` shadow border-1 transition bg-white duration-500 transform hover:-translate-y-1 hover:shadow-2xl  flex cursor-pointer rounded-lg justify-center w-[250px] flex-col p-2   h-[250px] items-center`}>
      <div className='w-full h-[80%] my-4 rounded-lg'>
        <Image alt={name} src={image}  />
      </div>
    
        <h3 className={` text-lf  text-gray-900 font-bold  `}>{name}</h3>
    </div>
   
  )
}
