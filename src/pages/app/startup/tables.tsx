import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { AbdullahTable, ItemTable } from "~/components/used/AbdullahTable";
import { RowGridText } from "~/components/typography/RowGridText";




const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(true)




 
  return (
    <>
    
      <Header />
      <main className=" scrollbar-hide  flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
      <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
    
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
       <div className="col-span-6 lg:col-span-12 ">
       <RowGridText text="set   the project objectives " />
            <RowGridText small text=" Define specific, measurable, achievable, relevant, and time-bound (SMART) project objectives that clearly state the desired outcomes and deliverables, providing a clear direction and focus for the project" />
       <AbdullahTable
        
          isLoading={false}
          Action 
          title="Périmètre"
          description=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={[]}
         />
       

        {/* this is the second table */}
        <AbdullahTable
         
          isLoading={false}
          Action 
          title="Echéancier"
          description=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={[]}
       
         />
        

        {/* and this is hte other table */}
        <AbdullahTable
         
          isLoading={false}
          Action 
          title="Coût"
         description=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={[]}
        
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