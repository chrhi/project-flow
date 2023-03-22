import { header_page_Reducer , PAGES } from "~/store/app-reducer/headerReducer"
import { useRouter } from "next/router"
import {  Button } from '@mui/material'
import DropDowsMenu from "./DropDownManu"



export const Header = () => {


  const current_page = header_page_Reducer(state => state.current_page)
  const set_current_page = header_page_Reducer(state => state.set_current_page)
  const router = useRouter()

  const handleClick =  (path : string , page :PAGES) => {
    router.push(path) as unknown
    set_current_page({payload:page})
  }

  return (
   <div className = {`w-full !z-[100] h-14 sticky top-0 flex justify-between px-2 py-2 items-center bg-white shadow-sm border-b border-gray-300 `}>
   
    <div 
    className="w-[70%]   h-[60px] gap-x-4 flex items-center justify-start " 
    >
     
    <Button 
    variant="text"
  
     onClick={ () =>  handleClick("/app" ,PAGES.HOME) as unknown}
     className={` !normal-case !text-lg hover:bg-gray-100  ${current_page === PAGES.HOME ? '!text-gray-800 !font-bold !rounded-lg  ' : '!text-gray-400'}  !cursor-pointer `}
    >
      tableau de bord
    </Button>
   
    
    </div>
    <div className="w-[30%]  h-[60px] flex justify-end items-center  ">
      <DropDowsMenu />
    </div>
   </div>
  )
}

 