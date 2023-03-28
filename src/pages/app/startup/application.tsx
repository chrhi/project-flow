/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { Sidebar } from "~/components/ui/Sidebar";
import { AbdullahButton } from "~/components/ui/buildingBlocks/AbdullahButton";
import { Heading } from "~/components/ui/typography/Heading";
import { Paragraph } from "~/components/ui/typography/Paragraph";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";


const Page: NextPage = () => {

   
  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
       <Sidebar />
       <FormContainer >
      <FormHead text="⭐c'est le panneau de contrôle pour cette application" />
      <Form  >
      <div className="  px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 p-2 gap-6">
            <div className="col-span-6 p-4 h-[150px] flex items-center justify-between border-2 rounded-lg">
                    <div className="w-[50%] h-[100%] flex flex-col justify-center items-start" >
                        <h1 className="text-black  text-center lg:text-left text-3xl font-extrabold leading-tight tracking-tighter">application / démarage</h1>
                    <Paragraph>passer le rôle à l'étape suivante</Paragraph>
                    </div>
                    <div className="w-[50%] h-full flex justify-end items-center p-4" >
                      <AbdullahButton
                      >
                       comme si c'était terminé
                      </AbdullahButton>
                    </div>
            </div>
        </div>
        <div className="grid grid-cols-6 p-2 gap-6">
            <div className="col-span-6 p-4 h-[100px] flex items-center justify-between border-2 rounded-lg">
                    <div className="w-[50%] h-[100%] flex flex-col justify-center items-start" >
                        <h1 className="text-black  text-center lg:text-left text-3xl font-extrabold leading-tight tracking-tighter">charte de projet</h1>
                    <Paragraph>construire la charte du projet</Paragraph>
                    </div>
                    <div className="w-[50%] h-full flex justify-end items-center p-4" >
                      <AbdullahButton
                      >
                     Construire
                      </AbdullahButton>
                    </div>
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
