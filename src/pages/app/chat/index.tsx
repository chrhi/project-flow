import { type NextPage } from "next";
import ChatFeed from "~/components/chat/ChatFeed";
import ChatHeader from "~/components/chat/ChatHeader";
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";


const projects : Project[] =[
  {avatar : "" , description : "" , id : "" , tag : "" , title :""}
] 


const Page: NextPage = () => {

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