import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";

import { FirstForm } from "~/components/forms/startup/FirstForm";
import { Sidebar } from "~/components/ui/Sidebar";


const Page: NextPage = () => {

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
       <Sidebar />
      <FirstForm />
      </main>
    </>
  );
};

export default Page;