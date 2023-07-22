import { type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import { useRouter } from 'next/router'
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";
import { useEffect } from "react";




const Page: NextPage = () => {

  const router = useRouter()

  const {chatId} = router.query



  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
   
       
        <ContactFeed />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;