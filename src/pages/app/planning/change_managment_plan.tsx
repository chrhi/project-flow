/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Input } from "~/components/ui/used/Input";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable } from "~/components/ui/used/AbdullahTable";
import { AbdullahButton } from "~/components/ui/buildingBlocks/AbdullahButton";

import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";



const Page: NextPage = () => {
  const [didGetData , setDidGetData] = useState<boolean>(false)
  const [isOpen , setIsOpen] = useState<boolean>(true)
  return (
    <>
      
      
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[5rem]"}`}>
      <FormHead text="👉 manage your changes effectivlly" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        
          <TextField 
          lable=" Change Management Approach:"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
           <div className="col-span-6 ">
          <h1 className="text-xl  text-gray-900 ">Definitions of Change:</h1>
          </div>
          <TextField 
          lable="Schedule change:"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" Budget change"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" Scope change"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable="Project document changes"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <div className="col-span-6 ">
          <h1 className="text-xl  text-gray-900 ">Change Control Process:</h1>
          </div>

          <TextField 
          lable="Change request submittal "
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

        <TextField 
          lable="Change request tracking"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable="Change request review"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
             <TextField 
          lable="Change request disposition"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <div className="col-span-6">
            <AbdullahTable
              title="Change Control Board:"
              descripton=""
              headers={["Name" , "Role" , "Responsibility" , "Authority"]}
              body={[{
                id : "ggge",
                callback : () => console.log("hi"),
                properties : ["abdullah" , "abdullah" , "abdullah" , "abdullah" ]
              }]}
            />
          </div>
       
          
        
         
        </div>
      </div>
      <div className="bg-white px-4 py-3  text-right sm:px-6">
        {
          didGetData ?
           <button
        //    onClick={ (e : FormEvent) => habdleUpdate(e)}
           type="submit"
           className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
           >
            mise à jour
          </button> 
          :
          <button
          type="submit"
       
          className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
         enregistrer & continuer
        </button>
        }
       </div>
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;