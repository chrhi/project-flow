import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import {useState} from 'react'
import { FormContainer } from "~/components/used/FormContainer"; 
import { Form } from "~/components/used/Form";
import { TextField } from "~/components/used/TextField";
import { RowGridText } from "~/components/typography/RowGridText";

const Page: NextPage = () => {
  const [inTasks , setInTasks] = useState<boolean>(true)
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
            <RowGridText text="Project scheduel management plan " />
              <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         
              <TextField
                      lable="Schedule Methodology"
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
              <TextField
                      lable="Schedule Tools"
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
              <TextField
                      lable="Level of Accuracy"
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
                <TextField
                      lable="Units of Measure"
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
              <TextField
                      lable="Variance Thresholds"
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
                <TextField
                      lable="Schedule Reporting and Format"
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />

              {/* this is another section */}
              <TextField
                      lable="Process Management Activity identification "
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
              <TextField
                      lable="Process Management Activity sequencing "
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
                <TextField
                      lable="Process Management Estimating resources "
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
              <TextField
                      lable="Process Management Estimating effort and duration "
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
              />
                <TextField
                      lable="Process Management Updating, monitoring, and controlling "
                      onChange={(e ) => console.log("Hi")} 
                      value={"" }
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