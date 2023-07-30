import type { GetServerSideProps, InferGetServerSidePropsType,  NextPage } from "next";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { api } from "~/utils/api";
import  toast  from "react-hot-toast";
import { Label } from "~/components/ui/label";
import { useRouter } from "next/router";
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react";
import { Header } from "~/components/header/Header";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";


const validateSchema = z
    .object({
      name: z.string().min(3),
      
    })

type FormData = z.infer<typeof validateSchema>




// Page component
const Page: NextPage = () => {

    const router = useRouter();

    const [category , setCategory] = useState<string>("")

    const [isLoading , setIsLoading] = useState<boolean>(false)


    const mutation = api.organizationRouter.create_org.useMutation({
       onSuccess : async (data) =>  {
         toast.success(`new organization has been created`)
        await  router.push("/app/user/profile")
         setIsLoading(false)
        },
       onError(error){
         toast.error(error.message)
         setIsLoading(false)
        }
   })

   const{
         register,
         handleSubmit,
         formState :{errors}
       }  = useForm<FormData>({
        resolver : zodResolver(validateSchema)
    })

    const onSubmit = (data: FormData) => {
      setIsLoading(true)
       mutation.mutate({
        category ,
        name : data.name

       })
    }

    useEffect(() => {
      if (Object.keys(errors).length) {
        for (const [_key, value] of Object.entries(errors)) {
          value
          toast.error((value as { message: string }).message)
        }
      }
    }, [errors])




  return (
    <>
    <Header />
      <main className=" custopn-page-height  items-center pt-8 flex flex-col w-full  ">
        <div className="w-full h-[70px] flex justify-center items-start  flex-col px-8">
          <h1 className="text-xl font-semibold text-gray-900 ">Add new Organization to your work space</h1>
          <p className="text-md text-gray-500 ">Let's Get Started</p>
        </div>
    <div className='  w-full max-w-5xl border  p-8 shadow-lg  mx-auto rounded-lg   h-fit min-h-[300px] flex flex-col  my-4   bg-white '>
        
    <form     onSubmit={handleSubmit(onSubmit)} >
         
               <div className="flex  w-full flex-col gap-y-2 justify-start  items-start gap-x-2">
                   <Label > Organization  name  </Label>
                   <Input type="text"
                   {...register("name")}
                   />
                   <p className="text-sm text-red-600">{errors?.name?.message}</p>
                   
               </div>
              
                   <div className={`w-full h-[60px]`}>
              <Label>Organization type</Label>
              <Select
               defaultValue="Agency"
               onValueChange={(value) => setCategory(value)} 
              >
                <SelectTrigger className="w-full">
                  <SelectValue  placeholder="Select a type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="Agency">Agency</SelectItem>
                    <SelectItem value="Groupe">Groupe</SelectItem>
                    <SelectItem value="Company">Company</SelectItem>
                    <SelectItem value="Department">Department</SelectItem>
                    <SelectItem value="person">one person</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
             

             <div className="w-full h-[50px]  my-4 items-center justify-end flex ">
                 <AbdullahButton 
                                isLoading={isLoading}
                                type="submit"
                                className={`${buttonVariants({size:"sm", variant:'primary'})} font-semibold`}>
                                Save & Create My Organization
                 </AbdullahButton>
             </div>
         </form>
    </div>
        
</main>
    </>
  );
};

export default Page;