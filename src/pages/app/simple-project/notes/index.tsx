import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { FlowImage } from "~/components/used/flow-image";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import type  { Project } from "@prisma/client";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import PhasesSideBarSimpleProject from "~/components/sideBars/simple-project-sidebar";
import ChatFlowFeed from "~/components/chat/messages-flow";
import { useRouter } from "next/router";

const Page: NextPage = () => {

 
  //fetch the data about the project

  const router = useRouter()

  const [isloading , setIsLoading ] = useState<boolean>(false)

  const [viewState , setViewState] = useState<string>("MID")

  const [project , setProject] = useState<Project>({} as Project)

  api.newProjectRouter.getProjectById.useQuery({id : getProjectMetaData()}, {
    onSuccess : (data) => {

        if(!data) return 

        setProject(data)
    },
    onError : () => {

    }
  })

  const changeViewState = (point : string) => {
    if(viewState === "MID"){
      setViewState(point)
      return
    }
    if(viewState !== "MID"){
      setViewState('MID')
    }
  }

  const handleRouterToAddPage = async () => {
    setIsLoading(true)
    await router.push("/app/simple-project/notes/noteAdd")
    setIsLoading(false)
  }
 

  return (
    <>  
      <Header />
      <main className="   flex w-full h-full bg-gray-50 overflow-hidden">
      <PhasesSideBarSimpleProject isOpen = {true} />

      <div className={` 
      ${viewState === "MID" ?  " w-[calc(50%-70px)] " : viewState === "FLOW" ? "w-[calc(100%-70px)]" : "w-[0%]"}
        ml-[70px] h-[calc(100vh-50px)]  `}>
            <div className="w-full p-4 gap-x-4 h-[60px]  overflow-hidden flex items-center justify-start">
                    <FlowImage small image={project.image} type={project.imagetype} /> 
                    <h1 className="text-3xl font-semibold  text-gray-900 mt-auto truncate ">{project.title}</h1>
            </div>
            {/* here it is the dashboard */}
            <div className="w-[90%]  mx-auto h-[calc(100%-60px)] scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded overflow-y-auto bg-white rounded-lg p-4 shadow-md ">

              <div className="w-full h-[70px] flex items-center justify-between">
              <h2 className="text-xl my-4 font-bold  text-start text-gray-500">Notes</h2>
              <AbdullahButton
                 onClick={async () => await handleRouterToAddPage()}
                 isLoading={isloading}
                 className={cn(buttonVariants({variant :"secondary" , size : "sm"}))}>
                 {!isloading &&  <PlusCircle className="w-4 h-4 text-gray-900 mr-2"/>}
                create note
              </AbdullahButton>
              </div>
    
            </div>
      </div>

      <div className={` ${viewState === "MID" ?  "w-[50%]" : viewState === "CHAT" ? "w-[calc(100%-70px)]" : "w-[0%]"} h-[calc(100vh-50px)] bg-blue-500 relative  `} >

        {/* this is the circle */}
        <div className="absolute left-[-30px] shadow-md flex items-center z-[5] overflow-hidden top-[50%] w-[60px] h-[60px] bg-transparent border-none rounded-[50%] ">
          <AbdullahButton
          onClick={() => changeViewState("CHAT")}
          className={cn(buttonVariants({variant : "ghost"}) , ` p-1 h-16 w-10 bg-white  ` )}>
               <ChevronLeft className="text-gray-900 w-4 h-4 " />
          </AbdullahButton>
          <AbdullahButton
          onClick={() => changeViewState("FLOW")}
          className={cn(buttonVariants({variant : "ghost"}) , ` p-1 h-16 w-10 bg-gray-50  ` )}>
               <ChevronRight className="text-gray-900 w-4 h-4 " />
          </AbdullahButton>
        </div>
         <ChatFlowFeed />
       
      </div>
    
      </main>
    </>
  );
};

export default Page;