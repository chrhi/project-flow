import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";

import { SecondForm } from "~/components/forms/startup/SecondForm";
import { Sidebar } from "~/components/ui/Sidebar";


const Page: NextPage = () => {

  return (
    <>
     
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <Sidebar />
      <SecondForm />
      </main>
    </>
  );
};

export default Page;