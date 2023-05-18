import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { ControllingSidebar } from "~/components/sideBars/ControllingSidebar";
import { AbdullahTable,type ItemTable } from "~/components/used/AbdullahTable";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { Input } from "~/components/used/Input";
import { TextField } from "~/components/used/TextField";



const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)


  function satisfyTable() :  ItemTable[]{
     return [{
       callback : () => {console.log("hwllo my risk")},
       id : "this is an id" , 
       properties : [
        "Issue management in PMBOK is a process to identify, document, track and resolve project issues. It involves six steps: issue identification, logging, prioritization, assignment, resolution and closure. Effective issue management helps minimize negative impacts on project objectives." , 
        "hi i",
        "how fAR"
    
       ]
   },
   {
    callback : () => {console.log("hwllo my risk")},
    id : "this is an id" , 
    properties : [
     "Issue management in PMBOK is a process to identify, document, track and resolve project issues. It involves six steps: issue identification, logging, prioritization, assignment, resolution and closure. Effective issue management helps minimize negative impacts on project objectives." , 
     "hi i",
        "how fAR"
    ]
   },
   {
     callback : () => {console.log("hwllo my risk")},
     id : "this is an id" , 
     properties : [
      "Issue management in PMBOK is a process to identify, document, track and resolve project issues. It involves six steps: issue identification, logging, prioritization, assignment, resolution and closure. Effective issue management helps minimize negative impacts on project objectives." , 
      "hi i",
      "how fAR"
     ]
    }
  
  ]
  }
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
       {/* TEAM MEMBER STATUS REPORT */}
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <Input
                  isLoading={false}
                  lable="Team Member"
                  onChange={(e) => console.log(e)}
                  value={""}
            />
             <Input
                  isLoading={false}
                  lable="Role"
                  onChange={(e) => console.log(e)}
                  value={""}
            />
            <TextField
                isLoading={false}
                lable="Activities Planned for This Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <TextField
                isLoading={false}
                lable="Activities Accomplished This Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <TextField
                isLoading={false}
                lable="Activities Planned but Not Accomplished This Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
            />
              <TextField
                isLoading={false}
                lable="Root Cause of Variancess"
                onChange={(e) => console.log(e)}
                value={""}
            />
             <TextField
                isLoading={false}
                lable="Funds Spent This Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
            />
               <TextField
                isLoading={false}
                lable="Funds Planned to Be Spent This Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Root Cause of Variances"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Quality Variances Identified This Period"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Planned Corrective or Preventive Action"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Activities Planned for Next Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Costs Planned for Next Reporting Period"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="New Risks Identified"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Issues"
                onChange={(e) => console.log(e)}
                value={""}
               />
                <TextField
                isLoading={false}
                lable="Comments"
                onChange={(e) => console.log(e)}
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