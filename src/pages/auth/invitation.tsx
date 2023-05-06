/* eslint-disable react/no-unescaped-entities */
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
  confirmPassword : string ,
  code : string
}

const Page: NextPage = () => {
  const router = useRouter()
  const [formData , setFormData] = useState<input>({
    password : "",
    email : "",
    confirmPassword : "",
    code : ""
  })

  const mutation = api.InvitationRouter.createteamMember.useMutation({
    onSuccess() {
      toast("you are a team member now",{
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
      password : formData.password,
      code : formData.code,
    })

  }

  return (
    <>
     
      <Header  notAuth/>
      <main className=" w-full custom-hieght-navbar bg-gray-50 flex justify-center items-center  ">
        
      <div className="w-[50%] max-w-sm p-4 bg-white border shadow-xl border-gray-200 rounded-md  sm:p-6 md:p-8 ">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 ">Compte d'invitation </h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Votre e-mail</label>
            <input
            onChange={(e) => setFormData({...formData , email : e.target.value})}
            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@company.com" required />
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Votre mot de passe</label>
            <input  
            onChange={(e) => setFormData({...formData , password : e.target.value})}
            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div>
            <label htmlFor="Confirmpassword" className="block mb-2 text-sm font-medium text-gray-900">confirmer votre mot de passe</label>
            <input  
             onChange={(e) => setFormData({...formData , confirmPassword : e.target.value})}
            type="password" name="Confirmpassword" id="Confirmpassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">code d'invitation</label>
            <input
            onChange={(e) => setFormData({...formData , code : e.target.value})}
            type="text" name="code" id="code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="jdfhbhrnfbsjgdbfnshsmabsjs" required />
        </div>
      
      
          <AbdullahButton
           className={buttonVariants({size :'lg' , variant :'rukia'})}
        
           isLoading ={mutation.isLoading}
          onClick={(e :FormEvent) => handleSubmit(e)}
      >
      créer mon compte
      </AbdullahButton>
        <div className="text-sm font-medium text-gray-500 ">
        Vous avez un compte ? <Link href="/auth/login" className="text-blue-500 hover:underline ">connexion</Link>
        </div>
    </form>
</div>

      </main>
    </>
  );
};

export default Page;