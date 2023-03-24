import { type NextPage } from "next";
import Head from "next/head";
import AddStakeHolder from "~/components/common/AddStakeHolder";
import { Row } from "~/components/common/Row";
import { Sidebar } from "~/components/ui/Sidebar";
import { TableHeader } from "~/components/ui/TableHeader";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import { Header } from "~/components/common/Header";
import { Paper } from "~/components/ui/Paper";


type apiType = {
  name : string , 
  title : string , 
  role : string ,
  id : string 
}

const Page: NextPage = () => {

  const [expectedData , setExpectedData] = useState<apiType[] >([])

  const {refetch , isFetching } = api.stakeholder.getStakeholders.useQuery(
    undefined , {
      onSuccess(data) {
        setExpectedData(data.data as apiType[]  )
        set_isLoading(false)
      },
      onError() {
        toast("some things wents wrong ",{
          className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
          hideProgressBar: true,
         })
         set_isLoading(false)
      },
    }
  )
  const set_isLoading = loading_Reducer(state => state.set_isLoading)

  useEffect(()=>{
    if(isFetching){
      set_isLoading(true)
    }  
    },[set_isLoading ,isFetching])

  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <Sidebar />
       <div className="ml-[16rem] flex flex-col items-center  custom-width h-fit min-h-screen">
{/*       
       all the contenet goes in here */}
      
    <div className='w-full h-[50px] flex items-center justify-between  p-8 my-4 '>
         <div>
              <h1 className='font-bold text-gray-900 text-2xl '>👉startup/stakeholders </h1>
        </div>
              <AddStakeHolder refetch={refetch}/>
    </div>
       <Paper>
    <TableHeader />
    {/* <Row /> */}
   {expectedData.length &&
   expectedData.length > 0  && 
  
   expectedData.map((item) => <Row  refetch={refetch} key={item?.name } name={item?.name} title={item?.title} role={item?.role} id={item?.id} /> )}
        {/* this is the end of the page */}
        </Paper>
       </div>
     
      </main>
    </>
  );
};

export default Page;