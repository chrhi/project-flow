import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/header/Header";
import { CloseSideBar } from "~/components/sideBars/CloseSideBar";
import { AbdullahTable } from "~/components/used/AbdullahTable";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";

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
            title="Archiving"
            description="Archiving in project management refers to the process of preserving and storing project-related information, documents, and artifacts for future reference or use. It involves organizing and cataloging project materials, determining retention periods for each item, and securing the information in a centralized repository or archive. Effective archiving helps to ensure that project information is available for future use, facilitates organizational learning, and supports compliance with legal or regulatory requirements. It also provides a basis for benchmarking, best practices, and historical analysis for future projects."
            headers={["name" , "role / responsability"]}
            body={[]}
            // PlusButton={<PLusButtonStakHolder refetch={refetch} />}

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