import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import {  AbdullahTable, ItemTable } from "~/components/used/AbdullahTable";
import { RowGridText } from "~/components/typography/RowGridText";



type IpiData = {
  name : string , 
  id :  string,
  start_at : Date ,
  ends_at : Date
}
const Page: NextPage = () => {

  
 
  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

  const [isOpen , setIsOpen] = useState<boolean>(true)

 

 
    

    const satisfyTable = () : ItemTable[] => {

      const array : ItemTable[] =  commingData.map(item => (
        {
          id : item.id ,
          callback : (id : string) => {
           //todo
          },
          properties : [item.name  ,item.start_at]
        } 
      ))
    
     
      return array
    }

  return (
    <>  
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
            <div className="col-span-6 lg:col-span-12 ">
            <RowGridText text="Manage stakeholder " />
            <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
        <AbdullahTable
            isLoading={false}
          
            title="Define clear and measurable milestones"
            description="Define clear and measurable milestones at key stages of the project to track progress, provide checkpoints for evaluation, and ensure that the project is progressing according to schedule and meeting its objectives"
            headers={["PRINCIPAUX JALONS " , "DATES" , "Milestone Description" , "type"]}
            body={satisfyTable()}
           
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