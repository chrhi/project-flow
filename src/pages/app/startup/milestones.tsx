import { type NextPage } from "next";
import { FormEvent, useEffect } from "react";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { StakeHolder } from "~/components/ui/popup/StakeHolder";
import { PLusButtonStakHolder } from "~/components/ui/plusTable/startup/PLusButtonStakHolder";
import { userReducer } from "~/store/userReducer";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { toast } from "react-toastify";

type IpiData = {
  name : string , 
  role : string ,
  id :  string
}
const Page: NextPage = () => {

  const project_id = userReducer(state => state.project_id)
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

    const {refetch , isFetching } = api.stakHolderRouter.getAllStackHolders.useQuery({project_id} , {
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
    useEffect(() => {
      if(isFetching){
        set_loading(true)
      }else{
        set_loading(false)
      }
    }, [ isFetching , set_loading])

    const satisfyTable = () : ItemTable[] => {

      const array : ItemTable[] =  commingData.map(item => (
        {
         
          callback : () => console.log("hi there"),
          properties : [<StakeHolder  key={"chehri abdullah"} text={item.name} />  , item.role ]
        } 
      ))
    
     
      return array
    }

  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
       <Sidebar />
       <FormContainer>
      <FormHead text="⭐ défié tous tes pas" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">

        <AbdullahTable
            title="parties prenantes"
            descripton="Les parties prenantes (ou stakeholders en anglais) sont des individus ou des groupes ayant un intérêt ou une participation dans un projet."
            headers={["name" , "role / responsability"]}
            body={satisfyTable()}
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