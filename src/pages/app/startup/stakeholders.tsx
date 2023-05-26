import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { getColor } from "~/utils/formate/getColor";
import { PLusButtonStakHolder } from "~/components/popup/PLusButtonStakHolder";
import { Badge } from "@tremor/react";
import { DataTable } from "~/components/common/constants/stakholder-table/data-table";
import { Stakholder , columns } from "~/components/common/constants/stakholder-table/column";




const data : Stakholder[] =  [
  {
    id: "728ed52f",
    name : "abdullah",
    email: "salah.bvb44@gmail.com",
    impact: "m@example.com",
    type : "active"
  },
  {
    id: "728ed545f",
    name : "chcheri",
    email: "mahdi.chahri55@gmail.com",
    impact: "low",
    type : "active"
  },
]







const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(true)


    

  return (
    <>
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
      <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="col-span-6 lg:col-span-12">
      
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