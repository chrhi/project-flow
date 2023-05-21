import { useRouter } from 'next/router'
import { AbdullahEffectButton, buttonVariantsAbdullah } from '../used/AbdullahEffectButton'
import type { Dispatch, SetStateAction } from 'react'
import {executingSideBarReducer as ExecutingSideBar , NAVS_EXECUTING as NAVS } from '~/store/app-reducer/side-bar-store';
import NextSwitch from '../common/NextSwitch'
import { motion  } from 'framer-motion';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
  exit: { x: '100%', transition: { duration: 0.3 } },
};

type Props ={
  isOpen? : boolean , 
  setIsOpen?: Dispatch<SetStateAction<boolean>>

}

const List = [

  {name : " Status tracking" , path : "/app/executing" , navs : NAVS.TWO},
  {name : " Time tracking" , path : "/app/executing/timeTracking" , navs : NAVS.THREE},
  {name : "Resource allocation" , path : "/" , navs : NAVS.FOUR},
  {name : "Change management" , path : "/" , navs : NAVS.FIVE},
  {name : "Quality control" , path : "/" , navs : NAVS.SIX},
  {name : "Communication" , path : "/" , navs : NAVS.SEVEN},
  {name : "Risk management" , path : "/" , navs : NAVS.EIGHT},
  {name : "Issue tracking" , path : "/" , navs : NAVS.NIGHT},
]

export  const ExecutingSidebar = ({isOpen , setIsOpen} : Props) => {
  const router = useRouter()
  const current_page = ExecutingSideBar(state => state.current_page)
  const set_current_page = ExecutingSideBar(state => state.set_current_page)

  const handleClick : (path : string , A : NAVS) => void = (path : string , A : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: A})
  }
  const Link = (current_page : NAVS ,Nav : NAVS ,path : string, name : string ) => 
              <AbdullahEffectButton
                 onClick={() => handleClick(path , Nav)}
                 className={` rounded-lg w-[90%] mx-auto p-4 border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
                 ${current_page == Nav ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md shadow-sm`}>
                  {name}
              </AbdullahEffectButton>

return (
  <>
    <div className={`${isOpen ? "hidden" : ""} z-[9999] absolute top-[40%] left-[-30px] rounded-[50%] mt-[50px]`}>
      <AbdullahEffectButton
        onClick={() => {
          if (setIsOpen) setIsOpen(true);
        }}
        className={`w-[70px] h-[70px] rounded-full bg-blue-500 flex items-center justify-end p-4 text-white`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </AbdullahEffectButton>
    </div>
    
      <motion.div
        variants={sidebarVariants}
        initial={isOpen ? "open" : "closed"}
        animate={isOpen ? "open" : "closed"}
        exit="exit"
        className={`fixed flex flex-col m-4 mt-0 top-[2rem] left-[0px] ${isOpen ? "w-[20rem]" : "w-[0]"} bg-gray-50 custopn-page-height rounded-lg border-gray-[100px]`}
      >
        <div className={`${isOpen ? "flex" : "hidden"} items-center justify-end h-12 bg-white w-full mx-auto mt-[55px] p-4 pr-0`}>
           <button
              onClick={() => {
                if (setIsOpen) setIsOpen(false);
              }}
              className={` hover:bg-gray-50 p-2 rounded-full`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        <div className={`overflow-y-auto overflow-x-hidden flex-grow w-full mx-auto bg-white ${isOpen ? "" : "hidden"}`}>
          <div className="flex flex-col py-4 gap-y-3 items-center space-y-1">
            {List.map((item) => Link(current_page, item.navs, item.path, item.name))}
            <NextSwitch indexThisPhase={0} />
          </div>
        </div>
      </motion.div>
    
  </>
)
}