/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable } from "~/components/ui/used/AbdullahTable";
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
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
    
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
        
          <TextField 
          lable="Methodology"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable="Roles and Responsibilities"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable="Risk Categories"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable="Risk Management Funding"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable="Contingency Protocols"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable="Frequency and Timing"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

        <TextField 
          lable="Stakeholder Risk Tolerances"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

        <TextField 
          lable="Tracking and Audit"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
           <div className="col-span-6 ">
            <AbdullahTable
            Action={false}
              title="Probability and Impact Matrix"
              description="Definitions of Impact by Objective"
              headers={["" , "Scope" , "Quality" , "Time" , "Cost"]}
              body={[
              { id : "ggge",
                callback:() => console.log("hi"),
              properties : ["Very high" , " " , " " , " " , " "]
              }
            ]}

            />
          </div>
     


         
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