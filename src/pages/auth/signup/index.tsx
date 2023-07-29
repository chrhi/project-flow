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


  return (
    <>
     
      <NotAuthHeader  />
      <main className=" w-full custom-hieght-navbar bg-white flex justify-center pl-16 items-center  ">
        
      <div className="w-[50%] max-w-md p-4 bg-white border shadow-2xl border-gray-200 rounded-md  sm:p-6 md:p-8 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4" action="#">
      <h5 className="text-xl font-semibold text-gray-900 ">Sign Up for an Account </h5>
       
        <div>
            <input
             {...register("email")}
             type="email"
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
             placeholder="Email Adress"  />
          <p className='mt-1 text-sm text-red-600'>{errors.email?.message}</p>
        </div>
        <div>
            <input  
             {...register("password")}
             type="password"  
             placeholder="password" 
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
            <p className='mt-1 text-sm text-red-600'>{errors.password?.message}</p>
        </div>
        <div>
            <input  
              {...register("confirmPassword")}
               type="password"  
               placeholder="Confirm Password"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
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
    <div className="relative">
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
              className={cn(buttonVariants({size :'lg' , variant :'secondary'}) , "w-full flex justify-center ")}
              isLoading ={false}
           >
             github
         </AbdullahButton>
           <div className="text-sm font-medium text-gray-500 ">
              Have an account? <Link href="/" className="text-blue-500 hover:underline ">log in</Link>
           </div>
</div>

      </main>
    </>
  );
};

export default Page;