import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { Paper } from "~/components/used/Paper";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead"; 
import { AbdullahTable } from "~/components/used/AbdullahTable"; 
import { useState } from "react";


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
    
        <Paper>
          
        <AbdullahTable 
       
          isLoading={false}
         title='👉🏻 ressources '
         description='this is just a test and we will see abdout it'
         headers={["name" , "avalablility" , "asigned taks"]}
         body={[{id : "gggg" ,callback: () => console.log("hello there") , properties :["abdullah" , "now" , "there is not"]}]}
         />
        </Paper>
    </FormContainer>
      </main>
    </>
  );
};

export default Page;