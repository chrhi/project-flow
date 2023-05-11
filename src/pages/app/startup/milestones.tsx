import { type NextPage } from "next";
import { FormEvent, useEffect } from "react";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { PLusButtonStakHolder } from "~/components/ui/plusTable/startup/PLusButtonStakHolder";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { AlgeriaformatDate } from "~/utils/formate/AlgeriaFormate";
import { MileStonePlusButton } from "~/components/ui/plusTable/startup/MileStonePlusButton";

type IpiData = {
  name : string , 
  id :  string,
  start_at : Date ,
  ends_at : Date
}
const Page: NextPage = () => {

  
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

  const [isOpen , setIsOpen] = useState<boolean>(true)

    const {refetch , isFetching } = api.MilestonesRouter.getMileStones.useQuery({project_id : getProjectMetaData()} , {
      onSuccess(data) {
        setCommingData(data as IpiData[])
       
        set_loading(false)
     
      },
      onError(){
        toast("failed to fetch the data",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         set_loading(false)
      },
    })

    const deleteMileStone = api.MilestonesRouter.deleteMileStones.useMutation({
      onSuccess : async () => {
        await refetch()
        toast("deleted successfully",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         
         set_loading(false)
      },
      onError(){
        toast("failed to delete ",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         set_loading(false)
      },
    })
    useEffect(() => {
      if(isFetching){
        set_loading(true)
      }
    }, [ isFetching , set_loading])

    const satisfyTable = () : ItemTable[] => {

      const array : ItemTable[] =  commingData.map(item => (
        {
          id : item.id ,
          callback : (id : string) => {
            set_loading(true)
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
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[0]"}`}>
      <FormHead text="⭐ défié tous tes pas" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">

        <AbdullahTable
            title="parties prenantes"
            descripton="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
            headers={["PRINCIPAUX JALONS " , "DATES"]}
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