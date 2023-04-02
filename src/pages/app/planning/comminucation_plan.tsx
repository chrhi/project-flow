/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import {  useEffect, useState} from "react"
import { TextField } from "~/components/ui/used/TextField";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { AbdullahTable, ItemTable } from "~/components/ui/used/AbdullahTable";
import { AbdullahButton } from "~/components/ui/buildingBlocks/AbdullahButton";
import { CreateMettingPopup } from "~/components/planning/comunication/CreateMettingPopup";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { getProjectMetaData } from "~/lib/MetaData";
import { StakeHolder } from "~/components/ui/popup/StakeHolder";

import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";

type IpiData = {
  STAKEHOLDER : string[],
  INFORMATION : string ,
  METHOD : string ,
  'TIMING OR FREQUENCY' : Date ,
  SENDER : string ,
  id :  string
}

type stakholder = {
  name : string , 
  id : string 
}

const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)

  const [didGetData , setDidGetData] = useState<boolean>(false)
  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])
  const set_loading = loading_Reducer(state => state.set_isLoading)
  const [stakholders , setStakholders] = useState<stakholder[]>([] as stakholder[])

const get = api.MettingRouter.getAllMettings.useQuery({project_id : getProjectMetaData()},{
  onSuccess:  (data) => {
    setCommingData(data as IpiData[])

  },
  onError : () => {
    
    toast("faild to fetch the data ",{
      className:" !text-white !bg-blue-500",
      hideProgressBar: true,
     })
  }
})

const deleteMetting = api.MettingRouter.deleteAMetting.useMutation({
  onSuccess: async () => {
    toast("deleted successfully ",{
      className:" !text-white !bg-blue-500",
      hideProgressBar: true,
     })
     await get.refetch()

  },
  onError : () => {
    
    toast("faild to delete  ",{
      className:" !text-white !bg-blue-500",
      hideProgressBar: true,
     })
  }
})

const getStakholders = api.stakHolderRouter.getAllStackHolders.useQuery({project_id : getProjectMetaData()} , {
  onSuccess(data) {
   

    setStakholders(data as stakholder[])
  },
  onError(){
    toast("failed to get the stakholders",{
      className:" !text-white !bg-blue-500",
      hideProgressBar: true,
     })
   
  },
})

useEffect(() => {
  if(get.isFetching || getStakholders.isFetching){
    set_loading(true)
  }else{
    set_loading(false)
  }
}, [ get.isFetching , set_loading , getStakholders.isFetching])

const satisfieTable = () : ItemTable[] => {

  const array : ItemTable[] =  commingData.map(item => {

    const  stakholdersNames = item.STAKEHOLDER.map(id => {

      const person = stakholders.filter(current => current.id === id)
      return  <StakeHolder id ={person[0]?.id}  key={person[0]?.id} text={person[0]?.name} />
    })

    return  {
      id : item.id ,
      callback : (id : string) => deleteMetting.mutate({id}),
      properties : [stakholdersNames , item.INFORMATION , item.METHOD , item["TIMING OR FREQUENCY"] , item.SENDER]
    } 
  })


  return array
}


  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
      <PlanningSideBar setIsOpen ={setIsOpen} isOpen = {isOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[5rem]"}`}>
      <FormHead text="👉 manage your comunications" />
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 ">
          <AbdullahTable 
          title="manage all your meetings"
          descripton="lorem this is just a log text that has to be very good"
          headers={["stakeholder" , "Information" , "Method" , "Timing or Frequency" , "Sender"]}
          body={satisfieTable()}
          PlusButton={<CreateMettingPopup refetch={get.refetch} />}
          Action
          />
          </div>
      
      
          </div>

          {/* this is the second form */}
          <div className="col-span-6 ">
          <AbdullahTable 
          title="manage malor"
          descripton="lorem this is just a log text that has to be very good"
          headers={["Assumptions" , "Constraints" ]}
          body={[
            {id : "jdbnss",
              callback : () => console.log("hi there"),
            properties : ["abdullah lorem this is just a log text that has to be very good" , "lorem this is just a log text that has to be very good"  ]
            },
            {
              id : "jdbnss",
            callback : () => console.log("hi there"),
            properties : ["lorem this is just a log text that has to be very good" , "lorem this is just a log text that has to be very good" ]
            },
          
         ]}
          />
          </div>
          <div className="bg-white px-4 my-1 col-span-6  text-right ">
        <AbdullahButton  
            onClick={() => console.log("hi there")}
          
            title='save the changes '
            className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
             />
        </div>
          
          <TextField 
          lable="Glossary of Terms or Acronyms"
          onChange={(e) => console.log("Hi")} 
          value={"" }
          />

         
        </div>
      
     
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;