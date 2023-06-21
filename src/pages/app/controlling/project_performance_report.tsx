import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Select from "react-select";
import { Header } from "~/components/header/Header";
import { ControllingSidebar } from "~/components/sideBars/ControllingSidebar";
import { RowGridText } from "~/components/typography/RowGridText";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";
import { TextField } from "~/components/used/TextField";
import { STAKHOLDER_TYPES } from "~/types/static/STATICDATA";


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

      <RowGridText text="PROJECT PERFORMANCE REPORT" />
            <RowGridText text="La clôture de projet est la phase finale où toutes les activités, les livrables et les objectifs sont terminés, et le projet est officiellement clôturé, visant à valider le succès du projet et faciliter la transition vers les opérations en cours ou les projets ultérieurs" small />
   
      <TextField
        lable="Accomplishments for This Reporting Period"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
      <TextField
        lable="Accomplishments Planned but Not Completed This Reporting Period"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

       
         <TextField
        lable="Root Cause of Variances"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

      <TextField
        lable="Impact to Upcoming Milestones or Project Due Date"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
      <TextField
        lable="Planned Corrective or Preventive Action"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

       
         <TextField
        lable="Funds Spent This Reporting Period"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

<TextField
        lable="Root Cause of Variances"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
      <TextField
        lable="Impact to Overall Budget or Contingency Funds"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

       
         <TextField
        lable="Planned Corrective or Preventive Action"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

<TextField
        lable="Accomplishments Planned for Next Reporting Period"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

       
         <TextField
        lable="Costs Planned for Next Reporting Period"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
       <RowGridText text="New Risks Identified" />


<TextField
        lable="Risk"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

<TextField
        lable="Issues"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

       
         <TextField
        lable="Comments"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
       
        </div>
      </div>
   
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;