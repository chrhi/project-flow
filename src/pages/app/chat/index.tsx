import { type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import { useRouter } from 'next/router'
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";
import { useEffect } from "react";
import { prisma } from "~/lib/prisma";
import { AlgeriaformatDate } from "~/utils/formate/AlgeriaFormate";



//@ts-ignore
const Page: NextPage = ({ data }) => {

  const router = useRouter()

  

  useEffect(() => {
    console.log(data)
  },[data])



  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
   
       
        <ContactFeed projects={data} />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;

// This gets called on every request
//@ts-ignore
export async function getServerSideProps(context) {
  console.log("we are in the get server side props")
  const org_id = context.req.cookies['abdullah-org-id']
  if(!org_id) throw new Error ("the org cookie is missing")
  

  const projectsButNotValideYet = await prisma.project.findMany({
    where :{
      OrganizationId : org_id
    }
  })

  const data = projectsButNotValideYet.map(item => {
    return {
      ...item , 
      createdAt : AlgeriaformatDate(item.createdAt)
    }
  })

 
  return { props: { 
    data 
   } }
}