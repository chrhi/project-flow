/* eslint-disable @typescript-eslint/no-unsafe-return */
import dynamic from 'next/dynamic';
import {useState , useEffect} from 'react'
import { api } from "~/utils/api";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { userReducer } from "~/store/userReducer";



const Chart = dynamic(
    
    () => import("react-apexcharts").then((module) => module),
    {
      ssr: false,
    }
  );


export const ProjectStart = () => {
  const set_isLoading = loading_Reducer(state => state.set_isLoading)
  const id = userReducer(state => state.id)
    const [projectStarted , setProjectStarted] = useState<boolean>(false)
    const [currentStage , setCurrentStage] = useState<string>("")

    const {   isFetching , refetch }= api.status.getProjectStatus.useQuery({id } , {

      onSuccess(data) {
        setProjectStarted(data.has_project_started)
        setCurrentStage(data.current_stage)
        set_isLoading(false)
        toast("we get the project status sccuess",{
          className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
          hideProgressBar: true,
         })
      },
      onError() {
        toast("fialed to fetch project status ",{
          className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
          hideProgressBar: true,
         })
         set_isLoading(false)
      },
    })
  
const mutation = api.status.makeProjectStatus.useMutation({
  onSuccess() {
    refetch().then(data => console.log(data)).catch(error => console.log(error))
    toast("your project has been started",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
     set_isLoading(false)
  },
  onError(){
    toast("failed to start the project",{
      className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
      hideProgressBar: true,
     })
     set_isLoading(false)
  },
  
})

const handleClick = () => {
  set_isLoading(true)
  mutation.mutate({id})
  
}
  
useEffect(()=> {
  if(isFetching){
    set_isLoading(true)
  }else{ set_isLoading(false)}
},[ set_isLoading ,  isFetching])



  return (
    <div>
    {
      projectStarted ?
      <div className='w-full h-[120px] flex items-center p-4'>
        <Chart 
options={  {
   chart: {
     id: "basic-bar"
   },
   xaxis: {
     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
   }
 }} 
series={ [{
   name: 'XYZ MOTORS',
   data:[30, 40, 45, 50, 49, 60, 70, 91]
 }]} 
 type="line"
 width="500"
/> 
       </div>
     :
     <div className='w-full h-[300px] flex flex-col justify-center gap-y-4 my-4 bg-white p-8'>
     <div className='w-full flex flex-col justify-center gap-y-4  my-4 h-[50px]'>
     <h1  className='text-gray-900 font-bold text-3xl text-start ' >démarrer votre projet </h1>
     <p className='text-lg text-gray-600 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima</p>
     </div>
      <button
      className="rounded-lg w-[200px] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-sky-500 to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleClick}
      >
          démarrer mon projet
      </button>
      here is the project status {currentStage}
  </div>
  
    }
    </div>

  )
}

{/* <Chart 
options={  {
   chart: {
     id: "basic-bar"
   },
   xaxis: {
     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
   }
 }} 
series={ [{
   name: 'XYZ MOTORS',
   data:[30, 40, 45, 50, 49, 60, 70, 91]
 }]} 
 type="line"
 width="500"
/> */}