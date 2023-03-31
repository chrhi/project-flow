import { useRouter } from 'next/router'
import { NAVS , sidebar_Reducer  } from '~/store/app-reducer/SideBarReducer'
import { Button } from '@mui/material'

export  const CloseSideBar = () => {
  const router = useRouter()
  const current_page = sidebar_Reducer(state => state.current_page)
  const set_current_page = sidebar_Reducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   

  <div className="fixed flex flex-col top-0 left-0 w-[16rem] bg-white custopn-page-height mt-[55px] shadow-lg border-r border-gray-[100px]">
    <div className="flex items-center justify-start h-14  ">
        <Button
        onClick={() => handleClick("/app" , NAVS.STARTUP)}
        
        className="!relative !w-full !flex !flex-row  !normal-case  !items-center !text-gray-600 !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 !justify-start">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
           </svg>

            <span className="ml-2 text-sm tracking-wide truncate">retourner</span>
      </Button>
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
        <li className="px-5">
          <div className="flex flex-row items-center h-8">
            <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
          </div>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/startup" , NAVS.STARTUP)}
          className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
          ${current_page == NAVS.STARTUP ? '!text-gray-800 !bg-gray-50  border-indigo-500 ' :'text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide truncate">Lessons learned</span>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/startup/secondForm" , NAVS.SECONDFORM)}
          className={`!relative !w-full !flex  !normal-case  !flex-row !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
            ${current_page == NAVS.SECONDFORM  ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide  truncate">Project documentation</span>
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Project evaluation</span>
        
          </Button>
        </li>

        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Project closure</span>
        
          </Button>
        </li>

        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Resource handover</span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Client acceptance</span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Archiving</span>
        
          </Button>
        </li>
        
        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Celebrations</span>
        
          </Button>
        </li>
        <li>
        <Button
        onClick={() => handleClick("/app/startup/application" , NAVS.APPLICATION) }
        className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.APPLICATION ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
           
            <span className="ml-2 text-sm tracking-wide truncate">application</span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-red-600 rounded-full">bad</span>
            </Button>
        </li> 
      </ul>
    </div>
  </div>

  )
}

