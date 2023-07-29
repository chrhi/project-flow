import type {  NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { api } from "~/utils/api";
import { openInvitationModel } from "~/store/messages-popup";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { DataTable } from "~/components/common/constants/my-team-table/data-table";
import { columns } from "~/components/common/constants/my-team-table/column";
import { Badge } from "@tremor/react";
import { Loader2 } from "lucide-react";
// Page component
const Page: NextPage = () => {


  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [people , setPeople] = useState<MemberOrg[]>([])

  const id = openInvitationModel(state => state.id)

  const {isFetching} = api.userRouter.get_org_members.useQuery({id : getOrganizationId()}, {
    onSuccess : (data) => {

      const prepare = data.map((item , index) => {
        return {...item , 
          id : item.user,
          index }
      })

      setPeople(prepare)

      
     
    }, 
    onError : () => {

    }
  })
    

  return (
    <>
      <Header />
      <main className="w-full container p-8 h-[calc(100vh-50px)] overflow-hidden overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
        <div className="w-full h-[70px] flex flex-col  items-start justify-center">
            <h1 className="text-2xl font-semibold ">My team</h1>
            <div className="w-full flex justify-start gap-x-4">
            <p className="text-md text-gray-500">manage all your team in here</p>
            {/* <Badge color='blue' className='bg-sky-50 border-blue-500   rounded-full font-normal text-blue-500' >
             
             {isFetching ? 
             <div className='flex gap-x-1'>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> loading...
             </div>
            
             :  
              "up to date"
             }
           </Badge> */}
            </div>
         
        </div>
      
        <DataTable   columns={columns} data={people} />  
        
         
        
      </main>
    </>
  );
};

export default Page;