import { type InferGetServerSidePropsType, type GetServerSideProps, type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";
import { getProjects } from "~/server/ssr/get-projects";
import { getOrgMembers } from "~/server/ssr/get-org-memebers";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/lib/auth";
import type { Session } from "next-auth";



export const getServerSideProps: GetServerSideProps<{
  projects: string,
  orgMembers : string,
  AbdullahSession: string;
}> = async (context) => {

  const orgId = context?.req?.cookies['abdullah-org-id']

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


  const projects = await getProjects({org_id : orgId || ""})

  // Fetch the project details and initial messages using the project ID stored in cookies
   const AbdullahSession = { ...session };

 
  const orgMembers = await getOrgMembers({id : orgId || "" })

  //remove me from the contact
  const MyOrgMembers = orgMembers.filter(item => item.id !== session.user.id)
  return {
      props: {
          projects : JSON.stringify(projects),
          orgMembers : JSON.stringify(MyOrgMembers),
          AbdullahSession: JSON.stringify(AbdullahSession),     
      }
  }
}



const Page : NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

  return (
    <> 
    <Header session={JSON.parse(props.AbdullahSession) as Session} />
      <main className=" w-full h-[calc(100vh-50px)] bg-white overflow-hidden ">

        <ContactFeed 
           memberOrg={props?.orgMembers ? JSON.parse(props?.orgMembers) as   MemberOrg[] : []}
           projects={ props?.projects ? JSON.parse(props?.projects) : []} />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;

