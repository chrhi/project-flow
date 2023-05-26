import { FormEvent,  useState } from "react";
import { Form } from "~/components/used/Form";
import { FormButton } from "~/components/used/FormButton";
import { FormContainer } from "~/components/used/FormContainer";

import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { DataTable } from "~/components/common/constants/resource-table/data-table";
import { Stakholder , columns } from "~/components/common/constants/resource-table/column";


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

  const data : Stakholder[] =  [
    {
      id: "728ed52f",
      name : "abdullah",
      email: "salah.bvb44@gmail.com",
      impact: "m@example.com",
      type : "active"
    },
    {
      id: "728ed545f",
      name : "chcheri",
      email: "mahdi.chahri55@gmail.com",
      impact: "low",
      type : "active"
    },
  ]
  
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
        <div className="col-span-6 lg:col-span-12">
        <DataTable columns={columns} data={data} /> 
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




