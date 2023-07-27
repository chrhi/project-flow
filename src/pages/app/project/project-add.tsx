import { addDays } from "date-fns";
import type { GetServerSideProps, InferGetServerSidePropsType,  NextPage } from "next";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Header } from "~/components/header/Header";
import Select from 'react-select';
import ProjectAvartPicker from "~/components/used/project-avatar-picker";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import { authOptions } from "~/lib/auth";


// Server-side data fetching
export const getServerSideProps: GetServerSideProps<{

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
  const AbdullahSession = { ...session };
  // Return the fetched data as props
  return {
    props: {
      AbdullahSession: JSON.stringify(AbdullahSession),
    },
  };
};



// Page component
const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {


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
            label : item?.name , 
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
     <Header session={JSON.parse(props.AbdullahSession) as Session} />
      <main className=" w-full h-full  ">
       
                    <ProjectAvartPicker 
                       
                        setProjectImage={setProjectImage}
                        isRequired
                        projectImage = {projectImage}
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
    </main>
 
    </>
  );
};

export default Page;