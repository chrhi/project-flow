import Link from "next/link"
import { header_page_Reducer , PAGES } from "~/store/app-reducer/headerReducer"
import { useRouter } from "next/router"


export const Header = () => {


  const current_page = header_page_Reducer(state => state.current_page)
  const set_current_page = header_page_Reducer(state => state.set_current_page)
  const router = useRouter()

  const handleClick =  (path : string , page :PAGES) => {
    router.push(path) as unknown
    set_current_page({payload:page})
  }

  return (
   <header className ="w-full h-[100px] flex flex-col px-6 xl:px-8 bg-white border-b border-gray-200 ">
    <div className="container mx-auto flex justify-between items-center h-[70px]">
      <a className="font-bold text-blue-900 cursor-pointer hover:text-black xl:text-4xl text-2xl">Alpha</a>
      <button  
          className="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        log out
      </button>
    </div>
    <div className="container mx-auto h-[30px] gap-x-4 flex items-end justify-start pb-2" >
    <button onClick={ () =>  handleClick("/app" ,PAGES.HOME) as unknown}
     className={`text-md  ${current_page === PAGES.HOME ? 'text-indigo-600 font-bold  ' : 'text-gray-700'}  cursor-pointer `} >Home</button>
    <button  onClick={ () =>  handleClick("/app/myProject" ,PAGES.MYPROJECT) as unknown} 
    className={`text-md cursor-pointer  ${current_page === PAGES.MYPROJECT ? 'text-indigo-600 font-bold ' : 'text-gray-700'}  `} > Project</button>
    <Link href={"/"} className={`text-md  cursor-pointer  ${current_page === PAGES.SETTINGS ? 'text-indigo-600 font-bold ' : 'text-gray-700'}    `} >Settings</Link>
    </div>
   </header>
  )
}

 