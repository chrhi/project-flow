import Link from "next/link"


export const Header = () => {
  return (
   <header className ="w-full h-[50px] flex justify-between items-center px-6 xl:px-8 bg-indigo-50 shadow">
    <div>
        <h1 className="font-bold text-xl ">Alpha</h1>
    </div>
    <nav className ="px-4 flex items-center justify-center gap-x-4 w-[30%] h-full">
       <button 
       className="inline-flex justify-center rounded-full bg-indigo-600 py-2 px-3 text-sm font-semibold text-white  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
       >
        Home
       </button>
       <button 
       className="inline-flex justify-center rounded-full text-black py-2 px-3 text-sm font-semibold    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
       >
        Settings
       </button>
    </nav>
   </header>
  )
}

 