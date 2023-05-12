import { type NextPage } from "next";
import { api } from "~/utils/api";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { Sidebar } from "~/components/ui/Sidebar";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { PLusButtonTeam } from "~/components/ui/plusTable/startup/PlusButtonTeam";

import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getProjectMetaData } from "~/lib/MetaData";

type IpiData = {
  name : string , 
  skills : string ,
  id :  string
}
const Page: NextPage = () => {

  const [isOpen , setIsOpen] = useState<boolean>(true)
  const set_loading = loading_Reducer(state => state.set_isLoading)

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
      <FormHead text="⭐ défié tous les membres de votre équipe" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
            <div className="col-span-6">

        <AbdullahTable
            title="les membres de mon équipe"
            descripton="En PMBOK, les membres de l'équipe font partie des ressources du projet et peuvent inclure toute personne affectée au projet, y compris les membres permanents, temporaires, internes ou externes, et les spécialistes en sous-traitance."
            headers={["name" , "skills "]}
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