import { addDays } from "date-fns";
import { type NextPage } from "next";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Header } from "~/components/header/Header";
import { RowGridText } from "~/components/typography/RowGridText";
import Select from 'react-select';
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { Input } from "~/components/used/Input";
import { TextField } from "~/components/used/TextField";
import ProjectAvartPicker from "~/components/used/project-avatar-picker";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";




const Page: NextPage = () => {

    const router = useRouter()

    const [isCancelLoading  , setIsCancelLoading ] = useState<boolean>(false)

    const [isCreateProjectLoading  , setIsCreateProjectLoading ] = useState<boolean>(false)

    const [MyTeam  , setMyTeam ] = useState<{label: string  , value : string}[]>([])

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 20),
    })

    api.userRouter.get_org_members.useQuery({id : getOrganizationId()},{
      onSuccess : (data) => {
        const prepare = data.map(item => {
          return {
            label : item.name , 
            value : item.id
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
      <main className=" w-full h-full  ">
        <div className=" w-full mt-4  mx-auto h-[60px] flex flex-col p-4 pl-8 justify-center items-start gap-y-3">
            <h1 className="text-xl font-semibold text-gray-900">Create new Project</h1>
            <span className="text-lg  text-gray-500" >Let's get started</span>
        </div>
         <FormContainer 
         stopScroll
         className="max-w-4xl mx-auto ">
          
         <Form >
         <div className="bg-white dark:bg-neutral-900  rounded-lg px-4 py-5 sm:p-6 ">
            <div className="grid grid-cols-12  gap-6">

              <RowGridText
                small
                text="BASIC INFO"
                text2="about your project"
              />
            
              <Input  
                     className="!col-span-6  w-full"
                     value={inputs.title}
                     onChange={(e) => setInputs({...inputs , title : e.target.value})}
                     isLoading={false}
                     lable="title  "
                     isRequired
              />
              
                    <ProjectAvartPicker 
                       
                        setProjectImage={setProjectImage}
                        isRequired
                        projectImage = {projectImage}
                    />
           
              <TextField
                     isRequired
                     className="!col-span-12 !xl:col-span-12 w-full"
                     value={inputs.description}
                     onChange={(e) => setInputs({...inputs , description : e.target.value})}
                     isLoading={false}
                     lable="Breif description about the project "
              />
               <div className='col-span-12 '>
               <label  className="block text-sm font-medium leading-6 text-gray-900">
                  Add team members to this project
                </label>
                <Select
                    onChange={
                      (e) => setInputs({...inputs , teamMembers : e.map(item => item.value) })
                    }  
                    name="my team"
                    options={MyTeam}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    isMulti
                  
                 />
               </div>
               <TextField
                     className="!col-span-12 !xl:col-span-12 w-full"
                     value={inputs.messageSendToTeamMembers}
                     onChange={(e) => setInputs({...inputs , messageSendToTeamMembers : e.target.value})}
                     isLoading={false}
                     lable="message is going to send to them"
              />
              <div className="bg-white dark:bg-neutral-900  py-3 col-span-6 lg:col-span-12 flex items-center justify-start gap-x-4 text-right ">
    
    
      
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

  </div>
 
   </Form>
</FormContainer>
      </main>
    </>
  );
};

export default Page;