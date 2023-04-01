/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import {  useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable } from "~/components/ui/used/AbdullahTable";
import { AbdullahButton } from "~/components/ui/buildingBlocks/AbdullahButton";
import { CreateMettingPopup } from "~/components/planning/comunication/CreateMettingPopup";


export const Comunication_form = () => {

    const [didGetData , setDidGetData] = useState<boolean>(false)
  return (
    <FormContainer>
      <FormHead text="👉 manage your comunications" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 ">
          <AbdullahTable 
          title="manage all your meetings"
          descripton="lorem this is just a log text that has to be very good"
          headers={["stakeholder" , "Information" , "Method" , "Timing or Frequency" , "Sender"]}
          body={[
            {callback : () => console.log("hi there"),
            properties : ["abdullah chehri" , "nothiung" ,"local" , "20/33/444" ,"lozay" ]
            },
            {callback : () => console.log("hi there"),
            properties : ["abdullah chehri" , "nothiung" ,"local" , "20/33/444" ,"lozay" ]
            },
            {callback : () => console.log("hi there"),
            properties : ["abdullah chehri" , "nothiung" ,"local" , "20/33/444" ,"lozay" ]
            },
            {callback : () => console.log("hi there"),
            properties : ["abdullah chehri" , "nothiung" ,"local" , "20/33/444" ,"lozay" ]
            },
    ]}
    PlusButton={<CreateMettingPopup  />}
          />
          </div>
      
          <div className="bg-white px-4 my-1 col-span-6  text-right ">
        <AbdullahButton  
            onClick={() => console.log("hi there")}
          
            title='save the changes '
            className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>
          </div>

          {/* this is the second form */}
          <div className="col-span-6 ">
          <AbdullahTable 
          title="manage malor"
          descripton="lorem this is just a log text that has to be very good"
          headers={["Assumptions" , "Constraints" ]}
          body={[
            {callback : () => console.log("hi there"),
            properties : ["abdullah lorem this is just a log text that has to be very good" , "lorem this is just a log text that has to be very good"  ]
            },
            {callback : () => console.log("hi there"),
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