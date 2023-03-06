import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export  const Sidebar = () => {
  const router = useRouter()
  return (
   

  <div className="fixed flex flex-col top-0 left-0 w-[16rem] bg-white h-full border-r-[2px] border-black">
    <div className="flex items-center justify-start h-14 pl-4 ">
        <button
        onClick={() => router.push("/") as unknown as () => void}
        
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent  pr-6">
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
          <Link href="/app/startup" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
          
            <span className="ml-2 text-sm tracking-wide truncate">start up</span>
          </Link>
        </li>
        <li>
          <Link href="/app/startup/stakeholders" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
        

            <span className="ml-2 text-sm tracking-wide truncate">stakeholders</span>
        
          </Link>
        </li>
        <li>
          <Link href="/app/startup/documents" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
       
            <span className="ml-2 text-sm tracking-wide truncate">documents </span>
          
          </Link>
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

