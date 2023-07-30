import { addDays } from "date-fns";
import type {   NextPage } from "next";
import { useState } from "react";
import { projectTags } from "~/static/project-tags";
import { Header } from "~/components/header/Header";
import Select from 'react-select';
import ProjectAvartPicker from "~/components/used/project-avatar-picker";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { Checkbox } from "~/components/ui/checkbox"

import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import {
  Select as ABDULLAHselect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import makeAnimated from 'react-select/animated';
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"


const animatedComponents = makeAnimated();

// Page component
const Page: NextPage = ()=> {


    const router = useRouter()

    const [isCancelLoading  , setIsCancelLoading ] = useState<boolean>(false)

    const [isCreateProjectLoading  , setIsCreateProjectLoading ] = useState<boolean>(false)

    const [MyTeam  , setMyTeam ] = useState<{label: string  , value : string}[]>([])

    const [date, setDate] = useState<Date>()

    // will have the image selected for the project
    const [selectedFile, setSelectedFile] = useState<File | null | undefined>(null);


    api.userRouter.get_org_members.useQuery({id : getOrganizationId()},{
      onSuccess : (data) => {
        const prepare = data.map(item => {
          return {
            label : item?.name || item?.email, 
            value : item?.user
          }
        })
        setMyTeam(prepare)
      },
      onError : () => {
        toast.error("some thing went wrong")
      }
    })

    const mutation = api.newProjectRouter.create_project.useMutation({
      onSuccess :async (data) => {
        await  router.push("/app/project")
        setIsCreateProjectLoading(false)
      },
      onError : () => {
        toast.error("some thing went wrong")
        setIsCreateProjectLoading(false)
      }
    })


    
    const [projectImage , setProjectImage ] = useState({
      image : "",
      type : "COLOR"
    })

    const [inputs , setInputs ] = useState({
      title : "",
      description :"",
      messageSendToTeamMembers : "",
      teamMembers : [""]
    })

    const hanldeCreateProject = () => {

      setIsCreateProjectLoading(true)
      if(!inputs.title || !inputs.description || !inputs.messageSendToTeamMembers ){
        toast.error("all fields are required")
        setIsCreateProjectLoading(false)
        return 
      }

      console.log(inputs.teamMembers)

      mutation.mutate({
        description : inputs.description ,
        organization_id : getOrganizationId(),
        image : projectImage.image ,
        imagetype : projectImage.type , 
        team : inputs.teamMembers , 
        title : inputs.title , 
        type : "SIMPLE",
      })

    }



  return (
    <> 
    <Header />
<main className="w-full h-[calc(100vh-50px)] overflow-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
  <div className="w-full h-[60px] flex flex-col items-start gap-y-2 justify-center my-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-medium text-[#2F3349]">Add new project</h1>
    <p className="text-xl text-gray-500">Let's get started</p>
  </div>
  <div className="w-full p-4 h-[730px] bg-white my-6 mb-8 flex flex-col gap-y-8 rounded-lg max-w-4xl mx-auto">
    <div className="w-full h-[30px] flex items-center justify-start">
      <p className="text-xl text-gray-500">BASIC INFO</p>
    </div>

    <div className="w-full h-[30px] flex justify-between">
      <div className="w-[47%] h-full">
        <Label>Title</Label>
        <Input />
      </div>
      <div className="w-[47%] h-full">
        <ProjectAvartPicker
          setSelectedFile={setSelectedFile}
          setProjectImage={setProjectImage}
          isRequired
          projectImage={projectImage}
        />
      </div>
    </div>
    <div className="w-full h-[70px] mt-8 mb-8 flex flex-col justify-center gap-y-2">
      <Label>Abreif decription about the project</Label>
      <Textarea />
    </div>
    <div className="w-full h-[30px] flex justify-between">
      <div className="w-[47%] flex flex-col justify-center gap-y-2 h-full">
        <Label>Due date</Label>
        <div className="flex items-center space-x-8">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              On going
            </label>
          </div>
        </div>
      </div>
      <div className="w-[47%] flex flex-col justify-center gap-y-2 h-full">
        <Label>Due date</Label>
        <ABDULLAHselect>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
            
              {projectTags.map(item => (
                 <SelectItem value={item.name}>
                 <div className="w-[390px] h-[30px] flex justify-between  items-center px-2">
                   <p>{item.name}</p>
                   <div className={`w-4 h-4  rounded-[50px] `}
                     style={{
                      border : `${item.color} 2px solid`
                     }}
                     />
                 </div>
               </SelectItem>
              ))}
              
            </SelectGroup>
          </SelectContent>
        </ABDULLAHselect>
      </div>
    </div>
    <div className="w-full h-[50px] flex flex-col items-start my-8 justify-center gap-y-4">
        <Label>select the members who you are going to work with </Label>
        <Select
            className="!w-full !focus:border-gray-500"
            closeMenuOnSelect={false}
            components={animatedComponents}
            defaultValue={MyTeam}
            isMulti
            options={MyTeam}
        />
    </div>
    <div className="w-full h-[70px] mt-4 mb-8 flex flex-col justify-center gap-y-2">
      <Label>Message to send to the members</Label>
      <Textarea />
    </div>
    <div className="w-full flex justify-start gap-x-4 items-center h-[60px]">
      
    <AbdullahButton
                   type="submit"
                   className={buttonVariants({size:"sm", variant:'primary'})}
                   isLoading ={isCreateProjectLoading}
                   onClick={hanldeCreateProject}
                >
               create
              </AbdullahButton>

               <AbdullahButton
                   
                    onClick={async () => {
                      setIsCancelLoading(true)
                      await  router.push("/app/project")
                      setIsCancelLoading(false)
                    }}

                   className={buttonVariants({size:"sm", variant:'secondary'})}
                   isLoading ={isCancelLoading}    
                  >
                cancel
               </AbdullahButton>
    </div>
  </div>
</main>
   </>
  );
};

export default Page;