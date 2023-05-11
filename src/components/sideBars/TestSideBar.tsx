/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { ClosingSideBar  , NAVS} from '~/store/app-reducer/ClosingSideBar' 
import { AbdullahEffectButton, buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'
import type { Dispatch, SetStateAction } from 'react'
import NextSwitch from '../common/NextSwitch'

type Props ={
  isOpen? : boolean , 
  setIsOpen?: Dispatch<SetStateAction<boolean>>

}

const List = [
  {name : "Lessons learned" , path : "/app/close" , navs : NAVS.ONE},
  {name : "Project documentation" , path : "/app/close/project_documentation" , navs : NAVS.TWO},
  {name : "Project evaluation" , path : "/app/close/project_evaluation" , navs : NAVS.THREE},
  {name : "Project closure" , path : "/app/close/project_closure" , navs : NAVS.FOUR},
  {name : "Resource handover" , path : "/app/close/resource_handover" , navs : NAVS.FIVE},
  {name : "Client acceptance" , path : "/app/close/client_acceptance" , navs : NAVS.SIX},
  {name : "Communication" , path : "/app/close/communication" , navs : NAVS.SEVEN},
  {name : "Archiving" , path : "/app/close/archive" , navs : NAVS.EIGHT},
  {name : "Celebrations" , path : "/app/close/celebration" , navs : NAVS.TEN},
]

export  const TestSidebar = ({isOpen , setIsOpen} : Props) => {
  const router = useRouter()
  const current_page = ClosingSideBar(state => state.current_page)
  const set_current_page = ClosingSideBar(state => state.set_current_page)

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
<div className={`${isOpen ? "hidden" : ""} absolute top-[40%] left-[-30px] rounded-[50%] mt-[50px]    `}>
<AbdullahEffectButton
    onClick={() => {if( setIsOpen) setIsOpen(true)}}
    className={`   w-[70px] h-[70px]  rounded-full bg-blue-500 flex items-center justify-end p-4 text-white `}>
 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>
  </AbdullahEffectButton>
</div>
<div className={`fixed flex flex-col top-[60px] left-[0px] ${isOpen ? "w-[30rem]" : "w-[0px]" }  bg-gray-50 custopn-page-height  rounded-lg border-gray-[100px]`}>
  <div className={` ${isOpen? "flex" : "hidden" } items-center justify-between  h-12  bg-white  w-[70%] mx-auto border-b mt-[55px] p-4 `}>
  <div><span className="ml-2 text-sm tracking-wide truncate">all my links</span></div>
  <div>
  <AbdullahEffectButton
  onClick={() =>{if( setIsOpen) setIsOpen(false) }}
    className={` r${buttonVariantsAbdullah({variant:'ghost' , size:'sm'})} rounded-full `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  </AbdullahEffectButton>
  </div>
  </div>
    <div className={`overflow-y-auto overflow-x-hidden flex-grow  w-[70%] mx-auto bg-white ${isOpen? "" : "hidden" } `}>
      <div className="flex flex-col py-4 gap-y-3 items-center space-y-1">
         {List.map(item => (
          Link(current_page , item.navs ,item.path  , item.name)
         ))}
         <NextSwitch  indexThisPhase={4} />
      </div>
    </div>
  </div>
</>
  )
}