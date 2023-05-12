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
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
      <FormHead text="⭐ Celebration" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <div className="col-span-6">

        <AbdullahTable
            title="Celebration"
            descripton="
            Celebration in project management refers to the process of acknowledging and recognizing the achievements of the project team and stakeholders. It involves planning and hosting events, such as project completion parties, award ceremonies, or team-building activities, to recognize the efforts and accomplishments of the project team. Effective celebration helps to boost team morale, promote team cohesion, and increase motivation and engagement for future projects. It also provides an opportunity to reflect on the project's successes and challenges and to celebrate the hard work and dedication of the project team.
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