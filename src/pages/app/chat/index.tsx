import { type NextPage } from "next";
import ChatHeader from "~/components/chat/ChatHeader";
import { Header } from "~/components/header/Header";


const projects : Project[] =[
  {avatar : "" , description : "" , id : "" , tag : "" , title :""}
] 


const Page: NextPage = () => {

  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
        <ChatHeader  />

         {/* contact feed */}
         {/* {messages } */}
      </main>
    </>
  );
};

export default Page;