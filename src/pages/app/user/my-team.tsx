import type { GetServerSideProps, InferGetServerSidePropsType,  NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { api } from "~/utils/api";
import { openInvitationModel } from "~/store/messages-popup";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import { authOptions } from "~/lib/auth";






// Page component
const Page: NextPage = () => {


  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [people , setPeople] = useState<MemberOrg[]>([])

  const id = openInvitationModel(state => state.id)

  api.userRouter.get_org_members.useQuery({id : getOrganizationId()}, {
    onSuccess : (data) => {

      const prepare = data.map((item , index) => {
        return {...item , index }
      })

      setPeople(prepare)

      console.log(prepare)
     
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
      
        {/* <DataTable  columns={columns} data={people} />   */}
         
        
      </main>
    </>
  );
};

export default Page;