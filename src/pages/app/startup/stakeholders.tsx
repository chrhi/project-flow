import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import {  AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { StakeHolder } from "~/components/ui/popup/StakeHolder";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { getColor } from "~/utils/formate/getColor";
import { PLusButtonStakHolder } from "~/components/ui/plusTable/startup/PLusButtonStakHolder";
import { Badge } from "@tremor/react";


type IpiData = {
  name : string , 
  role : string ,
  impact : string
  id :  string
}
const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(true)
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

    const {refetch , isFetching } = api.stakHolderRouter.getAllStackHolders.useQuery({project_id : getProjectMetaData()} , {
      onSuccess(data: IpiData[]) {
        setCommingData(data as [])
      },
      onError(){
        toast("failed to fetch the data",{
          className:" !text-white !bg-blue-500",
          hideProgressBar: true,
         })
         set_loading(false)
      },
    })

    const deleteStakholder = api.stakHolderRouter.deleteStakholder.useMutation({
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
   

    const satisfyTable = () : ItemTable[] => {

      const array : ItemTable[] =  commingData.map(item => (
        {
          id : item.id ,
          callback : (id : string ) => {
            set_loading(true)
            deleteStakholder.mutate({id})
          },
          properties : [<StakeHolder id ={item.id}  key={item.id} text={item.name} />  ,
           item.role ,
           <Badge key={item.id}  color={getColor({text : item.impact})} >{item.impact}</Badge>
          ]
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
        <div className="grid grid-cols-6  lg:grid-cols-12 gap-6">
            <div className="col-span-6 lg:col-span-12">
        <AbdullahTable
            isLoading={isFetching}
            title="parties prenantes"
            description="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
            headers={["name" , "role / responsability" , "impact"]}
            body={ satisfyTable() }
            PlusButton={<PLusButtonStakHolder refetch={refetch} />}
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