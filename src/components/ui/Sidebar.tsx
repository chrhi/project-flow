/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { NAVS , sidebar_Reducer  } from '~/store/app-reducer/SideBarReducer'
import { AbdullahEffectButton, buttonVariantsAbdullah } from './buildingBlocks/AbdullahEffectButton'
import { Dispatch, SetStateAction } from 'react'
import NextSwitch from '../common/NextSwitch'
import { motion , AnimatePresence } from 'framer-motion';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
  exit: { x: '100%', transition: { duration: 0.3 } },
};

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
<div className={`${isOpen ? "hidden" : ""} z-[9999] absolute top-[40%] left-[-30px] rounded-[50%] mt-[50px]    `}>
<AbdullahEffectButton
    onClick={() => {if( setIsOpen) setIsOpen(true)}}
    className={`   w-[70px] h-[70px]  rounded-full bg-blue-500 flex items-center justify-end p-4 text-white `}>
 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>
  </AbdullahEffectButton>
</div>
    <AnimatePresence>
  <motion.div 
  variants={sidebarVariants}
  initial={isOpen ? 'open' : 'closed'}
  animate={isOpen ? 'open' : 'closed'}
  exit="exit"
  className={`fixed flex flex-col m-4 mt-0  top-[2rem] left-[0px] ${isOpen ? "w-[20rem]" : "w-[0]" }  bg-gray-50  custopn-page-height  rounded-lg border-gray-[100px]`}>
   
    <div className={` ${isOpen? "flex" : "hidden" } items-center justify-end  h-12  bg-white  w-full mx-auto  mt-[55px] p-4 pr-0 `}>
      <AbdullahEffectButton
              onClick={() =>{ if( setIsOpen){ setIsOpen(false) }}}
              className={` ${buttonVariantsAbdullah({variant:'ghost' , size:'sm'})} rounded-full `}>
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                       </svg>
       </AbdullahEffectButton>
    </div>
    <div className={`overflow-y-auto overflow-x-hidden flex-grow  w-full mx-auto bg-white ${isOpen? "" : "hidden" } `}>
      <div className="flex flex-col py-4 gap-y-3 items-center space-y-1">
          <AbdullahEffectButton
              onClick={() => handleClick("/app/startup" , NAVS.SETUP)}
              className={` rounded-lg w-[90%] mx-auto p-4 shadow-sm  border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
              ${current_page == NAVS.SETUP ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md shadow-sm`}
          >
          Initialisation
          </AbdullahEffectButton>
      
       
        
        
        <AbdullahEffectButton
            onClick={() => handleClick("/app/startup/setup" , NAVS.STARTUP)}
            className={` rounded-lg w-[90%] mx-auto p-4 border  shadow-sm ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.STARTUP ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md shadow-sm `}
        >
       Détails du projet
        </AbdullahEffectButton>
     
       
       
        
        <AbdullahEffectButton
            onClick={() => handleClick("/app/startup/tables" , NAVS.TABLE)}
            className={` rounded-lg w-[90%] mx-auto p-4  border shadow-sm  ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.TABLE ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md shadow-sm `}
        >
      Objets du projet
        </AbdullahEffectButton>
    
       
        
        
        <AbdullahEffectButton
             onClick={() => handleClick("/app/startup/secondForm" , NAVS.SECONDFORM)}
            className={` rounded-lg w-[90%] mx-auto p-4 border shadow-sm ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.SECONDFORM ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md shadow-sm `}
        >
     Mon équipe
        </AbdullahEffectButton>
   
      
       
        
        <AbdullahEffectButton
             onClick={() => handleClick("/app/startup/stakeholders"  , NAVS.STAKEHOLDER)}
            className={` rounded-lg w-[90%] mx-auto p-4 border shadow-sm ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md shadow-sm `}
        >
       Parties prenantes
        </AbdullahEffectButton>
   
      
      
        
        <AbdullahEffectButton
             onClick={() => handleClick("/app/startup/milestones" , NAVS.MILESTONES)}
            className={` rounded-lg w-[90%] mx-auto p-4 border shadow-sm ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
            ${current_page == NAVS.MILESTONES ? ' !text-gray-800 font-bold bg-sky-50 border  ' :'!text-gray-600' } text-md shadow-sm `}
        >
       Jalons
        </AbdullahEffectButton>
   
       <NextSwitch indexThisPhase={0} />
      
      </div>
    </div>
  </motion.div>
  </AnimatePresence>
  </>

  )
}

