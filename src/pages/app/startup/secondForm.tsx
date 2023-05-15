import { type NextPage } from "next";
import { api } from "~/utils/api";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import {  AbdullahTable, type ItemTable } from "~/components/ui/used/AbdullahTable";
import { PLusButtonTeam } from "~/components/ui/plusTable/startup/PlusButtonTeam";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";


type IpiData = {
  name : string , 
  skills : string ,
  id :  string
}
const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(true)


  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

    const {refetch , isFetching } = api.teamRouter.getAllTeamMumbers.useQuery({project_id : getProjectMetaData()} , {
      onSuccess(data) {
        setCommingData(data as IpiData[])
      },
      onError(){
        toast("failed to fetch the data",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
      },
    })
  

    const satisfyTable = () : ItemTable[] => {

      const array : ItemTable[] =  commingData.map(item => (
        {
          id : item.id ,
          callback : () => console.log("hi there"),
          properties : [item.name , item.skills ]
        } 
      ))
    
     
      return array
    }
  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
            <div className="col-span-6 lg:col-span-12">

        <AbdullahTable
           
            isLoading={isFetching}
            title="les risk"
            description="En PMBOK, les membres de l'équipe font partie des ressources du projet et peuvent inclure toute personne affectée au projet, y compris les membres permanents, temporaires, internes ou externes, et les spécialistes en sous-traitance."
            headers={["risk" , "solutions" , "occurs rate"]}
            body={satisfyTable()}
            PlusButton={<PLusButtonTeam refetch={refetch}  />}

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