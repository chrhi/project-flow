import DropDowsMenu from "./dropDown/DropDownManu"
import Image from "next/image"
import logo from "~/assets/logo.png"
import React from "react"
import { PagesNav } from "./PagesNav" 
import {  SreachBar } from "./SearchBar"
import Notifictions from "./dropDown/Notifictions"
import Invitation from "./dropDown/Invitation"
import MobilSideBar from "../common/mobil-sideBar"


export const Header = () => {

  return (
    <div className = {`w-full !z-[50] h-14 sticky top-0 flex justify-between px-4  items-center bg-white shadow-sm border-b border-gray-300 `}>
       <div className="w-[5%] h-full flex justify-start items-center">
          <Image alt="logo" src={logo} width={35} height={35}  />
       </div>
       <PagesNav />
       <div className="w-[25%]  h-[60px] gap-x-4 md:gap-x-1  hidden lg:flex justify-end items-center mr-2   ">     
            <div className="w-[10%] h-full" >
                <Notifictions />  
            </div>
           <div className="w-[10%] h-full" >
                 <SreachBar />
           </div>
           <div className="w-[10%] h-full" >
                <Invitation />  
            </div>
           <div className="w-[10%] h-full" >
                 <DropDowsMenu />
           </div> 
       </div>
       {/* <MobilSideBar /> */}
   </div>
  
 
  )
}
