import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { FlowImage } from "~/components/used/flow-image";
import { api } from "~/utils/api";
import { getProjectMetaData } from "~/lib/MetaData";
import type { Project } from "@prisma/client";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import PhasesSideBarSimpleProject from "~/components/sideBars/simple-project-sidebar";
import ChatFlowFeed from "~/components/chat/messages-flow";
import BreifLoading from "~/components/laoding-state/BreifLoading";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import ProjectAvartPicker from "~/components/used/project-avatar-picker";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  //fetch the data about the project
  const [viewState, setViewState] = useState<string>("MID");
  const [project, setProject] = useState<Project>({} as Project);

  const router = useRouter()

  const [isSubmitLoading , setIsSubmitLoading] = useState<boolean>(false)

  const [isCancelLoading , setIsCancelLoading ] = useState<boolean>(false)

  const handleSubmit = () => {
    setIsSubmitLoading(true)
    mutation.mutate({
        description : inputs.description , 
        title : inputs.title , 
        image : projectImage.image , 
        imagetype : projectImage.type , 
        project_id : getProjectMetaData(),
        type : "ah mana3raf"
    })
  }

  const handleCancel = async () => {

    setIsCancelLoading(true)
    await router.push("/app/simple-project/brief")
    setIsCancelLoading(false)
  }

  const [projectImage , setProjectImage ] = useState({
    image : "",
    type : "COLOR"
  })

  const [inputs , setInputs ] = useState({
    title : "",
    description : ""
  })


  const mutation = api.newProjectRouter.update_project.useMutation({
    onSuccess : async  () => {   
        await router.push("/app/simple-project/brief")
        setIsSubmitLoading(false)
    },
    onError : () => {
        // an error 
    }
  })

  const { isLoading } = api.newProjectRouter.getProjectById.useQuery(
    { id: getProjectMetaData() },
    {
      onSuccess: (data) => {
        if (!data) return;
        setProject(data);
        setInputs({
            title : data.title || "",
            description : data.description || ""
        })
        setProjectImage({
            image : data.image , 
            type : data.imagetype
        })
      },
      onError: () => {},
    }
  );

  const changeViewState = (point: string) => {
    if (viewState === "MID") {
      setViewState(point);
      return;
    }
    if (viewState !== "MID") {
      setViewState("MID");
    }
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
          {isLoading ? (
            <BreifLoading />
          ) : (
            <>
              <div className="w-full p-4 gap-x-4 h-[60px] overflow-hidden flex items-center justify-start">
                <FlowImage small image={project.image} type={project.imagetype} />
                <h1 className="text-3xl font-semibold text-gray-900 mt-auto truncate ">
                  {project.title}
                </h1>
              </div>
              {/* here it is the brief header */}
              <div className="w-[90%] mx-auto h-[calc(100%-60px)] scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded overflow-y-auto bg-white rounded-lg p-4 shadow-md">
              <div className="w-full my-4 flex flex-col gap-y-2 ">
               <h1>Edit Project </h1>
              </div>
              <div className="w-full my-4 flex flex-col gap-y-2 ">
                <ProjectAvartPicker 
                        setProjectImage={setProjectImage}
                        projectImage = {projectImage}  
                />
              </div>
                <div className="w-full my-4 flex flex-col gap-y-2 ">
                  <Label className="mb-1">Title</Label>
                  <Input  value={inputs.title} onChange={(e) => setInputs({...inputs , title : e.target.value})} />
                </div>
                <div className="w-full flex my-4 flex-col gap-y-2 ">
                  <Label className="mb-1">Description</Label>
                  <Textarea value={inputs.description} onChange={(e) => setInputs({...inputs , description : e.target.value})}   />
                </div>
                <div className="w-full flex my-4 flex-col gap-y-4 ">
                <AbdullahButton 
                    isLoading={isSubmitLoading}
                   onClick={handleSubmit}
                   className={cn(buttonVariants({variant :"primary" , size :"lg"}))}>Update Project</AbdullahButton>
                <AbdullahButton 
                    isLoading={isCancelLoading}
                   onClick={handleCancel}
                   className={cn(buttonVariants({variant :"secondary" , size :"lg"}) , "flex justify-center ")}>cancel</AbdullahButton>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={`${
            viewState === "MID"
              ? "w-[50%]"
              : viewState === "CHAT"
              ? "w-[calc(100%-70px)]"
              : "w-[0%]"
          } h-[calc(100vh-50px)] bg-blue-500 relative`}
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
          <ChatFlowFeed />
        </div>
      </main>
    </>
  );
};

export default Page;
