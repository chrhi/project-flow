import { type NextPage } from "next";
import type { FormEvent } from "react";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { TextField } from "~/components/used/TextField";
import { FormButton } from "~/components/used/FormButton";
import { RowGridText } from "~/components/typography/RowGridText";
import NewTimePicker from "~/components/used/NewTimePicker";
import { DateRangePickerValue } from "@tremor/react";





const Page: NextPage = () => {

  let id_abdullah : any 
  const [isOpen , setIsOpen] = useState<boolean>(true)
  const [value , setValue] = useState<DateRangePickerValue>([
    new Date(),
    new Date()
  ])
  const [formData , setFormData] = useState({
    
    title : "",
    sponsor : "" , 
    projectManager : "" , 
    client : "" , 
    dateToStart : "" ,
    dateToEnd : "" , 
    projectManagerAuthority : "" , 
    staffDecision : "" , 
    conflitManagment : "" , 
    regionalDirector : "" , 
    estimatedBudget : 0
  })
  const [didGetData , setDidGetData] = useState<boolean>(false)

  

    const handleCreate = (event : FormEvent) => {
      //todo handle this later
      event.preventDefault()
    }
    const handleUpdate = (event : FormEvent) => {
      //todo handle later
    }
    

  

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
        
       <Sidebar 
           setIsOpen ={setIsOpen} 
         
           isOpen = {isOpen}
          
        />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
  
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6 ">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
            <RowGridText text="Starting up the project " />
            <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         
            <TextField
                isLoading={false}
                lable="Intitulé de projet "
                onChange={(e) => {
                  setFormData({...formData , title : e.target.value})
                  
                }}
                value={formData.title}
             />
              <div className="col-span-6">
          
            <NewTimePicker value={value} setValue={setValue} text="sélectionner une heure à laquelle ce projet doit commencer et se terminer"/>
           </div>
           
             <TextField
            isLoading={false}
            lable="Objectif et opportunité de projet :  "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          <TextField
            isLoading={false}
            lable="Description de projet :   "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          <TextField
            isLoading={false}
            lable="Exigences à haut niveau :  "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          <TextField
            isLoading={false}
            lable="Risques à haut niveau :  "
            onChange={(e) => setFormData({...formData ,regionalDirector : e.target.value})}
            value={formData.regionalDirector}
          />
          
             <FormButton
        isLoading={false}
        state={didGetData}
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