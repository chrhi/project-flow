import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/Sidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { getColor } from "~/utils/formate/getColor";
import { PLusButtonStakHolder } from "~/components/popup/PLusButtonStakHolder";
import { Badge } from "@tremor/react";
import { NewAbdullahTable } from "~/components/common/NewAbdullahTable";


type IpiData = {
  name : string , 
  role : string ,
  impact : string
  id :  string
}

const columns = [
  {
      name: 'name',
      selector: (row: { name: any; }) : any => row.name,
      sortable: true,
      
  },
  {
    name: 'impact',
    selector: (row: { impact: any; }) : any => row.impact,
    sortable: true,
},
{
  name: 'type',
  selector: (row: { type: any; }) : any => row.type,
  sortable: true,
},
{
  name: 'contact',
  selector: (row: { contact: any; }) : any => row.contact,
  sortable: true,
  
},



];

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
   

    const satisfyTable = ()  => {
      const array  =  commingData.map(item => (
        {
          id : item.id ,
          name : item.name,
          impact : <Badge key={item.id}  color={getColor({text : item.impact})} >{item.impact}</Badge> ,
          type : "not yet",
          contact : "mahdi.chahri55@gmail.com"
         
        
        
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
        {/* <AbdullahTable
            isLoading={isFetching}
            title="parties prenantes"
            description="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
            headers={["name" , "role / responsability" , "impact"]}
            body={ satisfyTable() }
            PlusButton={<PLusButtonStakHolder refetch={refetch} />}
            /> */}
            <NewAbdullahTable 
                            title="parties prenantes"
                            description="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
                            columns={columns}
                            data={satisfyTable()}
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