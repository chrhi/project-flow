/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { NAVS , sidebar_Reducer  } from '~/store/app-reducer/SideBarReducer'
import { AbdullahEffectButton, buttonVariantsAbdullah } from './buildingBlocks/AbdullahEffectButton'
import { Dispatch, SetStateAction } from 'react'
import NextSwitch from '../common/NextSwitch'


type Props ={
  isOpen? : boolean , 
  setIsOpen?: Dispatch<SetStateAction<boolean>>

}

export  const Sidebar = ({isOpen , setIsOpen} : Props) => {
  const router = useRouter()
  const current_page = sidebar_Reducer(state => state.current_page)
  const set_current_page = sidebar_Reducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   
<>
<div className={`${isOpen ? "w-[0px]" : "w-[6rem]"} mt-[50px] ml-2 h-11 `}>


<AbdullahEffectButton
  onClick={() => {
    if( setIsOpen){
      setIsOpen(true)
    }
  }}
    className={` r${buttonVariantsAbdullah({variant:'ghost' , size:'sm'})} rounded-full bg-blue-500 text-white `}

  >
    open 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg>

          </AbdullahEffectButton>
</div>
  <div className={`fixed flex flex-col top-[60px] left-[0px] ${isOpen ? "w-[30rem]" : "w-[0px]" }  bg-gray-50 custopn-page-height  rounded-lg border-gray-[100px]`}>
   
    <div className={` ${isOpen? "flex" : "hidden" } items-center justify-between  h-12  bg-white  w-[70%] mx-auto border-b mt-[55px] p-4 `}>
  <div>
  <span className="ml-2 text-sm tracking-wide truncate">all my links</span>
  </div>
  <div>
  <AbdullahEffectButton
  onClick={() =>{
    if( setIsOpen){
      setIsOpen(false)
    }
  }}
    className={` r${buttonVariantsAbdullah({variant:'ghost' , size:'sm'})} rounded-full `}

  >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

          </AbdullahEffectButton>
  </div>
    </div>
    <div className={`overflow-y-auto overflow-x-hidden flex-grow  w-[70%] mx-auto bg-white ${isOpen? "" : "hidden" } `}>
      <div className="flex flex-col py-4 gap-y-3 items-center space-y-1">
          <AbdullahEffectButton
              onClick={() => handleClick("/app/startup" , NAVS.SETUP)}
              className={` rounded-lg w-[90%] mx-auto p-4  border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
              ${current_page == NAVS.SETUP ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-lg`}
          >
          Initialisation
          </AbdullahEffectButton>
      
       
        
        
        <AbdullahEffectButton
            onClick={() => handleClick("/app/startup/setup" , NAVS.STARTUP)}
            className={` rounded-lg w-[90%] mx-auto p-4 border  ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.STARTUP ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-lg`}
        >
       Détails du projet
        </AbdullahEffectButton>
     
       
       
        
        <AbdullahEffectButton
            onClick={() => handleClick("/app/startup/tables" , NAVS.TABLE)}
            className={` rounded-lg w-[90%] mx-auto p-4  border  ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.TABLE ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-lg`}
        >
      Objets du projet
        </AbdullahEffectButton>
    
       
        
        
        <AbdullahEffectButton
             onClick={() => handleClick("/app/startup/secondForm" , NAVS.SECONDFORM)}
            className={` rounded-lg w-[90%] mx-auto p-4 border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.SECONDFORM ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-lg`}
        >
     Mon équipe
        </AbdullahEffectButton>
   
      
       
        
        <AbdullahEffectButton
             onClick={() => handleClick("/app/startup/stakeholders"  , NAVS.STAKEHOLDER)}
            className={` rounded-lg w-[90%] mx-auto p-4 border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-lg`}
        >
       Parties prenantes
        </AbdullahEffectButton>
   
      
      
        
        <AbdullahEffectButton
             onClick={() => handleClick("/app/startup/milestones" , NAVS.MILESTONES)}
            className={` rounded-lg w-[90%] mx-auto p-4 border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.MILESTONES ? ' !text-gray-800 font-bold bg-sky-50 border  ' :'!text-gray-600' } text-lg`}
        >
       Jalons
        </AbdullahEffectButton>
   
       <NextSwitch indexThisPhase={0} />
      
      </div>
    </div>
  </div>
  </>

  )
}

