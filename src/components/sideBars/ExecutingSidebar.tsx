/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { AbdullahEffectButton, buttonVariantsAbdullah } from '../ui/buildingBlocks/AbdullahEffectButton'
import type { Dispatch, SetStateAction } from 'react'
import { ExecutingSideBar , NAVS } from '~/store/app-reducer/ExecutingSideBar'
import NextSwitch from '../common/NextSwitch'

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
<div className={`${isOpen ? "hidden" : ""} absolute top-[40%] left-[-30px] rounded-[50%] mt-[50px]    `}>
<AbdullahEffectButton
    onClick={() => {if( setIsOpen) setIsOpen(true)}}
    className={`   w-[70px] h-[70px]  rounded-full bg-blue-500 flex items-center justify-end p-4 text-white `}>
 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-white h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>
  </AbdullahEffectButton>
</div>
<div className={`fixed flex flex-col m-4 mt-0  top-[2rem] left-[0px] ${isOpen ? "w-[20rem]" : "w-[0px]" }  bg-gray-50  custopn-page-height   border-gray-[100px]`}>
  <div className={` ${isOpen? "flex" : "hidden" } items-center justify-between rounded-xl h-12  bg-white  w-full mx-auto border-b mt-[55px] p-4 `}>
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
    <div className={`overflow-y-auto rounded-xl overflow-x-hidden flex-grow  w-full mx-auto bg-white ${isOpen? "" : "hidden" } `}>
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

