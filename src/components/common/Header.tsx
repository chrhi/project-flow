import { header_page_Reducer , PAGES } from "~/store/app-reducer/headerReducer"
import { useRouter } from "next/router"
import {  Button } from '@mui/material'


export const Header = () => {


  const current_page = header_page_Reducer(state => state.current_page)
  const set_current_page = header_page_Reducer(state => state.set_current_page)
  const router = useRouter()

  const handleClick =  (path : string , page :PAGES) => {
    router.push(path) as unknown
    set_current_page({payload:page})
  }

  return (
   <div className = {`w-full !z-[800] h-[55px] sticky top-0 flex justify-between px-[7%] xl:px-[10%] py-2 items-center bg-white shadow-sm border-b border-gray-300 `}>
   
    <div 
    className="w-full  h-[60px] gap-x-4 flex items-center justify-start " 
    >
    <Button 
    variant="text"
     onClick={ () =>  handleClick("/app" ,PAGES.HOME) as unknown}
     className={`!text-md !normal-case !text-lg  ${current_page === PAGES.HOME ? '!text-indigo-600 !font-bold  ' : '!text-gray-700'}  !cursor-pointer `}
    >
        Home
    </Button>
    <Button
     variant="text"
     onClick={ () =>  handleClick("/app/myProject" ,PAGES.MYPROJECT) as unknown} 
     className={`!text-md !normal-case !text-lg gap-x-2 ${current_page === PAGES.MYPROJECT ? '!text-indigo-600 !font-bold  ' : '!text-gray-700'}  !cursor-pointer `}
     > Project
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
       </svg>
    </Button>
    
    </div>
   </div>
  )
}

 