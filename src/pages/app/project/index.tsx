import { type NextPage } from "next";
import Board from "~/components/board/flow-board/board";
import { Header } from "~/components/header/Header";


const projects : Project[] =[
  {avatar : "" , description : "" , id : "" , tag : "" , title :""}
] 


const Page: NextPage = () => {



  

  return (
    <>
    
    <Header />
      <main className=" w-full custom-hieght-navbar bg-white flex justify-center pl-16  items-center  ">
       <Board projects={projects} />

      </main>
    </>
  );
};

export default Page;