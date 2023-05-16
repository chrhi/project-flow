import DropDowsMenu from "../common/DropDownManu"
import Image from "next/image"
import logo from "~/assets/logo.png"
import React from "react"
import { PagesNav } from "../header/PagesNav" 
import {  SreachBar } from "../header/SearchBar"
import Notifictions from "./Notifictions"


export const Header = () => {




  return (
   
 
    <div className = {`w-full !z-[50] h-14 sticky top-0 flex justify-between px-4  items-center bg-white shadow-sm border-b border-gray-300 `}>
       <div className="w-[5%] h-full flex justify-start items-center">
          <Image alt="logo" src={logo} width={35} height={35}  />
       </div>
       <PagesNav />
       <div className="w-[25%]  h-[60px] gap-x-1  flex justify-end items-center  ">     
            <div className="w-[10%] h-full" >
                <Notifictions />  
            </div>
           <div className="w-[10%] h-full" >
                 <SreachBar />
           </div>
           <div className="w-[10%] h-full" >
                <Notifictions />  
            </div>
           <div className="w-[10%] h-full" >
                 <DropDowsMenu />
           </div>
       
       </div>
   </div>
  
 
  )
}
