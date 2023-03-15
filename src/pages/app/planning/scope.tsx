import { type NextPage } from "next";
import Head from "next/head";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupIcon from "@mui/icons-material/Group";
import { TextEditor } from "~/components/planning/scope/TextEditor";
import { SideNav } from "~/components/common/SideNav";
import { Header } from "~/components/common/Header";
import { PageHead } from "~/components/planning/scope/PageHead";
import { useState } from "react";
import { Second } from "~/components/planning/scope/Second";



const Page: NextPage = () => {
  
  const [enabled , setEnabled] = useState<boolean | undefined>(false)

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
     <main className="custopn-page-height-width flex bg-gray-100 h-full  ml-[7rem]">
   <div className="w-[50%]  p-4 ">
   <PageHead enabled ={enabled}  setEnabled={setEnabled}/>
      
      <div className="bg-white h-[70%] flex justify-center p-4 rounded-lg w-[90%] mx-auto ">
      <TextEditor enabled ={enabled}/>
      </div>
   </div>
   <div className="w-[50%] bg-white h-full ">
      <Second />
   </div>
     </main>
      </div>
    </>
  );
};

export default Page;