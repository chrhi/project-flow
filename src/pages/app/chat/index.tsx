import { type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import { useRouter } from 'next/router'
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";




//@ts-ignore
const Page: NextPage = () => {

  const router = useRouter()

  



  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
   
       
        <ContactFeed projects={[]} />
        <ChatFeed />
       
      </main>
    </>
  );
};

export default Page;

