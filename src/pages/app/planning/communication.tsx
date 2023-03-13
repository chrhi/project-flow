import { type NextPage } from "next";
import Head from "next/head";

import { SideNav } from "~/components/common/SideNav";
import { Header } from "~/components/common/Header";
import { PageHeadComunication } from "~/components/planning/comunication/PageHeadComunication"; 
import { List } from "~/components/planning/comunication/List";




const Page: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Sonatrach</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </Head>
      <Header />
      <div className="   w-full  ">
     <SideNav />
     <main className="custopn-page-height-width bg-gray-100 h-full flex   ml-[7rem] ">
        <div className="w-[50%] p-4 h-full">
        <PageHeadComunication />
        <List />
        </div>
      <div className="bg-white w-[50%] flex flex-col p-4 h-full">
        <div className="w-full h-[50px] flex items-center ">
          <h2 className="text-2xl font-bold">defied all the risks</h2>
        </div>
       <div className="w-full h-fit min-h-[80vh] flex gap-4 my-4 flex-wrap  ">
        {[1,2,3,4].map((number, index) => (
          <div key={number + index} className="w-[70px] bg-green-400 h-[70px] flex flex-col items-center justify-center rounded-lg shadow-lg " >
            <p className="text-white ">Risk </p>
            <p className="text-white font-bold ">50%</p>
          </div>
        ))}
       </div>
      </div>
     </main>
      </div>
    </>
  );
};

export default Page;