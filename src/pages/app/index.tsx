import { type NextPage } from "next";
import { Chain } from "~/components/dashboard/Chain";
import { useState , } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";
import setup from "~/assets/Starting a business project-rafiki.png"
import planning from "~/assets/Office management-rafiki.png"
import executing from "~/assets/horse jumping-cuate.png"
import controlling from "~/assets/Control Panel-rafiki.png"
import closing from "~/assets/Coronavirus Border Closure-amico.png"
import { getUserMetadata, setoreProjectMetaData, storeProjectCurrentPhaseAbdullah ,getProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
import {  PAGES } from '~/store/app-reducer/headerReducer'
import { IsPhaseLocked } from "~/utils/access/IsPhaseLocked";
import BedgetStatus from "~/components/dashboard/BedgetStatus";
import Reminder from "~/components/dashboard/Reminder/ReminderPanel";
import Timer from "~/components/dashboard/Timer";
import AppLayout from "~/components/layout/AppLayout";

const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(false)

  



  return (
    <>
     <AppLayout>
    
          {
            
            hasProjectStart ?
            <div className=" mx-auto w-[85%]   p-4 ">
            <h1 className="text-gray-800  text-3xl text-start  my-4  " >Hi 👋 this is the dashboard and your personal space</h1>
            {/* this is the first row */}
            <div className="w-full  mx-auto gap-x-8  rounded-lg  h-[200px] flex justify-center items-center my-4">
             <Reminder />
            
             
              <Timer />
            </div>
            {/* this is the second row */}
            <div className="w-full  mx-auto gap-x-8  rounded-lg  h-[400px] flex justify-center items-center my-4">
              <BedgetStatus />
              <div className="w-[40%]  bg-white rounded-lg h-[400px]">
              <h1>this is the second section</h1>
              </div>
            </div>
            {/* this is the thierd row */}
            <div className="my-4 w-full h-[70px] flex justify-start items-center ">
            <h1 className="text-gray-800  text-2xl text-start my-4  " >Contrôlez et configurez votre projet</h1>
            </div>
            <div className="w-full   mx-auto gap-x-8  rounded-lg min-h-[300px] h-fit flex justify-center items-center my-4">
              <Chain
               PAGE ={PAGES.STARTUP}
               available = {IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : 0})}
               image={setup}
               path={`/app/startup`}
               name="Pre-démarrage" 
                />
             
           
              <Chain
                available = {IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : 1})}
                PAGE ={PAGES.PLANNING}
                 
                image={planning}
                path={`/app/planning`} 
                name="Planification" 
              />
         

           
              <Chain 
                available = {IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : 2})}
                PAGE ={PAGES.EXECUTING}
                  
                image={executing} 
                path={`/app/executing`}
                name="Exécution" 
               />
           
              <Chain 
                 available = {IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : 3})}
                 PAGE ={PAGES.CONTROLLING}
                 image={controlling} 
                 path={`/app/controlling`}
                 name="Contrôler" />
        
            
              <Chain 
                 available = {IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : 4})} 
                PAGE ={PAGES.CLOSING}
                image={closing} 
                path={`/app/close`} 
                name="Clôturer" />
          
            </div>
          </div>
             :
             <ProjectStarter  />
           
          }
     
      
      </AppLayout>
    </>
  );

};

export default Page;