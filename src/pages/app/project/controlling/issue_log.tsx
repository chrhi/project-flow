import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { ControllingSidebar } from "~/components/sideBars/ControllingSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";
import {  BarChart } from "@tremor/react";
import { RowGridText } from "~/components/typography/RowGridText";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import PhasesSideBar from "~/components/sideBars/PhasesSideBar";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
  {
    name: "abdullah",
    "Number of threatened species": 2488,
  },
  {
    name: "chehri",
    "Number of threatened species": 1445,
  },
  {
    name: "123mahdi",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  return (
    <>
      <Head>
      <title>ProjectFlow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <ControllingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[5rem]"}`}>
 
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
                  
            <RowGridText text="ISSUE LOG" />
            <RowGridText text="La clôture de projet est la phase finale où toutes les activités, les livrables et les objectifs sont terminés, et le projet est officiellement clôturé, visant à valider le succès du projet et faciliter la transition vers les opérations en cours ou les projets ultérieurs" small />
            <RowGridText text="Issues" />
            <div className="col-span-6 lg:col-span-12 ">
                 <AbdullahTable
                
              
                   headers={["Issue ID" , "Category" , "Issue" , "Impact on Objectives" , "Urgency"  ]}
                   body={[]}
                  //  PlusButton={<OtherAdd  />}
                  />
              </div>
              <RowGridText text="Responsible Party" />
              <div className="col-span-6 lg:col-span-12 ">
                 <AbdullahTable
                
              
                   headers={["Responsible Party" , "Actions" , "Status" , "Due Date" , "Comments"  ]}
                   body={[]}
                  //  PlusButton={<OtherAdd  />}
                  />
               </div>  

        </div>
      </div>
   
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;