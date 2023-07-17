import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { AbdullahButton } from "~/components/used/AbdullahButton";


const projects : Project[] =[
  {avatar : "" , description : "" , id : "" , tag : "" , title :""}
] 


const Page: NextPage = () => {

  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
     <h1>Please continue the sign up process</h1>
     <AbdullahButton>continue the sign up process</AbdullahButton>
      </main>
    </>
  );
};

export default Page;