import { type NextPage } from "next";
import { FormEvent, useEffect } from "react";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { PlusButtonTable } from "~/components/ui/plusTable/startup/PlusButtonTable";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { api } from "~/utils/api";
import { userReducer } from "~/store/userReducer";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { toast } from "react-toastify";


type IpiData = {
  objectifs : string , 
  type : string ,
  seccessCriteria :  string , 
  approval :  string,

  id :  string
}

const Page: NextPage = () => {

  const project_id = userReducer(state => state.project_id)
  const set_loading = loading_Reducer(state => state.set_isLoading)

  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

    const {refetch , isFetching } = api.tableInfoRouter.getAllInfo.useQuery({project_id} , {
      onSuccess(data) {
        setCommingData(data.data as IpiData[])
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

    const satisfieTable = (type : string) : ItemTable[] => {


      const filteredArray  = commingData.filter(item => item.type === type )
      const array : ItemTable[] =  filteredArray.map(item => (
        {
          type : item.type,
          callback : () => console.log("hi there"),
          properties : [item.objectifs , item.seccessCriteria , item.approval]
        } 
      ))
    
     
      return array
    }
 
  return (
    <>
    
      <Header />
      <main className=" scrollbar-hide  flex w-full bg-gray-50 ">
       <Sidebar />
       <FormContainer>
      <FormHead text="👉 manage your cost" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
       <div className="col-span-6">
       <AbdullahTable 
          Action = {false}
          title="Périmètre"
          descripton=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={satisfieTable("Périmètre")}
         PlusButton ={<PlusButtonTable formType="Périmètre" refetch={refetch}/>}
         />
       

        {/* this is the second table */}
        <AbdullahTable 
          Action = {false}
          title="Echéancier"
          descripton=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={satisfieTable("Echéancier")}
         PlusButton ={<PlusButtonTable formType="Echéancier" refetch={refetch}/>}
         />
        

        {/* and this is hte other table */}
        <AbdullahTable 
          Action = {false}
          title="Coût"
          descripton=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={satisfieTable("Coût")}
         PlusButton ={<PlusButtonTable formType="Coût" refetch={refetch}/>}
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