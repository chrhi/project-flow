import DropDowsMenu from "../common/DropDownManu"
import Image from "next/image"
import logo from "~/assets/logo.png"
import { NotAuth } from "./NotAuth"
import React from "react"
import { PagesNav } from "./PagesNav"
import TopBanner from "../ui/TopBanner"
import { SearchBar } from "./SearchBar"

type Props = {
  notAuth? : boolean,
}

export const Header = ({notAuth = false}:Props) => {




  return (
    <>
    {/* <TopBanner /> */}
    <div className = {`w-full !z-[50] h-14 sticky top-0 flex justify-between px-4  items-center bg-white shadow-sm border-b border-gray-300 `}>
   <div className="w-[5%] h-full flex justify-start items-center">
   <Image alt="logo" src={logo} width={35} height={35}  />
   </div>
 {!notAuth && <PagesNav />}
    {
      notAuth ? 
      <NotAuth />
       :
       <div className="w-[25%]  h-[60px] flex justify-end items-center  ">
        <SearchBar />
       <DropDowsMenu />
     </div>
    }
   </div>
    </>
 
  )
}
