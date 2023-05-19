import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/Sidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import {  AbdullahTable, ItemTable } from "~/components/used/AbdullahTable";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { MileStonePlusButton } from "~/components/popup/MileStonePlusButton";


type IpiData = {
  name : string , 
  id :  string,
  start_at : Date ,
  ends_at : Date
}
const Page: NextPage = () => {

  
 
  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

  const [isOpen , setIsOpen] = useState<boolean>(true)

    const {refetch , isFetching } = api.MilestonesRouter.getMileStones.useQuery({project_id : getProjectMetaData()} , {
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

    const deleteMileStone = api.MilestonesRouter.deleteMileStones.useMutation({
      onSuccess : async () => {
        await refetch()
        toast("deleted successfully",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         
        
      },
      onError(){
        toast("failed to delete ",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
        
      },
    })
    

    const satisfyTable = () : ItemTable[] => {

      const array : ItemTable[] =  commingData.map(item => (
        {
          id : item.id ,
          callback : (id : string) => {
            deleteMileStone.mutate({id})
          },
          properties : [item.name  ,item.start_at]
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
            <div className="col-span-6 lg:col-span-12 ">
        <AbdullahTable
            isLoading={isFetching}
          
            title="parties prenantes"
            description="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
            headers={["PRINCIPAUX JALONS " , "DATES" , "Milestone Description" , "type"]}
            body={satisfyTable()}
            PlusButton={<MileStonePlusButton refetch={refetch} />}
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