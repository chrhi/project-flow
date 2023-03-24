import { type NextPage } from "next";
import Head from "next/head";
import { Hero } from "~/components/landing/Hero";
import { api } from "~/utils/api";




const Page: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
 console.log(hello?.data)
  return (
    <>
    
      <main className=" min-h-screen bg-white ">
 
      <Hero />
    
    
  
      </main>
    </>
  );
};

export default Page;