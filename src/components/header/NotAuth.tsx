import React from 'react'
import { AbdullahEffectButton } from '../ui/buildingBlocks/AbdullahEffectButton'
import { useRouter } from 'next/router'
import { buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'


export const NotAuth = () => {
    const router = useRouter()

    const handleClick =  (path : string ) => {
        router.push(path) as unknown
        
      }


  return (  <div className="w-[30%]  h-[60px] gap-x-4 flex justify-end items-center  ">
  <AbdullahEffectButton 

      className={`${buttonVariantsAbdullah({variant :'ghost'})}`}
  onClick={ () =>  handleClick("/auth/login" ) as unknown}

>
log in
</AbdullahEffectButton>
<AbdullahEffectButton 

className={`${buttonVariantsAbdullah({variant :'ghost'})}`}
onClick={ () =>  handleClick("/auth/register" ) as unknown}

>
sign up
</AbdullahEffectButton>
</div> 
  )
}

