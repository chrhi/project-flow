import { AbdullahEffectButton, buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'
import { useRouter } from 'next/router'




export function PagesNav() {


  const router = useRouter()

 async function handleRouting (path : string) {
   await router.push(path)
  }

  return (
    <div className='w-[65%]  h-full flex justify-start items-center gap-x-6 '>
       <AbdullahEffectButton 
    onPromisClick={() => handleRouting("/app")}
         className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm" })}`}
    >
       


     Dashbord
    </AbdullahEffectButton>
    <AbdullahEffectButton 
    onPromisClick={() => handleRouting("/app/startup")}
         className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm" })}`}
    >
       


     Start up
    </AbdullahEffectButton>
    <AbdullahEffectButton 
   onPromisClick={() => handleRouting("/app/planning")}
    className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm"})}`}
    >

    


    Planning
   </AbdullahEffectButton>
    <AbdullahEffectButton 
    onPromisClick={() => handleRouting("/app/executing")}
   className={`${buttonVariantsAbdullah({variant :'ghost', size:"sm"})}`}
    >

    



   Executing
   </AbdullahEffectButton>
   <AbdullahEffectButton 
     onPromisClick={() => handleRouting("/app/controlling")}
   className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm"})}`}
   >


   
   Controlling
   </AbdullahEffectButton>
   <AbdullahEffectButton 
 
   onPromisClick={() => handleRouting("/app/close")}
   className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm"})}`}
   >
   
  

   Closing
   </AbdullahEffectButton>
   <AbdullahEffectButton 
    onPromisClick={() => handleRouting("/app/startup")}
         className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm" })}`}
    >
  
    Docs 
    </AbdullahEffectButton>

    </div>
  )
}

