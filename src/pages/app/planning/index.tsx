/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import {  useState} from "react"
import { TextField } from "~/components/used/TextField";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormButton } from "~/components/used/FormButton";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { RowGridText } from "~/components/typography/RowGridText";



const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
 
 
  const handleUpdate = () => {
    //todo
  }
  
  const handleSubmit = () => {
    //todo
  }
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
    
      
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          <RowGridText text="Project scope management " />
          <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         
          <TextField 
           isLoading={false }
          lable=" Scope Statement Development"
          onChange={({target}) => console.log("")} 
          value={""}
          />
          <TextField 
          isLoading={false }
          lable=" WBS Structure"
          onChange={({target}) => console.log("")} 
          value={""}
          />
          <TextField 
         isLoading={false }
          lable=" WBS Dictionary"
          onChange={({target}) => console.log("")} 
          value={""}
          />
          <TextField 
          isLoading={false }
          lable=" Scope Baseline Maintenance"
          onChange={({target}) => console.log("")} 
          value={""}
          />

          <TextField 
               isLoading={false }
          lable=" Scope Change"
          onChange={({target}) => console.log("")} 
          value={""}
          />

          <TextField 
               isLoading={false }
          lable=" Deliverable Acceptance"
          onChange={({target}) => console.log("")} 
          value={""}
          />

        <TextField 
          isLoading={false }
          lable=" Scope and Requirements Integration"
          onChange={({target}) => console.log("")} 
          value={""}
          />


         
        </div>
      </div>
    <FormButton
    state ={true}
    isLoading ={true}
    create={handleSubmit}
    update={handleUpdate}

    />
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;