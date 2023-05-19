/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import {   useState} from "react"
import { TextField } from "~/components/used/TextField";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import {  AbdullahTable, ItemTable } from "~/components/used/AbdullahTable";
import { AbdullahButton } from "~/components/used/AbdullahButton";
import { CreateMettingPopup } from "~/components/popup/CreateMettingPopup";
import { api } from "~/utils/api";
import { toast } from "react-toastify";
import { getProjectMetaData } from "~/lib/MetaData";
import { StakeHolder } from "~/components/popup/StakeHolder";

import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { RowGridText } from "~/components/typography/RowGridText";

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

 
  const [commingData , setCommingData] = useState<IpiData[]>([] as IpiData[])
 
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
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[5rem]"}`}>
  
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6">
          <RowGridText text="Comunication  management plan " />
          <RowGridText small text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt ex ad dicta animi soluta deleniti a distinctio quo. Non tempore numquam odio sequi iste adipisci laudantium aperiam, eius quas quidem." />
         
        <div className="col-span-6 6 lg:col-span-12 ">
          <AbdullahTable
           isLoading={get.isFetching || getStakholders.isFetching}
        
          title="manage all your meetings"
          description="lorem this is just a log text that has to be very good"
          headers={["stakeholder" , "Information" , "Method" , "Timing or Frequency" , "Sender"]}
          body={satisfieTable()}
          PlusButton={<CreateMettingPopup refetch={get.refetch} />}
          Action
          />
          </div>
      
      
          </div>

          {/* this is the second form */}
          <div className="col-span-6 lg:col-span-12">
          <AbdullahTable
           isLoading={get.isFetching || getStakholders.isFetching}
        
          title="manage malor"
          description="lorem this is just a log text that has to be very good"
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
          isLoading={get.isFetching || getStakholders.isFetching}
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