/*
 * Import necessary dependencies and components.
 * Abdullah Chahri created this Header component.
 * Email: mahdi.chahri55@gmail.com
 */
import DropDowsMenu from "./dropDown/user-nav";
import Image from "next/image";
import React from "react";
import { PagesNav } from "./PagesNav";
import { MobileSideBar } from "./mobile";
import Invitation from "./dropDown/Invitation";
import TaskNotifictions from "./dropDown/TaskNotifictions";
import SearchBar from "./dropDown/SearchBar";
import MessageNofinications from "./dropDown/MessageNofinications";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";



export const Header = () => {


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
          <Image alt="logo" src="/logo.png" width={35} height={35} />
        </div>
        <PagesNav />

        <div className="w-[25%] h-[60px] md:gap-x-5 hidden md:flex justify-end items-center mr-2">
          <SearchBar />
          <MessageNofinications />
          <TaskNotifictions />
          <Invitation />
          <DropDowsMenu serverSession={session.data as Session} />
        </div>
        <MobileSideBar />
      </div>
    </>
  );
};
