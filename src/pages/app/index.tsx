import type { NextPage } from "next";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import ActivityTracker from "~/components/home-page-components/ActivityTracker";
import FutureReminder from "~/components/home-page-components/FutureReminder";
import PriyerTimeMobil from "~/components/home-page-components/PryerTimeMobil";
import RecentMessages from "~/components/home-page-components/RecentMessages";
import UpcommingTasks from "~/components/home-page-components/UpcommingTasks";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";
import type { Project } from "@prisma/client";
import Flow from "~/components/board/flow-board/Flow";
import HomwPageFlow from "~/components/home-page-components/HomwPageFlow";




// Page component
const Page: NextPage = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  const { isLoading } = api.newProjectRouter.getProjectOfOrg.useQuery(
    {
      org_id: getOrganizationId(),
    },
    {
      onSuccess: (data) => {
        setProjects(data);
      },
    }
  );


  return (
    <> 
     <Header />
     <main className="w-full container  lg:py-10 p-4 lg:px-20 h-[calc(100vh-50px)] overflow-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
       
        <h1 className="lg:text-3xl  text-2xl font-medium text-[#2F3349]">Hi 👋 this is the dashboard and your personal space</h1>  
          <div className=" w-[95%] mx-auto md:w-full flex flex-col lg:flex-row h-[270px] lg:h-[200px] my-4  lg:p-0 lg:my-8 gap-x-4 gap-y-4 items-center justify-between">
            <FutureReminder />

            <ActivityTracker />

            <PriyerTimeMobil />
          </div>

          <div className=" w-[95%] mx-auto lg:w-full flex flex-col-reverse lg:flex-row h-[800px] lg:h-[400px] my-4 lg:my-8 gap-x-4 items-center justify-between">
            <UpcommingTasks />
            <RecentMessages />
          </div>
          <h1 className="lg:text-3xl  text-xl font-medium text-[#2F3349]"> Most Recent Flows</h1>  
          <div className=" flex overflow-x-auto overflow-y-hidden gap-x-6 items-center h-[430px] w-full">
            {projects.map((item ) => <HomwPageFlow  
              project={item}
            
            />  )}
          </div>
      </main>
    </>
  );

};

export default Page;