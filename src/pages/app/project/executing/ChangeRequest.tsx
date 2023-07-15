import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";

import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import PhasesSideBar from "~/components/sideBars/PhasesSideBar";
import { RowGridText } from "~/components/typography/RowGridText";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import { ExecutingSidebar } from "~/components/sideBars/ExecutingSidebar";
import { CheckboxWithText } from "~/components/used/CheckIInput";
import { TextField } from "~/components/used/TextField";


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
      <ExecutingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[5rem]"}`}>
 
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
                  
            <RowGridText text="CHANGE REQUEST" />
            <RowGridText text="La clôture de projet est la phase finale où toutes les activités, les livrables et les objectifs sont terminés, et le projet est officiellement clôturé, visant à valider le succès du projet et faciliter la transition vers les opérations en cours ou les projets ultérieurs" small />
            <RowGridText text="Category of Change: " />
            <CheckboxWithText
              lable="scope"
              value = {false}
              onChange={(value) => console.log(value)}
            />
             <CheckboxWithText
              lable="cost"
              value = {false}
              onChange={(value) => console.log(value)}
            />
              <CheckboxWithText
              lable="quality"
              value = {false}
              onChange={(value) => console.log(value)}
            />
             <CheckboxWithText
              lable="scheduel"
              value = {false}
              onChange={(value) => console.log(value)}
            />
            <CheckboxWithText
              lable="requirements"
              value = {false}
              onChange={(value) => console.log(value)}
            />
              <CheckboxWithText
              lable="docuement"
              value = {false}
              onChange={(value) => console.log(value)}
            />

            <TextField
              lable="Detailed Description of Proposed Change"
              onChange={(e) => console.log(e)}
              value={""}
            />
            <TextField
              lable="Justification for Proposed Change"
              onChange={(e) => console.log(e)}
              value={""}
            />
            <RowGridText text="Impacts of Change"  />
            <CheckboxWithText
              text="Scope"
              lable="increase"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
            <CheckboxWithText
              text="Scope"
              lable="Decrease"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
              <CheckboxWithText
                 text="Scope"
                 lable="Modify"
                 value = {false}
                 onChange={(value) => console.log(value)}
                 clasName="xl:col-span-4"
            />
              <TextField
              lable="Description"
              onChange={(e) => console.log(e)}
              value={""}
              className="col-span-12"
            />

<CheckboxWithText
              text="Grade"
              lable="increase"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
            <CheckboxWithText
              text="Grade"
              lable="Decrease"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
              <CheckboxWithText
                 text="Grade"
                 lable="Modify"
                 value = {false}
                 onChange={(value) => console.log(value)}
                 clasName="xl:col-span-4"
            />
              <TextField
              lable="Description"
              onChange={(e) => console.log(e)}
              value={""}
              className="col-span-12"
            />


<CheckboxWithText
              text="Requirements"
              lable="increase"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
            <CheckboxWithText
              text="Requirements"
              lable="Decrease"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
              <CheckboxWithText
                 text="Requirements"
                 lable="Modify"
                 value = {false}
                 onChange={(value) => console.log(value)}
                 clasName="xl:col-span-4"
            />
              <TextField
              lable="Description"
              onChange={(e) => console.log(e)}
              value={""}
              className="col-span-6"
            />


<CheckboxWithText
              text="Cost"
              lable="increase"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
            <CheckboxWithText
              text="Cost"
              lable="Decrease"
              value = {false}
              onChange={(value) => console.log(value)}
              clasName="xl:col-span-4"
            />
              <CheckboxWithText
                 text="Cost"
                 lable="Modify"
                 value = {false}
                 onChange={(value) => console.log(value)}
                 clasName="xl:col-span-4"
            />
              <TextField
              lable="Description"
              onChange={(e) => console.log(e)}
              value={""}
              className="!col-span-6"
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