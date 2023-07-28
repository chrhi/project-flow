import type {  Project } from "@prisma/client";
import type  { GetServerSideProps, InferGetServerSidePropsType , NextPage } from "next";
import { useState } from "react";
import Board from "~/components/board/flow-board/board";
import Boardhead from "~/components/board/flow-board/board-head/board-head";
import { Header } from "~/components/header/Header";
import { getProjects } from "~/server/ssr/get-projects";
import { api } from "~/utils/api";


//Prisma.PromiseReturnType<typeof getProjects>

export const getServerSideProps: GetServerSideProps<{
  projects: string,

}> = async (context) => {
 
  const org_id = context?.req?.cookies["abdullah-org-id"];

  const projects = await getProjects({org_id : org_id || ""})

 

 
  return {
      props: {
          projects : JSON.stringify(projects),
           
      }
  }
}



const Page : NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

  const [data , setData] = useState<Project[]>(JSON.parse(props.projects) as Project[])

  const [isError , setIsError] = useState<boolean>(false)

  

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
           
        <Board projects={JSON.parse(props.projects) as Project[]} />
       </>
       }
       
      </main>
    </>
  );
};

export default Page;