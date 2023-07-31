import type { NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { FlowImage } from "~/components/used/flow-image";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import PhasesSideBarSimpleProject from "~/components/sideBars/simple-project-sidebar";
import ChatFlowFeed from "~/components/chat/messages-flow";
import { useRouter } from "next/router";
import { BreifEditor } from "~/components/editor/BreifEditor";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { openDeleteFlowPopup } from "~/store/flow-router/project";
import type { Project, ChatMessageProject } from "@prisma/client";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import { ProjectReducer , type ViewStateValues } from '~/store/flow-router/selected-project';

// Page component
const Page: NextPage = (
) => {
  // State and router setup
 
  const  setViewState = ProjectReducer(state => state?.setViewState)
  const  viewState = ProjectReducer(state => state?.viewState)
  const stateProject = ProjectReducer(state => state?.project)
  const setIsOpen = openDeleteFlowPopup((state) => state.setShowModel);
  const router = useRouter();
  const session = useSession()

  // Function to handle changing the view state
  const changeViewState = (point: ViewStateValues) => {
    if (viewState === "MID") {
      setViewState(point);
      return;
    }
      setViewState("MID");
  };

  const [project, setProject] = useState<Project>({} as Project);

  const {isLoading} = api.newProjectRouter.getProjectById.useQuery({id : getProjectMetaData()},{
    onSuccess : (data) => {
      if(!data) return
      setProject(data)
    }
  })


  // Page layout and components
  return (
    <>
     <Header />
      <main className="flex w-full h-full bg-gray-50 overflow-hidden">
       
        <PhasesSideBarSimpleProject isOpen={true} />

        {/* Content section */}
        <div
          className={`${
            viewState === "MID"
              ? "w-[calc(50%-70px)]"
              : viewState === "FLOW"
              ? "w-[calc(100%-70px)]"
              : "w-[0%]"
          } ml-[70px] h-[calc(100vh-50px)]`}
        >
          <div className="w-full p-4 gap-x-4 h-[60px] overflow-hidden flex items-center justify-start">
            <FlowImage small image={ project?.image} type={project?.imagetype} />
            <h1 className="text-3xl font-semibold text-gray-900 mt-auto truncate ">
              {project?.title}
            </h1>
          </div>
          {/* Brief header */}
          <div className="w-[90%] mx-auto h-[calc(100%-60px)] scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded overflow-y-auto bg-white rounded-lg p-4 shadow-md">
            <div className="w-full h-[40px] flex items-center justify-between">
              <h2 className="text-xl my-4 font-bold text-start text-gray-500">Brief</h2>
              {/* Dropdown menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => router.push("/app/simple-project/brief/edit")}
                  >
                    Edit Project
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsOpen(true)} className="cursor-pointer">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-full flex flex-col justify-between gap-y-8 my-4 h-[100px]">
              <h1 className="text-md text-gray-500 text-start ">
                {project?.description}
              </h1>
            </div>
            <div className="w-full h-fit border-t">
              <BreifEditor blocks={project?.content ? project?.content : []} />
            </div>
          </div>
        </div>

        {/* Chat section */}
        <div
          className={`${
            viewState === "MID"
              ? "w-[50%]"
              : viewState === "CHAT"
              ? "w-[calc(100%-70px)]"
              : "w-[0%]"
          } h-[calc(100vh-50px)] bg-white relative`}
        >
          {/* Circle */}
          <div className="absolute left-[-30px] shadow-md flex items-center z-[5] overflow-hidden top-[50%] w-[60px] h-[60px] bg-transparent border-none rounded-[50%]">
            <AbdullahButton
              onClick={() => changeViewState("CHAT")}
              className={cn(buttonVariants({ variant: "ghost" }), `p-1 h-16 w-10 bg-white`)}
            >
              <ChevronLeft className="text-gray-900 w-4 h-4 " />
            </AbdullahButton>
            <AbdullahButton
              onClick={() => changeViewState("FLOW")}
              className={cn(buttonVariants({ variant: "ghost" }), `p-1 h-16 w-10 bg-gray-50`)}
            >
              <ChevronRight className="text-gray-900 w-4 h-4 " />
            </AbdullahButton>
          </div>
          <ChatFlowFeed
            session={session.data as Session}
            project={project}
          />
        </div>
      </main>
    </>
  );
};

export default Page;
