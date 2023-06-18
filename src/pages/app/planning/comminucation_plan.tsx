
import {   useState} from "react"
import { TextField } from "~/components/used/TextField";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import {  AbdullahTable,type ItemTable } from "~/components/used/AbdullahTable";
import { AbdullahButton } from "~/components/used/AbdullahButton";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { RowGridText } from "~/components/typography/RowGridText";



const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)

 
  
 


  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[5rem]"}`}>
  
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          <RowGridText text="Plan de gestion des communications" />
          <RowGridText small text="Le plan de gestion des communications est un document qui établit une approche structurée pour gérer les communications au sein d'un projet, comprenant les objectifs de communication, les parties prenantes, les méthodes de communication, le calendrier, et les responsabilités associées." />
         
        <div className="col-span-6 6 lg:col-span-12 ">
          <AbdullahTable
           isLoading={true}
        
          title="manage all your meetings"
          description="lorem this is just a log text that has to be very good"
          headers={["stakeholder" , "Information" , "Method" , "Timing or Frequency" , "Sender"]}
          body={[]}
        
          Action
          />
          </div>
      
      
          </div>

          {/* this is the second form */}
          <div className="col-span-6 lg:col-span-12">
          <AbdullahTable
        
        
          title="manage malor"
          description="lorem this is just a log text that has to be very good"
          headers={["Assumptions" , "Constraints" ]}
          body={[
            {id : "jdbnss",
              callback : () => console.log("hi there"),
            properties : ["abdullah lorem this is just a log text that has to be very good" , "lorem this is just a log text that has to be very good"  ]
            },
            {
              id : "jdbnss",
            callback : () => console.log("hi there"),
            properties : ["lorem this is just a log text that has to be very good" , "lorem this is just a log text that has to be very good" ]
            },
          
         ]}
          />
          </div>
          <div className="bg-white px-4 my-1 col-span-6  text-right ">
        <AbdullahButton  
            onClick={() => console.log("hi there")}
          
            title='save the changes '
            className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>
          
          <TextField 
        
          lable="Glossary of Terms or Acronyms"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

         
        </div>
      
     
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;