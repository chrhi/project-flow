import { type NextPage } from "next";
import { FormEvent, useEffect } from "react";
import { Header } from "~/components/header/Header";
import { useState } from "react";
import { Sidebar } from "~/components/sideBars/Sidebar";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";
import { PlusButtonTable } from "~/components/popup/PlusButtonTable";
import { AbdullahTable, ItemTable } from "~/components/used/AbdullahTable";
import { api } from "~/utils/api";
import { userReducer } from "~/store/userReducer";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";


type IpiData = {
  objectifs : string , 
  type : string ,
  seccessCriteria :  string , 
  approval :  string,

  id :  string
}

const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(true)


  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])

    const {refetch , isFetching } = api.tableInfoRouter.getAllInfo.useQuery({project_id : getProjectMetaData()} , {
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

    const deleteRow = api.tableInfoRouter.deleteOneInfo.useMutation({
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
   

    const satisfieTable = (type : string) : ItemTable[] => {


      const filteredArray  = commingData.filter(item => item.type === type )
      const array : ItemTable[] =  filteredArray.map(item => (
        {
          id : item.id ,
          type : item.type,
          callback : (id : string) =>{
          
            deleteRow.mutate({id})
          },
          properties : [item.objectifs , item.seccessCriteria , item.approval]
        } 
      ))
    
     
      return array
    }
 
  return (
    <>
    
      <Header />
      <main className=" scrollbar-hide  flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
      <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
    
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
       <div className="col-span-6 lg:col-span-12 ">
       <AbdullahTable
        
          isLoading={isFetching}
          Action 
          title="Périmètre"
          description=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={satisfieTable("Périmètre")}
         PlusButton ={<PlusButtonTable formType="Périmètre" refetch={refetch}/>}
         
         />
       

        {/* this is the second table */}
        <AbdullahTable
         
          isLoading={isFetching}
          Action 
          title="Echéancier"
          description=""
          headers={["Objectifs du Projet" , "Critères du succès " , "Approbation " ]}
          body={satisfieTable("Echéancier")}
         PlusButton ={<PlusButtonTable formType="Echéancier" refetch={refetch}/>}
         />
        

        {/* and this is hte other table */}
        <AbdullahTable
         
          isLoading={isFetching}
          Action 
          title="Coût"
         description=""
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