import { type NextPage } from "next";

import { useState  } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";

import AppLayout from "~/components/layout/AppLayout";
import HomePageLoader from "~/components/common/placeholders-skelatones/home-page";
import HomePage from "~/components/dashboard/home-page";

const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(true)

  



  return (
    <>
     <AppLayout>
    
          {
            
            hasProjectStart ?
            <HomePage />
             :
            //  <ProjectStarter  />
            <HomePageLoader />
           
          }
     
      
      </AppLayout>
    </>
  );

};

export default Page;