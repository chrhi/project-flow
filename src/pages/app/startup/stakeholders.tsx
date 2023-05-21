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
import { NewAbdullahTable } from "~/components/common/NewAbdullahTable";


type IpiData = {
  name : string , 
  role : string ,
  impact : string
  id :  string
}

const columns = [
  {
      name: 'name',
      selector: (row: { name: any; }) : any => row.name,
      sortable: true,
      
  },
  {
    name: 'impact',
    selector: (row: { impact: any; }) : any => row.impact,
    sortable: true,
},
{
  name: 'type',
  selector: (row: { type: any; }) : any => row.type,
  sortable: true,
},
{
  name: 'contact',
  selector: (row: { contact: any; }) : any => row.contact,
  sortable: true,
  
},



];

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
      
            <NewAbdullahTable 
                            title="parties prenantes"
                            description="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
                            columns={columns}
                            data={[]}
                            addButton={<PLusButtonStakHolder  />}
            />
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