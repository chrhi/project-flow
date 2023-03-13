import { useRouter } from 'next/router'
import { NAVS , sidebar_Reducer  } from '~/store/app-reducer/SideBarReducer'
import { Button } from '@mui/material'

export  const  SideNav  = () => {
  const router = useRouter()
  const current_page = sidebar_Reducer(state => state.current_page)
  const set_current_page = sidebar_Reducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   

  <div className="fixed flex flex-col top-0 left-0 w-[7rem] bg-white custopn-page-height mt-[55px] shadow-lg border-r border-gray-[100px]">
    <div className="flex items-center justify-start h-14  ">
        <Button
        onClick={() => handleClick("/app/myProject" , NAVS.STARTUP)}
        
        className="!relative !w-full !flex !flex-row  !normal-case  !items-center !text-gray-600 !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 !justify-start">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
           </svg>

          
      </Button>
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
      
        <li>
          <Button
          onClick={() => handleClick("/app/planning/scope" , NAVS.STARTUP)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.STARTUP ? ' !text-blue-800 !bg-sky-100  ' :'!text-gray-600' }`}>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
         </svg>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/planning/communication" , NAVS.STARTUP)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.STARTUP ? ' !text-blue-800 !bg-sky-100  ' :'!text-gray-600' }`}>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
         </svg>
          </Button>
        </li>
        
      </ul>
    </div>
  </div>

  )
}













 
