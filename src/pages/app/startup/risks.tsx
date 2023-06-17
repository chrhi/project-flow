import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { DataTable } from "~/components/common/constants/risks-table/data-table"
import { RiskType , columns } from "~/components/common/constants/risks-table/column";
import { RowGridText } from "~/components/typography/RowGridText";




const data : RiskType[] =  [
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  {
    id: "728ed52f",
    title : "abdullah",
    discreption : "this is a really long text that has to been " ,
    solution : "there is no solotion at all",
    status : "doesnt appear"
  },
  
]


const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(false)


  

   
  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "lg:ml-[20rem]" : "ml-[0]"}`}>
     
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
            <div className="col-span-6 lg:col-span-12">
            <RowGridText text=" Gestion des risques" />
            <RowGridText small text="Gérer de manière proactive les risques du projet en identifiant, évaluant et hiérarchisant les risques potentiels, en élaborant des stratégies d'atténuation et en surveillant et contrôlant régulièrement les risques tout au long du cycle de vie du projet afin de minimiser leur impact sur les objectifs du projet" />
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