/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { NAVS , sidebar_Reducer  } from '~/store/app-reducer/SideBarReducer'
import { Button } from '@mui/material'

export  const Sidebar = () => {
  const router = useRouter()
  const current_page = sidebar_Reducer(state => state.current_page)
  const set_current_page = sidebar_Reducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   

  <div className="fixed flex flex-col top-[70px] left-[20px] w-[30rem] bg-gray-50 custopn-page-height mt-[55px] rounded-lg border-gray-[100px]">
    <div className="flex items-center justify-start h-14 w-[70%] mx-auto bg-white  ">
        <Button
        onClick={() => handleClick("/app" , NAVS.STARTUP)}
        
        className="!relative !w-full !flex !flex-row  !normal-case  !items-center !text-gray-600 !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 !justify-start">
        

            <span className="ml-2 text-sm tracking-wide truncate">all my links</span>
      </Button>
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow  w-[70%] mx-auto bg-white">
      <ul className="flex flex-col py-4 space-y-1">
      
        <li>
          <Button
          onClick={() => handleClick("/app/startup" , NAVS.SETUP)}
          className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
          ${current_page == NAVS.SETUP ? ' !text-gray-800 !bg-gray-50  ' :'!text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide truncate">Initier</span>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/startup/setup" , NAVS.STARTUP)}
          className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
          ${current_page == NAVS.STARTUP ? ' !text-gray-800 !bg-gray-50  ' :'!text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide truncate">Détails du projet</span>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/startup/tables" , NAVS.TABLE)}
          className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
          ${current_page == NAVS.TABLE ? ' !text-gray-800 !bg-gray-50  ' :'!text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide truncate">Objets du projet </span>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/startup/secondForm" , NAVS.SECONDFORM)}
          className={`!relative !w-full !flex  !normal-case  !flex-row !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 
            ${current_page == NAVS.SECONDFORM  ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' }`}>
          
            <span className="ml-2 text-sm tracking-wide  truncate">Mon équipe</span>
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/startup/stakeholders" , NAVS.STAKEHOLDER)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.STAKEHOLDER ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Parties prenantes</span>
        
          </Button>
        </li>
        <li>
          <Button 
          onClick={() => handleClick("/app/startup/milestones" , NAVS.MILESTONES)}
          className={`!relative !w-full !flex  !normal-case  !flex-row  !justify-start !items-center !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.MILESTONES ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
        

            <span className="ml-2 text-sm tracking-wide truncate">Jalons</span>
        
          </Button>
        </li>
       
        <li>
        <Button
        onClick={() => handleClick("/app/startup/application" , NAVS.APPLICATION) }
        className={`!relative !w-full !flex !flex-row  !normal-case  !items-center !justify-start !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6  ${current_page == NAVS.APPLICATION ? ' !text-gray-800 !bg-gray-50 !border-indigo-500 ' :'!text-gray-600' } `}>
           
            <span className="ml-2 text-sm tracking-wide truncate">Application</span>
            <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-white bg-red-600 rounded-full">bad</span>
            </Button>
        </li> 
      </ul>
    </div>
  </div>

  )
}

