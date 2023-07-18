import { type NextPage } from "next";
import { Header } from "~/components/header/Header";


const projects : Project[] =[
  {avatar : "" , description : "" , id : "" , tag : "" , title :""}
] 


const Page: NextPage = () => {

  return (
    <> 
    <Header />
      <main className=" w-full bg-white  custom-hieght-navbar  ">
      <p>this is the payment page</p>
      </main>
    </>
  );
};

export default Page;