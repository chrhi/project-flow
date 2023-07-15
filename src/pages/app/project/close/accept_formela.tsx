import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { CloseSideBar } from "~/components/sideBars/CloseSideBar";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormalAcceptance } from "~/components/popup/close-phases/FormalAcceptance";
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
       <CloseSideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <div className="col-span-6 lg:col-span-12 ">

        <AbdullahTable
            title="FORMAL ACCEPTANCE FORM"
            description="
            Project evaluation refers to the process of assessing the success of a project based on predetermined criteria, such as project objectives, schedule, budget, and stakeholder satisfaction. It involves collecting and analyzing project data, identifying areas of success and improvement, and developing recommendations for future projects. Effective project evaluation helps to improve project management practices, enhance organizational learning, and ensure that project goals are achieved.
            "
            headers={["ID" , "Requirement" , "Acceptance Criteria" , "Validation Method" , "Status" , "Comments" , "Signoff"]}
            body={[]}
            // PlusButton={<FormalAcceptance refetch={refetch} />}
            PlusButton={<FormalAcceptance  />}
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