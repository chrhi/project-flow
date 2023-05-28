import Image from "next/image"
import logo from "~/assets/logo.png"
import React from "react"
import MaxWidthWrapper from "~/components/layout/MaxWidthWrapper"
import { DropDownAdmin } from "./DropDownAdmin"
import { Button } from "~/components/ui/button"
import AdminNavTabs from "./admin-header-nav"


const Items = [
    {name : "Dashboard" , path : "/admin"},
    {name : "Users" , path : "/"},
    {name : "Settings" , path : "/"},
]

export const HeaderAdmin = () => {

  return (
    <div className = {`w-full !z-[50] h-28 sticky top-0 flex  flex-col justify-end px-4  items-start bg-white shadow-sm border-b border-gray-300 `}>
       
        <div className="w-full h-[50px] flex justify-between px-8 items-center">
           <div className="w-[20%] h-full flex justify-start gap-x-4 items-center">
           <DropDownAdmin />
           </div>
           
            <Image alt="logo" src={logo} width={35} height={35}  />
        </div>
       <div className="w-full  h-[50px]  gap-x-4 md:gap-x-1 px-8 flex justify-start items-center mr-2   ">     
            <AdminNavTabs />     
       </div>
      
       {/* <MobilSideBar /> */}
   </div>
  
 
  )
}
