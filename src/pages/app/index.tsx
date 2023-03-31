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
import { getUserMetadata, setoreProjectMetaData } from "~/lib/MetaData";
import { AbdullahEffectButton } from "~/components/ui/buildingBlocks/AbdullahEffectButton";
const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(false)

  const set_isLoading = loading_Reducer(state => state.set_isLoadingFully)
  const {refetch , isFetching} = api.ProjectRouter.getProjectStatus.useQuery({user_id : getUserMetadata() } , {
    onSuccess : (data) => {
        if(data.project_id){
          setHasProjectStart(true)
          setoreProjectMetaData({project_id : data.project_id as string} )
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
            <p className="text-gray-300 text-md ml-4 mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta, fuga nostrum </p>
            <div className="w-[90%]  mx-auto gap-x-8  rounded-lg min-h-[400px] h-fit flex justify-center items-center my-2">
              <Chain image={setup} path={`/app/startup`} name="Démarrage" selected />
             
           
              <Chain  image={planning} path={`/app/planning`} name="Planification" />
         

           
              <Chain  image={executing} path={`/app/executing`} name="Exécution" />
           
              <Chain  image={controlling} path={`/app/controlling`} name="Contrôler" />
        
            
              <Chain  image={closing} path={`/app/close`} name="fermer" />
            <AbdullahEffectButton>
              click here to see is 
            </AbdullahEffectButton>
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