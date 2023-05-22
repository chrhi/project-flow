import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { Badge } from "@tremor/react";
import DataTable from 'react-data-table-component';


const columns = [
    {
        name: 'Title',
        selector: (row: { title: any; }) : any => row.title,
    },
    {
        name: 'Year',
        selector: (row: { year: any; }) : any => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year:  <Badge   color={"blue"} >this is </Badge>,
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]


type IpiData = {
  name : string , 
  role : string ,
  impact : string
  id :  string
}
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
            <DataTable
            columns={columns}
            data={data}
            pagination
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