import type { NextPage } from "next";
import ActivityTracker from "~/components/home-page-components/ActivityTracker";
import FutureReminder from "~/components/home-page-components/FutureReminder";
import PriyerTimeMobil from "~/components/home-page-components/PryerTimeMobil";
import RecentMessages from "~/components/home-page-components/RecentMessages";
import UpcommingTasks from "~/components/home-page-components/UpcommingTasks";






// Page component
const Page:NextPage = ()  => {


  return (
    <> 
      <main className=" w-full container min-h-[calc(100vh-50px)] p-1 pt-4 md:p-8 lg:px-24 h-fit overflow-hidden ">
       
        <h1 className="lg:text-3xl  text-xl font-medium text-[#2F3349]">Hi 👋 this is the dashboard and your personal space</h1>  
          <div className="w-full flex flex-col-reverse lg:flex-row h-[400px] lg:h-[200px] my-4 lg:my-8 gap-x-4 items-center justify-between">
            <FutureReminder />

            <ActivityTracker />

            <PriyerTimeMobil />
          </div>

          <div className="w-full flex flex-col-reverse lg:flex-row h-[800px] lg:h-[400px] my-4 lg:my-8 gap-x-4 items-center justify-between">
            <UpcommingTasks />
            <RecentMessages />
          </div>
          <h1 className="lg:text-3xl  text-xl font-medium text-[#2F3349]"> Most Recent Flows</h1>  
       
      </main>
    </>
  );

};

export default Page;