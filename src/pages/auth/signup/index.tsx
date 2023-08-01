import { type NextPage } from "next";
import Link from "next/link";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { NotAuthHeader } from "~/components/header/NotAuthHeader";
import toast from 'react-hot-toast';
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import {z} from "zod"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from "~/lib/utils";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import { Input } from "~/components/ui/input";
import { useState } from "react";
import { Eye } from "lucide-react";

const validateSchema = z
    .object({
      email: z.string().email(),
      password: z.string().min(6),
      confirmPassword: z.string().min(6)
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password doesn't match",
      path: ["confirmpassword"]
    });

type FormData = z.infer<typeof validateSchema>

const Page: NextPage = () => {

  const router = useRouter();


  const mutation = api.userRouter.createUserVercel.useMutation({
    onSuccess() {
      toast.success(`new user has been created`)
      router.push("/auth/signup/process")
    },
    onError(error){
      toast.error("something went wrong")
      console.log(error)
  
    }
  })

  const{
      register,
      handleSubmit,
      formState :{errors}
    } = useForm<FormData>({
      resolver : zodResolver(validateSchema)
    })

    const onSubmit = (data: FormData) => {
          mutation.mutate({
             email : data.email,
             password  : data.password,
           })
    }

    const [passwordInputType, setPasswordInputType] = useState<'password' | 'text'>('password');

    const [passwordContifermeType, setPasswordContifermeType] = useState<'password' | 'text'>('password');

    const togglePassword = () => {
      setPasswordInputType(prevType => prevType === 'password' ? 'text' : 'password');
    };

    const togglePasswordConfirme = () => {
      setPasswordContifermeType(prevType => prevType === 'password' ? 'text' : 'password');
    };

  return (
    <>
     
      
      <main className="w-full h-[calc(100vh)] bg-white flex justify-center items-center">
        <div className="md:w-[50%] w-0 h-full bg-[#2563EB] ">
          <div className="h-[60px] w-full flex gap-x-3 p-4 items-center">
            <Image src="/svg/logowhite.svg" width={35} height={35} alt="My logo" />
            <p className="text-white font-medium text-lg ">ProjectFlow</p>
          </div>
          <div className="w-full h-[calc(100%-60px)] flex p-4 justify-center items-center">
            <Image src="/assets/authBanner1.c7c634cd.png" width={700} height={700} alt="My SVG" />
          </div>
        </div>
        <div className="w-full md:w-[50%] bg-white h-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6   w-[95%] md:w-[60%] md:max-w-[400px]  mt-12 mx-auto p-2" action="#">
             
             <div className="w-full h-[30px] flex flex-col  gap-y-2">
              <h5 className="text-3xl md:text-2xl font-semibold text-gray-900">Sign up for an  Account</h5>
             
            </div>
  
       
            <div className="relative w-full my-4  h-[55px]">
         <Input
             {...register("email")}
             type="email"
             className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  h-[55px] block w-full p-3 "
             placeholder="Email Adress"  />
          <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p>
        </div>
        <div className="relative w-full my-4   h-[55px]">
        <Input  
             {...register("password")}
             type={passwordInputType} 
             placeholder="password" 
             className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[55px] p-3 "  />
               <button
                  onClick={togglePassword}
                  type="button"
                  className="w-4 h-4 absolute right-[20px] top-[25%] text-gray-500">
                  <Eye />
                </button>
            <p className='mt-1 text-sm text-red-600'>{errors.password?.message}</p>
        </div>
        <div className="relative w-full my-4  h-[55px]">
        <Input
              {...register("confirmPassword")}
               type={passwordContifermeType}  
               placeholder="Confirm Password"
               className=" border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  h-[55px] w-full p-3 "  />
                 <button
                  onClick={togglePasswordConfirme}
                  type="button"
                  className="w-4 h-4 absolute right-[20px] top-[25%] text-gray-500">
                  <Eye />
                </button>
              <p className='mt-1 text-sm text-red-600'>{errors.confirmPassword?.message}</p>
        </div>
          <AbdullahButton
              className={buttonVariants({size :'lg' , variant :'rukia'})}
              isLoading ={mutation.isLoading}
              type ="submit"
           >
          Create my account
         </AbdullahButton>
        
    </form>
    <div className="relative w-[95%] my-4 md:w-[60%] md:max-w-[400px]  mx-auto ">
           <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
        <div className="relative flex justify-center text-xs uppercase">
           <span className="bg-background px-2 text-muted-foreground">
              Or continue with
           </span>
        </div>
        </div>
    <AbdullahButton
              //build the loding state in here
              onClick={async () =>  await signIn("github")}
              className={cn(buttonVariants({size :'lg' , variant :'secondary'}) , "w-[95%] md:max-w-[400px] md:w-[60%] my-4  mx-auto gap-x-4 p-4 flex justify-center ")}
              isLoading ={false}
           >
             <Image src="/assets/github.png" alt="github" width={20} height={20} />
             continue with github
         </AbdullahButton>
           <div className="text-sm font-medium text-gray-500 w-[95%] md:w-[60%] my-4  mx-auto ">
              Have an account? <Link href="/" className="text-blue-500 hover:underline ">log in</Link>
           </div>
</div>

      </main>
    </>
  );
};

export default Page;