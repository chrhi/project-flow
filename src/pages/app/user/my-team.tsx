import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { DataTable } from "~/components/common/constants/stakholder-table/data-table";
import {  columns } from "~/components/common/constants/stakholder-table/column";
import { api } from "~/utils/api";
import { openInvitationModel } from "~/store/messages-popup";
import { getOrganizationId } from "~/lib/data-in-cookies";



const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [people , setPeople] = useState<MemberOrg[]>([])

  const id = openInvitationModel(state => state.id)

  api.userRouter.get_org_members.useQuery({id : getOrganizationId()}, {
    onSuccess : (data) => {
      setPeople(data)
      console.log(data)
    }, 
    onError : () => {

    }
  })
    

  return (
    <>
      <Header />
      <main className="   flex flex-col h-fit min-h-full w-full gap-y-4 p-4 bg-gray-50 ">
        <div className="w-full h-[70px] flex flex-col  items-start justify-center">
            <h1 className="text-2xl font-semibold ">My team</h1>
            <p className="text-md text-gray-500">manage all your team in here</p>
        </div>
        <button onClick={() => {
          console.log("this is the id")
          console.log(id)
          console.log("this is the data")
          console.log(people)
        }}>text</button>
        <DataTable  columns={columns} data={people} />  
         
        
      </main>
    </>
  );
};

export default Page;