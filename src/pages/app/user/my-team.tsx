import type { GetServerSideProps, InferGetServerSidePropsType,  NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { api } from "~/utils/api";
import { openInvitationModel } from "~/store/messages-popup";
import { getOrganizationId } from "~/lib/data-in-cookies";
import { getServerSession } from "next-auth/next";
import type { Session } from "next-auth";
import { authOptions } from "~/lib/auth";



// Server-side data fetching
export const getServerSideProps: GetServerSideProps<{

  AbdullahSession: string;
}> = async (context) => {
  // Fetch the user session
  const session = await getServerSession(context.req, context.res, authOptions);

  // Redirect if the session is not found
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  // Fetch the project details and initial messages using the project ID stored in cookies
  const AbdullahSession = { ...session };
  // Return the fetched data as props
  return {
    props: {
      AbdullahSession: JSON.stringify(AbdullahSession),
    },
  };
};



// Page component
const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {


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