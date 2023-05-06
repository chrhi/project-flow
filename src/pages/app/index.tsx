import { type NextPage } from "next";
import { Chain } from "~/components/common/Chain";
import { Header } from "~/components/common/Header";
import { useState , useEffect } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { userReducer } from "~/store/userReducer";
import setup from "~/assets/Starting a business project-rafiki.png"
import planning from "~/assets/Office management-rafiki.png"
import executing from "~/assets/horse jumping-cuate.png"
import controlling from "~/assets/Control Panel-rafiki.png"
import closing from "~/assets/Coronavirus Border Closure-amico.png"
import { getUserMetadata, setoreProjectMetaData, storeProjectCurrentPhaseAbdullah ,getProjectCurrentPhaseAbdullah } from "~/lib/MetaData";
import {  PAGES } from '~/store/app-reducer/headerReducer'
import { IsPhaseLocked } from "~/utils/access/IsPhaseLocked";

const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(true)

  

  const set_isLoading = loading_Reducer(state => state.set_isLoadingFully)
  const {refetch , isFetching} = api.ProjectRouter.getProjectStatus.useQuery({user_id : getUserMetadata() } , {
    onSuccess : (data) => {
        if(data.project_id){
          setHasProjectStart(true)
          setoreProjectMetaData({project_id : data.project_id as string} )
          storeProjectCurrentPhaseAbdullah(data.current_phase as string)
          return
        }
        setHasProjectStart(false)
        set_isLoading({is_loading: false , fullWight:false})
      },
      onError : () => {
        toast("failed to get project status",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         set_isLoading({is_loading: false , fullWight:false})
      },

})

useEffect(() => {
  if(isFetching){
    set_isLoading({is_loading: true , fullWight:true})
  }else{
    set_isLoading({is_loading: false , fullWight:false})
  }
} , [isFetching , set_isLoading])

  return (
    <>
      
      <main className=" min-h-screen w-full bg-gray-50 ">
           <Header />
          {
            
            hasProjectStart ?
            <div className=" mx-auto p-4 ">
            <h1 className="text-gray-800 font-bold text-2xl text-start ml-4 mt-8  " >Contrôlez et configurez votre projet</h1>
            <p className="text-gray-300 text-md ml-4 mt-4 ">surveillez régulièrement la progression du projet, <br /> soyez prêt à apporter les ajustements nécessaires et communiquez efficacement avec <br /> les parties prenantes pour garantir le succès du projet </p>
            <div className="w-[90%]  mx-auto gap-x-8  rounded-lg min-h-[400px] h-fit flex justify-center items-center my-2">
              <Chain
               PAGE ={PAGES.STARTUP}
               available = {IsPhaseLocked({current_phase : getProjectCurrentPhaseAbdullah() , thisPhaseIndex : 0})}
               image={setup}
               path={`/app/startup`}
               name="Pre-démarrage" 
               selected />
             
           
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
            <ProjectStarter refetch = {refetch} />
          }
     
      </main>
    </>
  );
};

export default Page;