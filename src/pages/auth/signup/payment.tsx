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
   <div>
   <p>this is the payment page</p>
   <p>this is the payment page</p>
   <p>this is the payment page</p>
   </div>
      </main>
    </>
  );
};

export default Page;