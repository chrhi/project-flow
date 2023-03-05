import Link from "next/link"


export const Header = () => {
  return (
   <header className ="w-full h-[100px] flex flex-col px-6 xl:px-8 bg-indigo-50 shadow">
    <div className="container mx-auto flex justify-between items-center h-[70px]">
      <a className="font-bold text-blue-900 cursor-pointer hover:text-black xl:text-4xl text-2xl">Alpha</a>
      <button  
          className="flex-none rounded-full bg-gray-900 py-1 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
      >
        log out
      </button>
    </div>
    <div className="container mx-auto h-[30px] gap-x-4 flex items-end justify-start pb-2" >
    <Link href={"/"} className={`text-md text-indigo-600  cursor-pointer font-bold`} >Home</Link>
    <Link href={"/"} className={`text-md text-gray-700 cursor-pointer hover:text-black `} >My project</Link>
    <Link href={"/"} className={`text-md text-gray-700 cursor-pointer hover:text-black `} >settings</Link>
    </div>
   </header>
  )
}

 