import { FormEvent,  useState } from "react";
import { Form } from "~/components/used/Form";
import { FormButton } from "~/components/used/FormButton";
import { FormContainer } from "~/components/used/FormContainer";
import { api } from "~/utils/api";
import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import { Sidebar } from "~/components/sideBars/StaringUpSidebar";
import { DataTable } from "~/components/common/constants/resource-table/data-table";
import { Resource , columns } from "~/components/common/constants/resource-table/column";
import toast from "react-hot-toast";
import { getProjectMetaData } from "~/lib/MetaData";






const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
  const [resource , setresource] = useState<Resource[]>([] as Resource[])


  const {isLoading , refetch} = api.resourcesRouter.getResources.useQuery({projectId : getProjectMetaData()}, {
    onSuccess(data) {
      const AbdullahData  = data.map(item =>{
        return {
          id : item.id,
          name : item.name,
          description :  item.description,
          cost:  item.cost,
          quality : item.quality,
        }
      })
      setresource( AbdullahData as Resource[] )
    },
    onError(){
      toast.error("error fetching the data")
    },
    retryOnMount : false 
  })

  



  


  return (
    <>
    
      <Header />
      <main className="   flex w-full bg-gray-50 ">
      <Sidebar setIsOpen ={setIsOpen} isOpen = {isOpen} />
      <FormContainer className ={` ${isOpen ? "ml-[20rem]" : "ml-[0]"}`}>
     
      <Form >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 lg:grid-cols-12  gap-6">
        <div className="col-span-6 lg:col-span-12">
        <DataTable refetch={refetch} columns={columns} data={resource} /> 
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



