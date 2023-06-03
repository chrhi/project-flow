import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import DocsSideBar from "~/components/docsComponents/DocsSideBar";
import { DocumentBuilder } from "~/components/docsComponents/DocumentBuilder";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getProjectMetaData, getUserMetadata } from "~/lib/MetaData";
import { redis } from "~/lib/upstash";
import Head from "~/components/common/Head";
import { ActivityListBuilder } from "~/components/docsComponents/builders/activity-list-builder";

const Page: NextPage = () => {
  
  const [isProject , setIsProject] = useState("loading")
  
 
  return (
    <>
     <Head />
      <Header />
      <main className=" custopn-page-height overflow-y-auto  flex w-full justify-center items-center bg-gray-50 ">
        <DocsSideBar  />
       <div
        className=" ml-[20rem] w-[80%] h-full p-8 "
       >
       {/* build the pdf builder component */}
       <DocumentBuilder
        title=" La charte du projet  "
         description="Document qui autorise et définit les objectifs, le périmètre et les parties prenantes du projet." />
       <ActivityListBuilder />
       
       
       </div>
      </main>
    </>
  );
};

export default Page;