import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/common/Header";
import { CloseSideBar } from "~/components/sideBars/CloseSideBar";
import { AbdullahTable } from "~/components/ui/used/AbdullahTable";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";

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
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[5rem]"}`}>
      <FormHead text="⭐ Resource handover " />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">

        <AbdullahTable
            title="Resource handover "
            descripton="
            Resource handover refers to the process of transferring project resources, such as personnel, equipment, and materials, from one project to another or from a project to an operational unit. It involves documenting the transfer of ownership, providing training and support to the new users, and ensuring that the resources are fully operational in their new environment. Effective resource handover helps to ensure that resources are used efficiently, reduces the risk of project delays or failures, and facilitates knowledge transfer between projects or operational units.
            "
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