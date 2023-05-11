import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { Paper } from "~/components/ui/Paper";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead"; 
import { AbdullahTable } from "~/components/ui/used/AbdullahTable"; 
import { useState } from "react";

const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[0]"}`}>
        <FormHead  text='👉🏻 in here manage all the ressources' />
        <Paper>
        <AbdullahTable 
        title='👉🏻 ressources '
         descripton='this is just a test and we will see abdout it'
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