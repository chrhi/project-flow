import { type NextPage } from "next";
import Boardhead from "~/components/board/flow-board/board-head/board-head";
import { Header } from "~/components/header/Header";





const Page: NextPage = () => {


  


  return (
    <> 
    <Header />
      <main className=" w-full container min-h-[calc(100vh-50px)] p-8 h-fit ">
       
        <h1 className="text-3xl font-semibold text-gray-900">Hi 👋 this is the dashboard and your personal space</h1>  
          {/* FutureReminder */}
          {/* ActivityTracker */}

          {/* UpcommingTasks */}
          {/* RecentMessages */}
       
       
      </main>
    </>
  );

};

export default Page;