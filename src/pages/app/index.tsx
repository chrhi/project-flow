import { type NextPage } from "next";
import { Chain } from "~/components/common/Chain";
import { Header } from "~/components/common/Header";
import { useState , useEffect } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { userReducer } from "~/store/userReducer";


const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(false)
  const user_current_id = userReducer(state => state.id)
  const set_isLoading = loading_Reducer(state => state.set_isLoading)
  const {refetch , isFetching} = api.ProjectRouter.getProjectStatus.useQuery({user_id : user_current_id} , {
    onSuccess : (data) => {
        if(data.project_id){
          setHasProjectStart(true)
          return
        }
        setHasProjectStart(false)
      },
      onError : () => {
        toast("failed to get project status",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
      },

})

useEffect(() => {
  if(isFetching){
    set_isLoading(isFetching)
  }else{
    set_isLoading(isFetching)
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
            <div className="w-[80%] xl:w-[1060] mx-auto gap-x-8  rounded-lg min-h-[400px] h-fit flex justify-center items-center my-2">
              <Chain path={`/app/startup`} name="Démarrage" selected >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
               </svg>
              </Chain>
              <Chain path={`/app/planning`} name="Planification" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path  className="text-xl" strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

              </Chain>
              <Chain path={`/app/executing`} name="Exécution" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

              </Chain>
              <Chain path={`/app/controlling`} name="Contrôler" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

              </Chain>
              <Chain path={`/app/close`} name="fermer" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>

              </Chain>
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