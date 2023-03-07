import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import { NAVS , sidebar_Reducer  } from '~/store/app-reducer/SideBarReducer'

export  const Sidebar = () => {
  const router = useRouter()
  const current_page = sidebar_Reducer(state => state.current_page)
  const set_current_page = sidebar_Reducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   

  <div className="fixed flex flex-col top-0 left-0 w-[16rem] bg-white h-full border-r-[2px] border-black">
    <div className="flex items-center justify-start h-14 pl-4 ">
        <button
        onClick={() => handleClick("/app/myProject" , NAVS.STARTUP)}
        
        className="relative w-full flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
           </svg>

            <span className="ml-2 text-sm tracking-wide truncate">go back</span>
      </button>
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
          </div>
        </li>
        <li>
          <button
          onClick={() => handleClick("/app/startup" , NAVS.STARTUP)}
          className={`relative w-full flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50  hover:text-gray-800 border-l-4 border-transparent
           pr-6 ${current_page == NAVS.STARTUP ? ' text-gray-800 bg-gray-50 border-indigo-500 ' :'text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide truncate">start up</span>
          </button>
        </li>
        <li>
          <button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`relative flex w-full flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6  ${current_page == NAVS.STAKEHOLDER ? ' text-gray-800 bg-gray-50 border-indigo-500 ' :'text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">stakeholders</span>
        
          </button>
        </li>
        <li>
          <button 
          onClick={() => handleClick("/app/startup/documents" , NAVS.DOCUMENT) }
          className={`relative flex w-full flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6  ${current_page == NAVS.DOCUMENT ? ' text-gray-800 bg-gray-50 border-indigo-500 ' :'text-gray-600' } `}>
       
            <span className="ml-2 text-sm tracking-wide truncate">documents </span>
          
          </button>
        </li>
        <li>
          <Link href="/app/startup/application" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
           
            <span className="ml-2 text-sm tracking-wide truncate">application</span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-red-600 rounded-full">bad</span>
          </Link>
        </li> 
      </ul>
    </div>
  </div>

  )
}

