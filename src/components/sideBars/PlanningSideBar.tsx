import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import { PlanningSideBarReducer , NAVS } from '~/store/app-reducer/PlanningSideBarReducer'

export  const PlanningSideBar = () => {
  const router = useRouter()
  const current_page = PlanningSideBarReducer(state => state.current_page)
  const set_current_page = PlanningSideBarReducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   

  <div className="fixed flex flex-col top-0 left-0 w-[16rem] bg-white custopn-page-height mt-[55px] shadow-lg border-r border-gray-[100px]">
    <div className="flex items-center justify-start h-14  ">
        <Button
        onClick={() => handleClick("/app" , NAVS.ONE)}
        
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
          onClick={() => handleClick("/app/planning" , NAVS.TWO)}
          className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
          ${current_page == NAVS.TWO ? ' text-gray-800 bg-gray-50 border-indigo-500 ' :'text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide truncate">Project scope statement</span>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/planning/work_break_done" , NAVS.THREE)}
          className={`!relative !w-full !flex  !normal-case  !flex-row !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
            ${current_page == NAVS.THREE  ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide  truncate">Work breakdown structure </span>
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/planning/Project_Scheduler" , NAVS.FOUR)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.FOUR ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Project schedule</span>
        
          </Button>
        </li>
        
        <li>
          <Button 
          onClick={() => handleClick("/app/planning/Ressource_allocation" , NAVS.FIVE)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.FIVE ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Resource allocation</span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/planning/comminucation_plan" , NAVS.SIX)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.SIX ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Communication plan: </span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/planning/cost_managment_plan" , NAVS.SEVEN)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.SEVEN ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Cost management plan </span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/planning/change_managment_plan" , NAVS.EIGHT)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.EIGHT ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Change management plan </span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/planning/risk_management_plan" , NAVS.NIGHT)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.NIGHT ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Risk management plan</span>
        
          </Button>
        </li>
        <li>
        <Button
        onClick={() => handleClick("/app/planning/risk_management_plan" , NAVS.TEN) }
        className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.TEN ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
           
            <span className="ml-2 text-sm tracking-wide truncate">application</span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-red-600 rounded-full">bad</span>
            </Button>
        </li> 
      </ul>
    </div>
  </div>

  )
}
