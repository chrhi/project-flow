import { type InferGetServerSidePropsType, type GetServerSideProps, type NextPage } from "next";
import { useState } from "react";
import ChatFeed from "~/components/chat/ChatFeed";
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { api } from "~/utils/api";
import type { Project } from "@prisma/client";







// Page component
const Page: NextPage = () => {

 
  return (
    <> 
    <Header />
      <main className=" w-full h-[calc(100vh-50px)] bg-white overflow-hidden ">

        <ContactFeed 
          />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;

