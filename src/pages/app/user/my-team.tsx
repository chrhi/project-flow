import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { DataTable } from "~/components/common/constants/stakholder-table/data-table";
import {  columns } from "~/components/common/constants/stakholder-table/column";



const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [stakeholders , setStakeHolders] = useState<any[]>([])


  
    

  return (
    <>
      <Header />
      <main className="   flex flex-col h-fit min-h-full w-full gap-y-4 p-4 bg-gray-50 ">
        <div className="w-full h-[70px] flex flex-col  items-start justify-center">
            <h1 className="text-2xl font-semibold ">My team</h1>
            <p className="text-md text-gray-500">manage all your team in here</p>
        </div>
        <DataTable  columns={columns} data={stakeholders} />  
         
        
      </main>
    </>
  );
};

export default Page;