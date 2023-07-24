import { Project } from "@prisma/client";
import { type NextPage } from "next";
import { useState } from "react";
import Board from "~/components/board/flow-board/board";
import Boardhead from "~/components/board/flow-board/board-head/board-head";
import { Header } from "~/components/header/Header";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";




const Page: NextPage = () => {

  const [data , setData] = useState<Project[]>([] )

  const [isError , setIsError] = useState<boolean>(false)

  api.newProjectRouter.getProjectOfOrg.useQuery({org_id : getOrganizationId()}, {
    onSuccess : (data) => {
      setData(data)
    },
    onError : () => {
      setIsError(true)
    }
  })

  return (
    <> 
    <Header />
      <main className=" w-full min-h-[calc(100vh-50px)] h-fit ">
        {isError ? 
        <h1>sorry an error accoured</h1>  
        :
       <>
        <Boardhead
           setData={setData}
           data ={data}/>
        <Board projects={data} />
       </>
       }
       
      </main>
    </>
  );
};

export default Page;