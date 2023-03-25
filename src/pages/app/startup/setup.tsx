import { type NextPage } from "next";
import { FormEvent } from "react";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { Input } from "~/components/ui/used/Input";
import { TextField } from "~/components/ui/used/TextField";


const Page: NextPage = () => {

    const onSubmit = (event : FormEvent) => {
        console.log("form submited")
    }
    const [didGetData , setDidGetData] = useState<boolean>(false)

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
       <Sidebar />
       <FormContainer>
      <FormHead text="👉 manage your cost" />
      <Form  onSubmit={(e) => console.log(e)}>
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
            <TextField
                lable="Intitulé de projet "
                onChange={() => console.log("")}
                value={""}
             />
            <Input
                lable="chef de projet"
                onChange={() => console.log("")}
                value={""}
            />
             <Input
                lable="Sponsor de projet "
                onChange={() => console.log("")}
                value={""}
            />
             <Input
                lable="Client"
                onChange={() => console.log("")}
                value={""}
            />
             <Input
                lable="Nom du directeur Régional"
                onChange={() => console.log("")}
                value={""}
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