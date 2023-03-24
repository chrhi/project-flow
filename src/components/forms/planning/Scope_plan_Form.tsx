/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { FormEvent, useRef  , useEffect, useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Input } from "~/components/ui/used/Input";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";



export const Scope_plan_Form = () => {

    const [didGetData , setDidGetData] = useState<boolean>(false)
  return (
    <FormContainer>
      <FormHead text="👉 build the project managment scope" />
      <Form  onSubmit={(e) => console.log(e)}>
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        
          <TextField 
          lable=" Scope Statement Development"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" WBS Structure"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" WBS Dictionary"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />
          <TextField 
          lable=" Scope Baseline Maintenance"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable=" Scope Change"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

          <TextField 
          lable=" Deliverable Acceptance"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

        <TextField 
          lable=" Scope and Requirements Integration"
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
  )
}

