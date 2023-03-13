import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import GroupsIcon from '@mui/icons-material/Groups';
import { PlanningSideBarReducer , NAVS} from '~/store/app-reducer/PlanningSideBarReducer';

export  const  SideNav  = () => {
  const router = useRouter()
  const current_page = PlanningSideBarReducer(state => state.current_page)
  const set_current_page = PlanningSideBarReducer(state => state.set_current_page)

  const handleClick = (path:string , selected : NAVS) => {
    router.push(path) as unknown
    set_current_page({payload: selected})
  }

  return (
   

  <div className="fixed flex flex-col top-0 left-0 w-[7rem] bg-white custopn-page-height mt-[55px] shadow-2xl border-r border-gray-[100px]">
    <div className="flex items-center justify-start h-14  ">
        <Button
        onClick={() => handleClick("/app/myProject" , NAVS.SCOPE)}
        
        className="!relative !w-full !flex !flex-row  !normal-case !text-2xl !items-center !text-gray-600 !h-11 !focus:outline-none !hover:bg-gray-50  !hover:text-gray-800 !border-l-4 !border-transparent !pr-6 !justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
           </svg>    
      </Button>
    </div>
    <div className="overflow-y-auto overflow-x-hidden flex-grow">
      <ul className="flex flex-col py-4 space-y-1">
      
        <li>
          <Button
          onClick={() => handleClick("/app/planning/scope" , NAVS.SCOPE)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.SCOPE ? ' !text-blue-860   ' :'!text-gray-600' }`}>
        
          <DescriptionIcon className={`!text-[3rem] `} />
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/planning/communication" , NAVS.COMUNICATION)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.COMUNICATION ? ' !text-blue-600  ' :'!text-gray-600' }`}>
        
        <AssignmentIcon className={`!text-[3rem] `} />
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/planning/money" , NAVS.MONEY)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.MONEY ? ' !text-blue-600  ' :'!text-gray-600' }`}>
        
        <RequestPageIcon className="!text-[3rem]"/>
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/planning/communication" , NAVS.HUMANS)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.HUMANS ? ' !text-blue-600  ' :'!text-gray-600' }`}>
        
        <GroupsIcon className={`!text-[3rem] `} />
        
          </Button>
        </li>
        <li>
          <Button
          onClick={() => handleClick("/app/planning/communication" , NAVS.APPLICATION)}
          className={`!relative !w-full !flex !flex-col  !normal-case !h-[7rem]  !items-center !justify-start  !focus:outline-none !hover:bg-gray-50  !hover:bg-sky-100 !p-4
          ${current_page == NAVS.APPLICATION ? ' !text-blue-600  ' :'!text-gray-600' }`}>
        
        <AssignmentIcon className={`!text-[3rem] `} />
          </Button>
        </li>
       
        
      </ul>
    </div>
  </div>

  )
}













 
