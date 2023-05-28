import { type NextPage } from "next";

import { useState  } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";
import { api } from "~/utils/api";
import AppLayout from "~/components/layout/AppLayout";
import HomePageLoader from "~/components/common/placeholders-skelatones/home-page";
import HomePage from "~/components/dashboard/home-page";
import { getUserMetadata, setoreProjectMetaData, storeProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
import { toast } from "react-hot-toast";
import { ProjectReduer } from "~/store/project-reducer";

const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(false)

  const setProject = ProjectReduer(state => state.set_project)

    const {isLoading , refetch} = api.projectRouter.get_project.useQuery({user_id : getUserMetadata() || ""} , {      
           retryOnMount : false ,
           onSuccess(data) {
             if (data?.id &&  data?.currentPhase){
              setHasProjectStart(true)
              setoreProjectMetaData({project_id  : data.id})
              storeProjectCurrentPhaseAbdullah(data?.currentPhase)
              setProject({
                currentPhase : data.currentPhase , 
                projectDescription : "", 
                projectEndsAt : data.endsAt || new Date() , 
                projectStartAt : data.startAt  || new Date() , 
                projectId : data.id , 
                projectTitle : data.title || ""
              })
             }
           },
           onError(){
            toast.error("quelque chose s'est mal passé")
           }
    })



  return (
    <>
     <AppLayout>
      {
        isLoading ? 
        <HomePageLoader /> :    
         hasProjectStart ?
         <HomePage />
         :
         <ProjectStarter refetch={refetch}  /> 
        }   
      </AppLayout>
    </>
  );

};

export default Page;