import DropDowsMenu from "./dropDown/DropDownManu"
import Image from "next/image"
import logo from "~/assets/logo.png"
import React from "react"
import { PagesNav } from "./PagesNav" 
import { MobilManueBar } from "./mobil-header/mobile-manue-bar"





export const Header = () => {

  return (
    <div className = {`w-full !z-[50] h-14 sticky top-0 flex justify-start px-4  items-center bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-300 dark:border-stone-900 `}>
      <MobilManueBar />
       <div className="w-[5%] h-full hidden  lg:flex justify-start items-center">
          <Image alt="logo" src={logo} width={35} height={35}  />
       </div>
       <PagesNav />
      
       <div className="w-[25%]  h-[60px] gap-x-4 md:gap-x-1  hidden lg:flex justify-end items-center mr-2   ">     
           
           <div className="w-[10%] h-full" >
                 <DropDowsMenu />
           </div> 
       </div>
       {/* <MobilSideBar /> */}
   </div>
  
 
  )
}
