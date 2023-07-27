import { type InferGetServerSidePropsType, type GetServerSideProps, type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import { useRouter } from 'next/router'
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";
import { getProjects } from "~/server/ssr/get-projects";
import { getOrgMembers } from "~/server/ssr/get-org-memebers";



export const getServerSideProps: GetServerSideProps<{
  projects: string,
  orgMembers : string,
}> = async (context) => {

  const orgId = context?.req?.cookies['abdullah-org-id']

  const projects = await getProjects()
  const orgMembers = await getOrgMembers({id : orgId || "" })
  return {
      props: {
          projects : JSON.stringify(projects),
          orgMembers : JSON.stringify(orgMembers),
         
      }
  }
}



const Page : NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

  const router = useRouter()

  



  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
   
       
        <ContactFeed 
           memberOrg={props?.orgMembers ? JSON.parse(props?.orgMembers) as   MemberOrg[] : []}
           projects={ props?.projects ? JSON.parse(props?.projects) : []} />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;

