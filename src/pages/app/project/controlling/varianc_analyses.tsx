import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { ControllingSidebar } from "~/components/sideBars/ControllingSidebar";
import { RowGridText } from "~/components/typography/RowGridText";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { TextField } from "~/components/used/TextField";
import PhasesSideBar from "~/components/sideBars/PhasesSideBar";



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

        
      <RowGridText text="VARIANCE ANALYSIS" />
      <RowGridText  small text="Perform Quantitative Assessment" />

    
      <RowGridText text="Schedule Variance" />

      <div className="col-span-6 lg:col-span-12">
        <AbdullahTable
        isLoading={false}
        Action ={false}
        headers={["Planned Result" , "Actual Result" , "Variance" ]}
        body={[]}
    // PlusButton={<PlusButtonIssueManagment  />}
        />
        </div>


      <TextField
        lable="Root Cause"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
      <TextField
        lable="Planned Response"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />

      <RowGridText text="Cost Variance" />
      <div className="col-span-6 lg:col-span-12">
        <AbdullahTable
        isLoading={false}
        Action ={false}
        headers={["Planned Result" , "Actual Result" , "Variance" ]}
        body={[]}
    // PlusButton={<PlusButtonIssueManagment  />}
        />
        </div>

       
       

     <TextField
        lable="Root Cause"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
      <TextField
        lable="Planned Response"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
     
     <RowGridText text="Quality Variance" />
      <div className="col-span-6 lg:col-span-12">
        <AbdullahTable
        isLoading={false}
        Action ={false}
        headers={["Planned Result" , "Actual Result" , "Variance" ]}
        body={[]}
    // PlusButton={<PlusButtonIssueManagment  />}
        />
        </div>

       
       

     <TextField
        lable="Root Cause"
        onChange={(e) => console.log(e)}
        isLoading={false}
        value={""}
      />
      <TextField
        lable="Planned Response"
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