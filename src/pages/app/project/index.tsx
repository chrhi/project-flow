import type {  Project } from "@prisma/client";
import type  { GetServerSideProps, InferGetServerSidePropsType , NextPage } from "next";
import { useState } from "react";
import Board from "~/components/board/flow-board/board";
import Boardhead from "~/components/board/flow-board/board-head/board-head";
import { Header } from "~/components/header/Header";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { getProjects } from "~/server/ssr/get-projects";
import { api } from "~/utils/api";
import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import { authOptions } from "~/lib/auth";


//Prisma.PromiseReturnType<typeof getProjects>

export const getServerSideProps: GetServerSideProps<{
  projects: string,
  AbdullahSession: string;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  // Redirect if the session is not found
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const org_id = context?.req?.cookies["abdullah-org-id"];

  const projects = await getProjects({org_id : org_id || ""})

  // Fetch the project details and initial messages using the project ID stored in cookies
   const AbdullahSession = { ...session };

 
  return {
      props: {
          projects : JSON.stringify(projects),
          AbdullahSession: JSON.stringify(AbdullahSession),    
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
      <Header session={JSON.parse(props.AbdullahSession) as Session} />
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