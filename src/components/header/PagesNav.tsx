import { AbdullahEffectButton, buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'
import { useRouter } from 'next/router'


export function PagesNav() {


  const router = useRouter()

 async function handleRouting (path : string) {
   await router.push(path)
  }

  return (
    <div className='w-[70%] h-full flex justify-start items-center gap-x-6 '>
    <AbdullahEffectButton 
    onPromisClick={() => handleRouting("/app/startup")}
         className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm" })}`}
    >
        

     start up
    </AbdullahEffectButton>
    <AbdullahEffectButton 
   onPromisClick={() => handleRouting("/app/planning")}
    className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm"})}`}
    >


    planning
   </AbdullahEffectButton>
    <AbdullahEffectButton 
    onPromisClick={() => handleRouting("/app/executing")}
   className={`${buttonVariantsAbdullah({variant :'ghost', size:"sm"})}`}
    >



   executing
   </AbdullahEffectButton>
   <AbdullahEffectButton 
     onPromisClick={() => handleRouting("/app/controlling")}
   className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm"})}`}
   >
   
   controlling
   </AbdullahEffectButton>
   <AbdullahEffectButton 
 
   onPromisClick={() => handleRouting("/app/close")}
   className={`${buttonVariantsAbdullah({variant :'ghost' , size:"sm"})}`}
   >
   

   closing
   </AbdullahEffectButton>

    </div>
  )
}

