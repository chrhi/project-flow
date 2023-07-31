import {  type NextPage } from "next";
import { useState } from "react";
import type { Project } from "@prisma/client";
import ContactFeed from "~/components/chat/contact-feed";
import ChatFlowFeed from "~/components/chat/messages-flow";
import { Header } from "~/components/header/Header";
import { api } from "~/utils/api";
import type { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { getProjectMetaData } from "~/lib/MetaData";





// Page component
const Page: NextPage = () => {
    const [project, setProject] = useState<Project>({} as Project);
    const session = useSession()
    const {isLoading} = api.newProjectRouter.getProjectById.useQuery({id : getProjectMetaData()},{
        onSuccess : (data) => {
          if(!data) return
          setProject(data)
        }
      })
 
  return (
    <> 
    <Header />
      <main className=" w-full h-[calc(100vh-50px)] bg-white overflow-hidden ">
        <ContactFeed  isOnProjectChatPage/>
        <ChatFlowFeed
            isOnProjectChatPage
            session={session.data as Session}
            project={project}
          />
      </main>
    </>
  );
};

export default Page;

