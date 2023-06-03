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
import { DommyDocument } from "~/components/docsComponents/dommy";

const Page: NextPage = () => {
  
  
 
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
       <DommyDocument
               title=" Change Request "
               description=" A Change Request in PMBOK is a formal proposal to modify project scope, deliverables, timelines, or other project components. "
               url =""
       />

      <DommyDocument
               title="Requirements managment plan  "
               description="The Requirements Management Plan in PMBOK is a document that outlines how project requirements will be identified, documented, tracked, and managed throughout the project lifecycle"
               url =""
       />

      <DommyDocument
               title=" project close out  "
               description="Project closeout refers to the final phase of a project where all activities, tasks, and deliverables are completed, final documentation is prepared, and the project is formally closed, including the evaluation of project outcomes and lessons learned."
               url =""
       />

     <DommyDocument
               title=" RESPONSIBILITY ASSIGNMENT MATRIX  "
               description="
               A Responsibility Assignment Matrix (RAM), also known as a RACI matrix, is a project management tool that clarifies and communicates the roles and responsibilities of project team members for specific tasks or deliverables."
               url =""
       />

   
       
       </div>
      </main>
    </>
  );
};

export default Page;