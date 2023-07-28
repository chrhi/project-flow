import {  type NextPage } from "next";

import ChatFeed from "~/components/chat/ChatFeed";
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";








// Page component
const Page: NextPage = () => {

 
  return (
    <> 
    <Header />
      <main className=" w-full h-[calc(100vh-50px)] bg-white overflow-hidden ">
        <ContactFeed />
        <ChatFeed />
      </main>
    </>
  );
};

export default Page;

