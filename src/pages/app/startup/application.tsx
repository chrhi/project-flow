import { Button } from "@mui/material";
import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import { PdfView } from "~/components/forms/startup/PdfView";
import { Sidebar } from "~/components/ui/Sidebar";
import { AbdullahButton } from "~/components/ui/buildingBlocks/AbdullahButton";
import { api } from "~/utils/api";
import { get_publicUrl } from "~/utils/pdf/getPublicUrl";
import {loading_Reducer} from "~/store/app-reducer/loadingReducer"
import { toast } from "react-toastify";
import { userReducer } from "~/store/userReducer";
import { useEffect, useState } from "react";
import { openNewTap } from "~/utils/pdf/openNewTap";

type FistFormType ={
  titre:string , 
  NeedForOrganization:string,
  ProjectRequirements:string,
  ProductDescription:string,
  ThePojectDoesNotInclude:string , 
  PreApprovedResources : string,

}
const Page: NextPage = () => {


  const [FirstForm , setFirstForm ] = useState<FistFormType>({
    titre:"" , 
    NeedForOrganization:"",
    ProjectRequirements:"",
    ProductDescription:"",
    ThePojectDoesNotInclude:"" , 
    PreApprovedResources : "",
  })
  const [pdfExists , setPdfExists ] = useState<boolean>(false)
  const set_isLoading = loading_Reducer(state => state.set_isLoading)

  const id = userReducer(state => state.id)
  const {   isFetching }= api.Charter.getProjectCharterInfo.useQuery({id } , {

    onSuccess(data) {
      const {titre , NeedForOrganization , PreApprovedResources , ProductDescription ,ProjectRequirements , ThePojectDoesNotInclude} = data
      setFirstForm({titre , NeedForOrganization , PreApprovedResources , ProductDescription ,ProjectRequirements , ThePojectDoesNotInclude} )
      set_isLoading(false)
    },
    onError() {
      toast("fialed to fetch cherter details ",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
  })


  const mutation = api.pdf.createPdfFiles.useMutation({
    onSuccess() {
      refetchPdfStatus().then(data => console.log(data)).catch(error => console.log(error))
      set_isLoading(false)
      console.log("this is really worked")
    },
    onError() {
      toast("failed to build the pdf",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
  })

  const {isFetching :isPdfStatusFetching , refetch:refetchPdfStatus} = api.status.pdfStatus.useQuery({id} , {

    onSuccess(data) {
      setPdfExists(data.has_pdf_exist)
      set_isLoading(false)
    },
    onError() {
      toast("fialed to fetch cherter details ",{
        className:" !text-white !bg-gradient-to-r !from-sky-500 !to-indigo-600",
        hideProgressBar: true,
       })
       set_isLoading(false)
    },
  })

  const handleCreatePdf = async () => {
    set_isLoading(true)
    mutation.mutate({id})
    await  refetchPdfStatus()
  }
  useEffect(()=> {
    if(isFetching || isPdfStatusFetching){
      set_isLoading(true)
    }else{ set_isLoading(false)}
  },[ set_isLoading ,  isFetching , isPdfStatusFetching])

  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <Sidebar />
    <div className='ml-[16rem] custom-width min-h-screen h-fit flex flex-col items-center pt-8'>
     <div className='w-[80%] my-4 mx-auto h-[70px] flex items-center justify-between'>
        <h1 className='text-3xl font-semibold '>👉Obtenir la charte du projet</h1>
        <div>
        <AbdullahButton visible={pdfExists} title="reconstruire le pdf pour mettre à jour tous les changements" text="reconstruire pdf" onClick={() => {console.log("hi")}} className="!text-white !bg-gradient-to-r !from-indigo-600  !to-sky-500 !font-semibold" />
        <AbdullahButton visible={pdfExists} title="view pdf" text="view pdf" onClick={() => {
          openNewTap(get_publicUrl(id))
        }} className="!text-white !bg-gradient-to-r !from-red-600 !ml-4 !to-black !font-semibold" />
        </div>
    </div>
    {pdfExists ?
    <PdfView titre={FirstForm.titre} NeedForOrganization={FirstForm.NeedForOrganization} PreApprovedResources={FirstForm.PreApprovedResources} ProductDescription={FirstForm.ProductDescription} ProjectRequirements={FirstForm.ProjectRequirements} ThePojectDoesNotInclude={FirstForm.ThePojectDoesNotInclude}   />
    :
    <div className="h-[70vh] w-[80%] overflow-y-auto bg-white rounded-lg p-8 flex justify-center items-center">
         <AbdullahButton  title="build my pdf now" text="construire pdf" onClick={handleCreatePdf} className="!text-white !bg-gradient-to-r !from-indigo-600  !to-sky-500 !font-semibold" />
    </div> 
 
    
    }
      
  </div>
      </main>
    </>
  );
};

export default Page;




