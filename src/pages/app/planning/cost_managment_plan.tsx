/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Input } from "~/components/ui/used/Input";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";

import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { RowGridText } from "~/components/ui/used/RowGridText";



const Page: NextPage = () => {
  const [didGetData , setDidGetData] = useState<boolean>(false)
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

          <RowGridText text="Cost  management plan" />
          <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         

          <TextField 
          lable=" Level of Accuracy"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable="Units of Measure"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" Control Thresholds"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" Rules for Performance Measurement"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable=" Cost Reporting and Format"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable=" Estimating costs"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

        <TextField 
          lable=" Developing the budget"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" Updating, monitoring and controlling"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

         
        </div>
      </div>
      <div className="bg-white px-4 py-3 text-right sm:px-6">
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