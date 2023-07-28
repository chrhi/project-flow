import { type InferGetServerSidePropsType, type GetServerSideProps, type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";
import { getProjects } from "~/server/ssr/get-projects";
import { getOrgMembers } from "~/server/ssr/get-org-memebers";




export const getServerSideProps: GetServerSideProps<{
  projects: string,


}> = async (context) => {

  const orgId = context?.req?.cookies['abdullah-org-id']
  const projects = await getProjects({org_id : orgId || ""})

  const orgMembers = await getOrgMembers({id : orgId || "" })


  return {
      props: {
          projects : JSON.stringify(projects),
          // orgMembers : JSON.stringify(orgMembers),
      
      }
  }
}



const Page : NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

  return (
    <> 
    <Header />
      <main className=" w-full h-[calc(100vh-50px)] bg-white overflow-hidden ">

        <ContactFeed 
           memberOrg={[] as   MemberOrg[]}
           projects={ props?.projects ? JSON.parse(props?.projects) : []} />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;

