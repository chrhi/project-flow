import { type NextPage } from "next";
import { HeaderAdmin } from "~/components/header/admin-header/HeaderAdmin";
import { DataTable } from "~/components/common/constants/users-table/data-table";
import { columns } from "~/components/common/constants/users-table/column";
import { api } from "~/utils/api";
import toast from "react-hot-toast"
import MaxWidthWrapper from "~/components/layout/MaxWidthWrapper";
import { useState } from "react";
import { Badge } from "lucide-react";
import { formatDateAlgeria } from "~/lib/utils";
import { PlaceHolderTbale } from "~/components/common/table-place-holder";
import { Card } from "@tremor/react";
import { ConfirmePopUpDeleteUser } from "~/components/popup/table-confirm/delete-user-pop-up";


const Page: NextPage = () => {

  const [users , setUsers] = useState<any[]>([])

  const {isFetching , refetch} = api.userRouter.getAllUser.useQuery(undefined ,  {
      onSuccess(data){
      const ModifiedArray =   data.map(item => {
        return {
          id : item.id , 
          firstName: item.name,
          email: item.email,
          LastName : item.lastName ,
          type :   item.type ,
          street : item.location , 
          phone : item.phone , 
          zipCode : item.zipCode , 
          createdAt : formatDateAlgeria(item.createdAt) , 
          status :   "active" 
        }
        })
        setUsers(ModifiedArray)
        toast.success("we have get all the users")
      },
      onError(){
        toast.error("failed to fetch the users")
      }
  })

  return (
    <>
    <HeaderAdmin />
      <main className=" w-full custom-hieght-navbar bg-stone-50   ">
       
        <MaxWidthWrapper className="flex flex-col  p-8">
        <ConfirmePopUpDeleteUser refetch={refetch} />
          <Card>
          {isFetching ? <PlaceHolderTbale /> :  <DataTable columns={columns} data={users} refetch={refetch}/> }
          </Card>
      
           
        </MaxWidthWrapper>
        
      </main>
    </>
  );
};

export default Page;