import { type NextPage } from "next";

import { useState  } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";
import { api } from "~/utils/api";
import AppLayout from "~/components/layout/AppLayout";
import HomePageLoader from "~/components/common/placeholders-skelatones/home-page";
import HomePage from "~/components/dashboard/home-page";
import { getUserMetadata, setoreProjectMetaData } from "~/lib/MetaData";
import { toast } from "react-hot-toast";

const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(false)

    const {isLoading , refetch} = api.projectRouter.get_project.useQuery({user_id : getUserMetadata() || ""} , {      
           retryOnMount : false ,
           onSuccess(data) {
             if (data?.id){
              setHasProjectStart(true)
              setoreProjectMetaData({project_id  : data.id})
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