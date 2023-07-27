import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
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
  // State and router setup
  const [viewState, setViewState] = useState<string>("MID");
  const setIsOpen = openDeleteFlowPopup((state) => state.setShowModel);
  const router = useRouter();

  // Function to handle changing the view state
  const changeViewState = (point: string) => {
    if (viewState === "MID") {
      setViewState(point);
      return;
    }
    if (viewState !== "MID") {
      setViewState("MID");
    }
  };

  // Page layout and components
  return (
    <>
      <Header session={JSON.parse(props.AbdullahSession) as Session} />
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
            <FlowImage small image={JSON.parse(props.projects)?.image} type={JSON.parse(props.projects)?.imagetype} />
            <h1 className="text-3xl font-semibold text-gray-900 mt-auto truncate ">
              {JSON.parse(props.projects)?.title}
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
                {JSON.parse(props.projects)?.description}
              </h1>
            </div>
            <div className="w-full h-fit border-t">
              <BreifEditor blocks={JSON.parse(props.projects)?.content ? JSON.parse(props.projects)?.content : []} />
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
          } h-[calc(100vh-50px)] bg-blue-500 relative`}
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
