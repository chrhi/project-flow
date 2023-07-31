import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { FlowImage } from "~/components/used/flow-image";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import PhasesSideBarSimpleProject from "~/components/sideBars/simple-project-sidebar";
import ChatFlowFeed from "~/components/chat/messages-flow";
import { useRouter } from "next/router";
import type { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getProjectById } from "~/server/ssr/get-ptoject-by-id";
import type { Project, ChatMessageProject } from "@prisma/client";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { ProjectReducer , type ViewStateValues } from '~/store/flow-router/selected-project';


// Page component
const Page: NextPage = (
  
) => {
  //fetch the data about the project
  const  setViewState = ProjectReducer(state => state?.setViewState)
  const  viewState = ProjectReducer(state => state?.viewState)
  const stateProject = ProjectReducer(state => state?.project)
  const [project, setProject] = useState<Project>({} as Project);

  const [team, setTeam] = useState<User[]>([]);

  const session = useSession()
  const router = useRouter()

  const { isLoading } = api.newProjectRouter.getProjectById.useQuery(
    { id: getProjectMetaData() },
    {
      onSuccess: (data) => {
        if (!data) return;
        setProject(data);
        const myTeam = JSON.parse(data.team as string)
        setTeam(myTeam as User[])
      },
      onError: () => {},
    }
  );

 
  // Function to handle changing the view state
  const changeViewState = (point: ViewStateValues) => {
    if (viewState === "MID") {
      setViewState(point);
      return;
    }
      setViewState("MID");
  };


  return (
    <>
      <Header />
      <main className="flex w-full h-full bg-gray-50 overflow-hidden">
      
        <PhasesSideBarSimpleProject isOpen={true} />

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
                <FlowImage small image={project.image} type={project.imagetype} />
                <h1 className="text-3xl font-semibold text-gray-900 mt-auto truncate ">
                  {project.title}
                </h1>
              </div>
              {/* here it is the brief header */}
              <div className="w-[90%] mx-auto h-[calc(100%-60px)] scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded overflow-y-auto bg-white rounded-lg p-4 shadow-md">
                <div className="w-full h-[40px] flex items-center justify-between">
                  <h2 className="text-xl my-4 font-bold text-start text-gray-500">My team</h2>
                
                </div>
               
                <div className="w-full h-fit ">
                        {/* here put that map the will loop through every element */}
                        {team.map(item => <TeamMember 
                                             image={item.image }
                                             name ={item.name} 
                                             email={item.email} />
                        )}
                </div>
              </div>
           
        </div>

        <div
          className={`${
            viewState === "MID"
              ? "w-[50%]"
              : viewState === "CHAT"
              ? "w-[calc(100%-70px)]"
              : "w-[0%]"
          } h-[calc(100vh-50px)] bg-white relative`}
        >
          {/* this is the circle */}
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

const TeamMember = ({image , name , email } : {image : string | null , name : string | null , email : string | null }) => {

    return (
        <div className="w-full h-[40px] flex my-4 items-center gap-x-4 justify-start p-4 ">
           <Avatar>
               <AvatarImage src={image || "/assets/avatar.png"} alt="@abdullah" />
               <AvatarFallback>AB</AvatarFallback>
           </Avatar>
           <p className="text-lg  text-gray-500 truncate">{name}</p>
           <p className="text-lg  text-gray-900 truncate">{email}</p>
        </div>
    )
}

export default Page;
