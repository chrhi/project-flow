/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { PlanningSideBarReducer , NAVS } from '~/store/app-reducer/PlanningSideBarReducer'
import { AbdullahEffectButton, buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'
import type { Dispatch, SetStateAction } from 'react'

type Props ={
  isOpen? : boolean , 
  setIsOpen?: Dispatch<SetStateAction<boolean>>

}

const List = [
 
  {name : "Issue management" , path : "/app/controlling" , navs : NAVS.ONE},
  {name : "Change management" , path : "/app/controlling/change_managment" , navs : NAVS.ONE},
  {name : "Risk management" , path : "/app/controlling/risk_managment" , navs : NAVS.ONE},
  {name : "Quality control" , path : "/app/controlling/quality_control" , navs : NAVS.ONE},
  {name : "Schedule control" , path : "/app/controlling/schdule_control" , navs : NAVS.ONE},
  {name : "Cost control" , path : "/app/controlling/cont_controll" , navs : NAVS.ONE},
  {name : "Communication management" , path : "/app/controlling/communication_control" , navs : NAVS.ONE},
  {name : "Status reporting" , path : "/app/controlling/status_reporting" , navs : NAVS.ONE},
]

export  const ControllingSidebar = ({isOpen , setIsOpen} : Props) => {
  const router = useRouter()
  const current_page = PlanningSideBarReducer(state => state.current_page)
  const set_current_page = PlanningSideBarReducer(state => state.set_current_page)

  const handleClick : (path : string , A : NAVS) => void = (path : string , A : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: A})
  }
  const Link = (current_page : NAVS ,Nav : NAVS ,path : string, name : string ) => 
              <AbdullahEffectButton
                 onClick={() => handleClick(path , Nav)}
                 className={` rounded-lg w-[90%] mx-auto p-4 border ${buttonVariantsAbdullah({variant:'ghost' , size:'lg'})} h-14 justify-start
                 ${current_page == NAVS.A ? ' !text-gray-800 font-bold bg-sky-50 border border-blue-500 ' :'!text-gray-600' } text-md`}>
                  {name}
              </AbdullahEffectButton>
return (
<>
<div className={`${isOpen ? "w-[0px]" : "w-[6rem]"} mt-[50px] ml-2 h-11 `}>
<AbdullahEffectButton
    onClick={() => {if( setIsOpen) setIsOpen(true)}}
    className={` r${buttonVariantsAbdullah({variant:'ghost' , size:'sm'})} rounded-full bg-blue-500 text-white `}>
    open 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
      </div>
    </div>
  </div>
</>
  )
}
