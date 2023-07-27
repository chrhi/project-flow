// Author: Abdullah Chehri
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { FlowImage } from "~/components/used/flow-image";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import PhasesSideBarSimpleProject from "~/components/sideBars/simple-project-sidebar";
import ChatFlowFeed from "~/components/chat/messages-flow";
import { Editor } from "~/components/editor/Editor";
import { getProjectById } from "~/server/ssr/get-ptoject-by-id";
import type { Project, ChatMessageProject } from "@prisma/client";
import { getProjectInisialMessages } from "~/server/ssr/get-flow-inisial-messages";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/lib/auth";
import type { Session } from "next-auth";

// Server-side data fetching
export const getServerSideProps: GetServerSideProps<{
  projects: string;
  initialMessages: string;
  AbdullahSession: string;
}> = async (context) => {
  // Fetch the user session
  const session = await getServerSession(context.req, context.res, authOptions);

  // Redirect if the session is not found
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // Fetch the project details and initial messages using the project ID stored in cookies
  const projectId = context?.req?.cookies["abdullah-project-id"];
  const project = await getProjectById({ id: projectId });
  const initialMessages = await getProjectInisialMessages({ id: projectId });

  // Store the session data
  const AbdullahSession = { ...session };

  // Return the fetched data as props
  return {
    props: {
      projects: JSON.stringify(project),
      initialMessages: JSON.stringify(initialMessages),
      AbdullahSession: JSON.stringify(AbdullahSession),
    },
  };
};

// Page component
const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

  // Fetch the data about the project
  const [viewState, setViewState] = useState<string>("MID");
  const [project, setProject] = useState<Project>({} as Project);

  api.newProjectRouter.getProjectById.useQuery({id: getProjectMetaData()}, {
    onSuccess: (data) => {
      if (!data) return;
      setProject(data);
    },
    onError: () => {
      // Handle error here
    }
  });

  const changeViewState = (point: string) => {
    if (viewState === "MID") {
      setViewState(point);
      return;
    }
    if (viewState !== "MID") {
      setViewState('MID');
    }
  }

  return (
    <>  
      <Header />
      <main className="flex w-full h-full bg-gray-50 overflow-hidden">
        <PhasesSideBarSimpleProject isOpen={true} />
        <div className={` ${viewState === "MID" ?  "w-[calc(50%-70px)]" : viewState === "FLOW" ? "w-[calc(100%-70px)]" : "w-[0%]"} ml-[70px] h-[calc(100vh-50px)]`}>
          <div className="w-full p-4 gap-x-4 h-[60px] overflow-hidden flex items-center justify-start">
            <FlowImage small image={project.image} type={project.imagetype} /> 
            <h1 className="text-3xl font-semibold text-gray-900 mt-auto truncate">{project.title}</h1>
          </div>
          {/* Here is the dashboard */}
          <div className="w-[90%] mx-auto h-[calc(100%-60px)] scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded overflow-y-auto bg-white rounded-lg p-4 shadow-md">
            <Editor />
          </div>
        </div>

        <div className={`${viewState === "MID" ?  "w-[50%]" : viewState === "CHAT" ? "w-[calc(100%-70px)]" : "w-[0%]"} h-[calc(100vh-50px)] bg-blue-500 relative`}>
          {/* This is the circle */}
          <div className="absolute left-[-30px] shadow-md flex items-center z-[5] overflow-hidden top-[50%] w-[60px] h-[60px] bg-transparent border-none rounded-[50%]">
            <AbdullahButton onClick={() => changeViewState("CHAT")} className={cn(buttonVariants({variant: "ghost"}), "p-1 h-16 w-10 bg-white")}>
              <ChevronLeft className="text-gray-900 w-4 h-4" />
            </AbdullahButton>
            <AbdullahButton onClick={() => changeViewState("FLOW")} className={cn(buttonVariants({variant: "ghost"}), "p-1 h-16 w-10 bg-gray-50")}>
              <ChevronRight className="text-gray-900 w-4 h-4" />
            </AbdullahButton>
          </div>
          <ChatFlowFeed
            session={JSON.parse(props.AbdullahSession) as Session}
            initialMessages={JSON.parse(props.initialMessages) as ChatMessageProject[]}
            project={JSON.parse(props.projects) as Project}
          />
        </div>
      </main>
    </>
  );
};

export default Page;
