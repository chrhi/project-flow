import { type NextPage } from "next";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { api } from "~/utils/api";
import  toast  from "react-hot-toast";
import { Label } from "~/components/ui/label";
import { NotAuthHeader } from "~/components/header/NotAuthHeader";
import { useRouter } from "next/router";
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from "~/lib/utils";
import { useState } from "react";


const validateSchema = z
    .object({
      FirstName: z.string().min(3),
      LastName: z.string().min(3),
      OrganizationName: z.string().min(3),
      UserName: z.string().min(3),
      ConfirmEmail: z.string().email(),
    })

type FormData = z.infer<typeof validateSchema>


const Page: NextPage = () => {

    const router = useRouter();

    const [inVitationCode , setInvitationCode] = useState<string>("")


    const mutation = api.userRouter.PushUserMoreInformations.useMutation({
       onSuccess(data) {
         toast.success(`new user has been created`)
         router.push("/")
        },
       onError(error){
         toast.error(error.message)
         console.log(error)
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
        mutation.mutate({
          confirmEmail : data.ConfirmEmail , 
          FirstName : data.FirstName , 
          LastName : data.LastName , 
          userName : data.UserName , 
          OrganizationName : data.OrganizationName , 
          invitationCode : inVitationCode
        })
    }




  return (
    <>
     <NotAuthHeader  />
      <main className=" custopn-page-height  items-center pt-8 flex flex-col w-full bg-white ">
        <div className="w-full h-[70px] flex justify-center items-start  flex-col px-8">
          <h1 className="text-xl font-semibold text-gray-900 ">Tell us more about yourself</h1>
          <p className="text-md text-gray-500 ">Let's Get Started</p>
        </div>

    <div className='  w-full max-w-5xl border  p-8 shadow-lg  mx-auto rounded-lg   h-fit min-h-[300px] flex flex-col  my-4   bg-white '>
        
    <form     onSubmit={handleSubmit(onSubmit)} >
         <div className="flex gap-x-4 w-full  h-[50px] items-center">
               <div className="flex  w-[50%] flex-col gap-y-2 justify-start  items-start gap-x-2">
                   <Label >First name <span className="text-red-600">*</span></Label>
                   <input type="text"
                   {...register("FirstName")}
                   className={`px-4 py-1.5 rounded-lg outline-none dark:text-white dark:bg-stone-900 dark:ring-stone-600 dark:border-stone-600 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full `} />
                   <p className='mt-1 text-sm text-red-600'>{errors.FirstName?.message}</p>
               </div>
               <div className="flex   gap-y-2 w-[50%] flex-col  items-start gap-x-2">
                   <Label>Last name <span className="text-red-600">*</span></Label>
                   <input 
                      {...register("LastName")} 
                      type="text"
                      className={`px-4 py-1.5 rounded-lg outline-none dark:text-white dark:bg-stone-900 dark:ring-stone-600 dark:border-stone-600 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full `} />
                      <p className='mt-1 text-sm text-red-600'>{errors.LastName?.message}</p>
               </div>
           </div>
           <div className="flex  w-full flex-col my-2 mt-4   gap-y-2  items-start gap-x-2">
                   <Label>Confirm your email <span className="text-red-600">*</span></Label>
                   <input 
                       {...register("ConfirmEmail")}
                       type="email"
                       className={`px-4 py-1.5 rounded-lg outline-none dark:text-white dark:bg-stone-900 dark:ring-stone-600 dark:border-stone-600 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full `} />
                       <p className='mt-1 text-sm text-red-600'>{errors.ConfirmEmail?.message}</p>
            </div>
           <div className="flex  w-full flex-col my-2 mt-4   gap-y-2  items-start gap-x-2">
                   <Label>Organization  name <span className="text-red-600">*</span></Label>
                   <input 
                    {...register("OrganizationName")}
                   type="text"
                   className={`px-4 py-1.5 rounded-lg outline-none dark:text-white dark:bg-stone-900 dark:ring-stone-600 dark:border-stone-600 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full `} />
                   <p className='mt-1 text-sm text-red-600'>{errors.OrganizationName?.message}</p>
           </div>

           <div className="flex gap-x-4 w-full mt-4 h-[50px] items-center">
               <div className="flex  w-[50%] flex-col gap-y-2 justify-start  items-start gap-x-2">
                   <Label >Your Username (Your team members and clients will see it) <span className="text-red-600">*</span></Label>
                   <input type="text"
                   {...register("UserName")}
                   className={`px-4 py-1.5 rounded-lg outline-none dark:text-white dark:bg-stone-900 dark:ring-stone-600 dark:border-stone-600 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full `} />
                   <p className='mt-1 text-sm text-red-600'>{errors.FirstName?.message}</p>
               </div>
               <div className="flex   gap-y-2 w-[50%] flex-col  items-start gap-x-2">
                   <Label>Invitation code</Label>
                   <input 
                      onChange={(e) => setInvitationCode(e.target.value)}
                      value={inVitationCode}
                      type="text"
                      className={`px-4 py-1.5 rounded-lg outline-none dark:text-white dark:bg-stone-900 dark:ring-stone-600 dark:border-stone-600 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full `} />
                      <p className='mt-1 text-sm text-red-600'>{errors.LastName?.message}</p>
               </div>
           </div>
         
             <div className="w-full h-[50px]  my-4 items-center justify-start flex ">
                 <AbdullahButton 
                                className={`${buttonVariants({size:"sm", variant:'primary'})} font-semibold`}>
                                Save & Continue
                 </AbdullahButton>
             </div>
         </form>
    </div>
        
</main>
    </>
  );
};

export default Page;