import { type NextPage } from "next";
import { Header } from "~/components/header/Header";


const projects : Project[] =[
  {avatar : "" , description : "" , id : "" , tag : "" , title :""}
] 


const Page: NextPage = () => {

  return (
    <> 
    <Header />
      <main className=" w-full custom-hieght-navbar  ">
      <h1>this section is not implemented yet</h1>
      </main>
    </>
  );
};

export default Page;