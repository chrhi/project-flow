/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent,  useState } from "react";
import { Form } from "~/components/used/Form";
import { FormButton } from "~/components/used/FormButton";
import { FormContainer } from "~/components/used/FormContainer";
import { TextField } from "~/components/used/TextField";

import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";

interface inputSchema {
  projectObjectOpportunity : string ,
  projectDescription : string ,
  highLevelRequirement : string ,
 hightLevelRisks : string,

}


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)



  const [formData , setFormData] = useState<inputSchema>({
    projectObjectOpportunity : "",
    projectDescription : "",
    highLevelRequirement : "",
    hightLevelRisks : "",
 
  })

 
  
  const handleCreate = (event : FormEvent) => {
    //todo handle this later
    event.preventDefault()
   
   
  
  }
  const handleUpdate = (event : FormEvent) => {
    //todo handle later
    event.preventDefault()
  
 
  }

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
      <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
          <TextField
            isLoading={false}
            lable="Objectif et opportunité de projet :  "
            onChange={(e) => setFormData({...formData ,projectObjectOpportunity : e.target.value})}
            value={formData.projectObjectOpportunity}
          />
          <TextField
            isLoading={false}
            lable="Description de projet :   "
            onChange={(e) => setFormData({...formData ,projectDescription : e.target.value})}
            value={formData.projectDescription}
          />
          <TextField
            isLoading={false}
            lable="Exigences à haut niveau :  "
            onChange={(e) => setFormData({...formData ,highLevelRequirement : e.target.value})}
            value={formData.highLevelRequirement}
          />
          <TextField
            isLoading={false}
            lable="Risques à haut niveau :  "
            onChange={(e) => setFormData({...formData ,hightLevelRisks : e.target.value})}
            value={formData.hightLevelRisks}
          />

        <FormButton
           isLoading={false}
           state={false}
           create={handleCreate}
           update={handleUpdate}
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




