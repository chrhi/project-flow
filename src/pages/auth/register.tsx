/* eslint-disable @typescript-eslint/no-floating-promises */
import { type NextPage } from "next";
import {  FormEvent, useRef , useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Header } from "~/components/common/Header";
import { api } from "~/utils/api";
import { AbdullahButton, buttonVariants } from "~/components/ui/buildingBlocks/AbdullahButton";
import { useRouter } from "next/router";
type input = {
  email : string ,
  password : string , 
  confirmPassword : string 
}

const Page: NextPage = () => {
  const router = useRouter()
  const [formData , setFormData] = useState<input>({
    password : "",
    email : "",
    confirmPassword : ""
  })

  const mutation = api.userRouter.createUser.useMutation({
    onSuccess() {
      toast("user has been created  seccusfully",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       router.push("/auth/login")
    },
    onError(){
      toast("some thing went wrong",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
    },
    
  })

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    if(formData.email === "" ||formData.password === "" ){
      toast("all faileds are required",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       return
    }
    if(formData.password !== formData.confirmPassword){
      toast("passwords should match",{
        className:" !text-white !bg-blue-500",
        hideProgressBar: true,
       })
       return
    }
    mutation.mutate({
      email : formData.email ,
      password : formData.password
    })

  }

  return (
    <>
     
      <Header  notAuth/>
      <main className=" w-full custom-hieght-navbar bg-gray-50 flex justify-center items-center  ">
        
      <div className="w-[50%] max-w-sm p-4 bg-white border shadow-xl border-gray-200 rounded-md  sm:p-6 md:p-8 ">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 ">Sign up </h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
            <input
            onChange={(e) => setFormData({...formData , email : e.target.value})}
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
            <input  
            onChange={(e) => setFormData({...formData , password : e.target.value})}
            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div>
            <label htmlFor="Confirmpassword" className="block mb-2 text-sm font-medium text-gray-900">confirme your password</label>
            <input  
             onChange={(e) => setFormData({...formData , confirmPassword : e.target.value})}
            type="password" name="Confirmpassword" id="Confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
      
      
          <AbdullahButton
           className={buttonVariants({size :'lg' , variant :'rukia'})}
        
           isLoading ={mutation.isLoading}
          onClick={(e :FormEvent) => handleSubmit(e)}
      >
        create my account
      </AbdullahButton>
        <div className="text-sm font-medium text-gray-500 ">
            You have an account ? <Link href="/auth/login" className="text-blue-500 hover:underline ">log in</Link>
        </div>
    </form>
</div>

      </main>
    </>
  );
};

export default Page;