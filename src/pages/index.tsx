import { type NextPage } from "next";
import Link from "next/link";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { userReducer } from "~/store/userReducer";
import { useRouter } from "next/router";
import { NotAuthHeader } from "~/components/header/NotAuthHeader";
import { signIn } from "next-auth/react";
import { cn } from "~/lib/utils";
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";


const validateSchema = z
    .object({
      password: z.string().min(6),
      email: z.string().email(),
    })

type FormData = z.infer<typeof validateSchema>


const Page: NextPage = () => {

  const [isLoading , setIsLoading] = useState(false)
  const{
    register,
    handleSubmit,
    formState :{errors}
  } = useForm<FormData>({
    resolver : zodResolver(validateSchema)
  })

  const onSubmit =   (data: FormData) => {
    setIsLoading(true)
    signIn("credentials" , {
      email : data.email , 
      password : data.password,
      
    }).then(() => {
      setIsLoading(false)
      toast.success(`success`)
    }).catch(error => {
      setIsLoading(false)
      console.log(error)
      toast.error("email or password are not currect")
    })
  }

  

  return (
    <>
     <NotAuthHeader  />

      <main className=" w-full custom-hieght-navbar bg-white flex justify-center pl-16  items-center  ">
        
      <div className="w-[50%] max-w-md p-4 z-[999] bg-white border shadow-2xl border-gray-200 rounded-md  sm:p-6 md:p-8 ">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#">
        <h5 className="text-xl font-semibold text-gray-900 "> Sign in </h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email Adress</label>
            <input
            {...register("email")}
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com"  />
            <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input  
             {...register("password")}
            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
            <p className='mt-1 text-sm text-red-600'>{errors.password?.message}</p>
        </div>
      
        <AbdullahButton
           isLoading={isLoading}
           className={buttonVariants({size :'lg' , variant :'rukia'})}
         >
             Login to your account
      </AbdullahButton>

      

        <div className="text-sm font-medium text-gray-500 ">
        Pas encore inscrit(e) ?<Link href="/auth/signup" className="text-blue-500 hover:underline ">Créer un compte.</Link>
        </div>
    </form>
    <div className="relative mt-4 ">
           <div className="absolute inset-0 flex  items-center">
            <span className="w-full border-t" />
          </div>
        <div className="relative flex justify-center text-xs uppercase">
           <span className="bg-background px-2 text-muted-foreground">
              Or continue with
           </span>
        </div>
        </div>
    <AbdullahButton
              onClick={() => signIn("github")}
              className={cn(buttonVariants({size :'lg' , variant :'secondary'}) , "w-full mt-4 flex justify-center gap-x-6 ")}
           >
            <Image src="/assets/github.png" alt="github" width={20} height={20}  />
             continue with github
    </AbdullahButton>
  
</div>

      </main>
    </>
  );
};

export default Page;