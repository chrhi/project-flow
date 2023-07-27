import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { FlowImage } from "~/components/used/flow-image";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import type  {  Note } from "@prisma/client";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, PlusCircle } from "lucide-react";
import PhasesSideBarSimpleProject from "~/components/sideBars/simple-project-sidebar";
import ChatFlowFeed from "~/components/chat/messages-flow";
import { useRouter } from "next/router";
import NoteElement from "~/components/editor/Note";
import NoteElementLoading from "~/components/editor/DocLaoding";
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



 
  //fetch the data about the project

  const router = useRouter()

  const [isloading , setIsLoading ] = useState<boolean>(false)

  const [viewState , setViewState] = useState<string>("MID")

  const [project , setProject] = useState<Project>({} as Project)

  const [notes , setNotes] = useState<Note[]>([])

  const {isLoading : AreNotesLoading} = api.noteRouter.getProjectNotes.useQuery({projectId :getProjectMetaData() }, {
    onSuccess : (data) => {
      setNotes(data)
    }
  })

  const {isLoading : isProjectsLoading} = api.newProjectRouter.getProjectById.useQuery({id : getProjectMetaData()}, {
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
              {AreNotesLoading || isProjectsLoading ? 
          

                [1,2,3,4,5].map(item => <NoteElementLoading />)
                :
                notes?.map(item => <NoteElement
                  noteId ={item.id}
                  authorEmail={item.authorEmail}
                  authorName={item.authorName}
                  createdAt={item.createdAt}
                  title={item.title}
                  key={item.id}
              />)
              }
 
             

    
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