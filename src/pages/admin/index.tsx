import { type NextPage } from "next";

import { DataTable } from "~/components/common/constants/users/data-table";
import {  columns } from "~/components/common/constants/users/column";
import { api } from "~/utils/api";
import { useState } from "react";
import { getOrganizationId } from "~/lib/data-in-cookies";

 type User = {
  id: string
  name: string
  email: string
}
const Page: NextPage = () => {

 
  const [people , setPeople] = useState<any[]>([])


  api.userRouter.getAllUser.useQuery(undefined, {
    onSuccess : (data) => {

      const prepare = data.map(item => {
        return {
          id : item.id || "",
          name : item.name || "" , 
          email : item.email || ""
        }
      })
      setPeople(prepare)
      console.log(data)
    }, 
    onError : () => {

    }
  })
    

  return (
      <main className=" w-full custom-hieght-navbar  ">
        
        <div className="w-[80%]  ml-[250px] p-4  flex flex-col items-start">
            <h1 className="text-xl font-semibold ">Admin page</h1>

            <DataTable  columns={columns} data={people} />  
        </div>
      </main>
   
  );
};

export default Page;