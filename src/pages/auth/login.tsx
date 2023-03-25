/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextPage } from "next";
import {  FormEvent, useRef , useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Header } from "~/components/common/Header";
import { api } from "~/utils/api";
import Cookies from 'js-cookie'
type input = {
  email : string ,
  password : string , 
}

const Page: NextPage = () => {

  const [formData , setFormData] = useState<input>({
    password : "",
    email : "",
  })
  const mutation = api.userRouter.login.useMutation({
    onSuccess(data) {
       console.log(data)
      Cookies?.set("abdullah-access-token" , data.jwt)
      window.location.reload()
     
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
        <h5 className="text-xl font-medium text-gray-900 ">Sign in </h5>
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
      
        <button
        disabled={mutation.isLoading}
        type="submit" className="w-full text-white bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        onClick={(e) => handleSubmit(e)}
        >Login to your account</button>
        <div className="text-sm font-medium text-gray-500 ">
            Not registered? <Link href="/auth/register" className="text-blue-500 hover:underline ">Create account</Link>
        </div>
    </form>
</div>

      </main>
    </>
  );
};

export default Page;