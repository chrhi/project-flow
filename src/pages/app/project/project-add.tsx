import { addDays } from "date-fns";
import { type NextPage } from "next";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Header } from "~/components/header/Header";
import { RowGridText } from "~/components/typography/RowGridText";
import { DatePickerWithRange } from "~/components/ui/date-range-picker";
import { Select } from "~/components/ui/select";
import { AbdullahButton } from "~/components/used/AbdullahButton";
import { FormButtonAction } from "~/components/used/ButtonFormAction";
import { Form } from "~/components/used/Form";
import { FormButton } from "~/components/used/FormButton";
import { FormContainer } from "~/components/used/FormContainer";
import { Input } from "~/components/used/Input";
import { TextField } from "~/components/used/TextField";
import ProjectAvartPicker from "~/components/used/project-avatar-picker";





const Page: NextPage = () => {

    const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: addDays(new Date(), 20),
      })

  

  return (
    <> 
     <Header />
      <main className=" w-full h-full  ">
         <FormContainer className="max-w-4xl mx-auto ">
         <Form >
         <div className="bg-white dark:bg-neutral-900 shadow-2xl border px-4 py-5 sm:p-6 ">
            <div className="grid grid-cols-12  gap-6">
              <RowGridText text="Create new Project" />
              <RowGridText small text="let's get started" />
              <Input  
                     className="!col-span-6  w-full"
                     value={"hello my project"}
                     onChange={() => console.log("hello")}
                     isLoading={false}
                     lable="title  "
              />
              
                    <ProjectAvartPicker  />
           
              <TextField
                     className="!col-span-12 !xl:col-span-12 w-full"
                     value={"hello my project"}
                     onChange={() => console.log("hello")}
                     isLoading={false}
                     lable="Breif description about the project "
              />
               <div className='col-span-12 '>
               <label  className="block text-sm font-medium leading-6 text-gray-900">
                  Add team members to this project
                </label>
                <Select
            
                   
                 />
               </div>
               <TextField
                     className="!col-span-12 !xl:col-span-12 w-full"
                     value={"hello my project"}
                     onChange={() => console.log("hello")}
                     isLoading={false}
                     lable="message is going to send to them"
              />
              <FormButtonAction
                     name="Create My Project"
               />
    </div>

  </div>
 
   </Form>
</FormContainer>
      </main>
    </>
  );
};

export default Page;