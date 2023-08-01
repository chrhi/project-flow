/*
 * Import necessary dependencies and components.
 * Abdullah Chahri created this Header component.
 * Email: mahdi.chahri55@gmail.com
 */
import DropDowsMenu from "./dropDown/user-nav";
import Image from "next/image";
import React, { useState } from "react";
import { PagesNav } from "./PagesNav";
import { MobileSideBar } from "./mobile";
import Invitation from "./dropDown/Invitation";
import TaskNotifictions from "./dropDown/TaskNotifictions";
import SearchBar from "./dropDown/SearchBar";
import MessageNofinications from "./dropDown/MessageNofinications";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

export const Header = () => {

  const [notifications , setNotifications] = useState({
    messages : 0 ,
    invites : 0 ,
    tasks : 0
  })

  const {isLoading} = api.notificatioRouter.getUserNotifications.useQuery(undefined , {
    onSuccess : (data) => {
      if(!data) return
      setNotifications({
        messages : data?.messages , 
        invites : data?.invites , 
        tasks : data?.tasks
      })
    }
  })


  const session = useSession()

  return (
    /*
     * Main container for the Header component.
     * Abdullah Chahri created this header with navigation and drop-down components.
     * Email: mahdi.chahri55@gmail.com
     */
    <>
      <div className={`w-full !z-[50] h-[50px] sticky top-0 flex justify-between lg:justify-start px-4 items-center bg-white dark:bg-neutral-900 border-b dark:border-stone-900`}>
        <div className="w-[30%] pt-2 lg:pt-0 lg:w-[5%] h-full lg:flex justify-start items-center">
          <Image alt="logo" src="/logo.png"  width={35} height={35} />
        </div>
        <PagesNav />

        <div className=" w-[50%] md:w-[25%] h-[60px] gap-x-5 flex justify-end items-center mr-2">
          <SearchBar />
          <MessageNofinications />
          <TaskNotifictions />
          <Invitation inisialInvites={notifications.invites} />
          <DropDowsMenu serverSession={session.data as Session} />
        </div>
      
      </div>
      <MobileSideBar />
    </>
  );
};
