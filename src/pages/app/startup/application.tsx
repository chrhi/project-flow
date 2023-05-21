/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "~/components/header/Header";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { AbdullahButton } from "~/components/used/AbdullahButton";
import { Paragraph } from "~/components/typography/Paragraph";
import { Form } from "~/components/used/Form";
import { FormContainer } from "~/components/used/FormContainer";
import { FormHead } from "~/components/used/FormHead";
import { getProjectMetaData } from "~/lib/MetaData";
import { loading_Reducer } from "~/store/app-reducer/loadingReducer";
import { api } from "~/utils/api";
import { get_publicUrl } from "~/utils/pdf/getPublicUrl";
import { openNewTap } from "~/utils/pdf/openNewTap";


const Page: NextPage = () => {

  const [isBuild  , setIsBuild] = useState<boolean>(false)
  const [pdfUrl  , setPdfUrl] = useState<string>("")

  const [isOpen , setIsOpen] = useState<boolean>(true)
  
  const set_loading = loading_Reducer(state => state.set_isLoading)
  const {isFetching , refetch } = api.documentRouter.getDocuments.useQuery({project_id : getProjectMetaData()} , {
    onSuccess(data) {
      setIsBuild(data.status)
      setPdfUrl(data.public_url)
      set_loading(false)
    },
    onError(){
      toast("failed to fetch the data",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       set_loading(false)
    }
  })
  const build = api.CreatePdf.buildProjectCharter.useMutation({
    onSuccess : async () => {
      toast("the project charter has been build ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       await refetch()
    },
    onError : () => {
      toast("failed to create the project charter",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
    }
  })

  const buildAgain = api.CreatePdf.buildProjectCharterAgain.useMutation({
    onSuccess : async () => {
      toast("the project charter has been build ",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       await refetch()
    },
    onError : () => {
      toast("failed to create the project charter",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
    }
  })

  useEffect(() => {
    if(isFetching){
      set_loading(true)
    }else{
      set_loading(false)
    }
  }, [ isFetching , set_loading])
  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
       <Sidebar />
       <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`} >
      <FormHead text="⭐c'est le panneau de contrôle pour cette application" />
      <Form  >
      <div className="  px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6  lg:grid-cols-12 p-2 gap-6">
            <div className="col-span-6 p-4 h-[150px] flex items-center justify-between border-2 rounded-lg">
                    <div className="w-[50%] h-[100%] flex flex-col justify-center items-start" >
                        <h1 className="text-black  text-center lg:text-left text-3xl font-extrabold leading-tight tracking-tighter">application / démarage</h1>
                    <Paragraph>passer le rôle à l'étape suivante</Paragraph>
                    </div>
                    <div className="w-[50%] h-full flex justify-end items-center p-4" >
                      <AbdullahButton
                      >
                       comme si c'était terminé
                      </AbdullahButton>
                    </div>
            </div>
        </div>
        <div className="grid grid-cols-6 p-2 gap-6">
            <div className="col-span-6 p-4 h-[100px] flex items-center justify-between border-2 rounded-lg">
                    <div className="w-[50%] h-[100%] flex flex-col justify-center items-start" >
                        <h1 className="text-black  text-center lg:text-left text-3xl font-extrabold leading-tight tracking-tighter">charte de projet</h1>
                    <Paragraph>construire la charte du projet</Paragraph>
                    </div>
                    <div className="w-[50%] h-full gap-x-4 flex justify-end items-center p-4" >
                      {
                        isBuild ? 
                        <div>
                       <AbdullahButton
                       className="bg-black"
                       onClick={() => openNewTap(get_publicUrl(`${getProjectMetaData()}/charter.pdf`))} 
                      >
                     view build
                      </AbdullahButton>
                      <AbdullahButton
                       isLoading ={buildAgain.isLoading}
                       onClick={() => {
                         buildAgain.mutate({
                           project_id :  getProjectMetaData()
                         })
                       }}
                       className={"bg-red-500"}
                      >
                     remove
                      </AbdullahButton>
                          </div>
                        :
                        <AbdullahButton
                        isLoading ={build.isLoading}
                        onClick={() => {
                          build.mutate({
                            project_id :  getProjectMetaData()
                          })
                        }}
                        >
                       Construire
                        </AbdullahButton>
                      }
                     
                    </div>
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
