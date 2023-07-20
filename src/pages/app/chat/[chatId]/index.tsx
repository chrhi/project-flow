import { type NextPage } from "next";
import ContactFeed from "~/components/chat/contact-feed";
import { Header } from "~/components/header/Header";




const Page: NextPage = () => {

  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
        <ContactFeed />
         {/* {messages } */}
      </main>
    </>
  );
};

export default Page;