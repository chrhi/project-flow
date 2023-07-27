import type { Prisma, Project } from "@prisma/client";
import type  { GetServerSideProps, InferGetServerSidePropsType , NextPage } from "next";
import type { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useState } from "react";
import Board from "~/components/board/flow-board/board";
import Boardhead from "~/components/board/flow-board/board-head/board-head";
import { Header } from "~/components/header/Header";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { getProjects } from "~/server/ssr/get-projects";
import { api } from "~/utils/api";

//Prisma.PromiseReturnType<typeof getProjects>

export const getServerSideProps: GetServerSideProps<{
  projects: string,
  session : Session | null
}> = async (ctx) => {
  const projects = await getProjects()
  const session =  await getSession(ctx)


  return {
      props: {
          projects : JSON.stringify(projects),
          session 
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
    <Header session={props?.session} />
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