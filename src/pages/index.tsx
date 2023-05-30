import { type NextPage } from "next";
import { type  FormEvent , useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { userReducer } from "~/store/userReducer";
import { useRouter } from "next/router";
import { storeUserMetadata } from "~/lib/MetaData";
import { NotAuthHeader } from "~/components/header/NotAuthHeader";
import { api } from "~/utils/api";
import Cookies from "js-cookie";


type input = {
  email : string ,
  password : string , 
}

const Page: NextPage = () => {

  const set_user = userReducer(state => state.set_user)
 


  const router = useRouter()

  const [formData , setFormData] = useState<input>({
    password : "",
    email : "",
  })

  const mutation = api.userRouter.verifyUser.useMutation({
    onSuccess : async  (data) =>  {
     
      Cookies?.set("abdullah-access-token" , data.jwt)
      storeUserMetadata({user_id : data.id})
      set_user({email : data.email as string , name : data.name as string   , photo : data.photo as string , lastName : data.lastName || "" })
      await router.push("/app")
      console.log(data)
    },
    onError(error){
      toast.error("something went wrong")
      console.log(error)
    }
  })
  const handleSubmit = (e : FormEvent) => {
    e.preventDefault()
    if(formData.email === "" ||formData.password === "" ){
     
       toast.error("all faileds are required")
       return
    }
    mutation.mutate({
      email : formData.email ,
      password : formData.password
    })
  
  
  }

  

  return (
    <>
     <NotAuthHeader  />

      <main className=" w-full custom-hieght-navbar bg-white flex justify-center pl-16  items-center  ">
        
      <div className="w-[50%] max-w-md p-4 z-[999] bg-white border shadow-2xl border-gray-200 rounded-md  sm:p-6 md:p-8 ">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-semibold text-gray-900 ">Login </h5>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your rmail</label>
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
      
        <AbdullahButton
           className={buttonVariants({size :'lg' , variant :'rukia'})}
        
           isLoading ={mutation.isLoading}
          onClick={(e :FormEvent) => handleSubmit(e)}
      >
        Sign into your account
      </AbdullahButton>

        <div className="text-sm font-medium text-gray-500 ">
        Not registered? <Link href="/auth/register" className="text-blue-500 hover:underline ">Create an account</Link>
        </div>
        {/* <div className="text-sm font-medium text-gray-500 ">
        or if you have an invitation? <Link href="/auth/invitation" className="text-blue-500 hover:underline ">use my invite</Link>
        </div> */}

    </form>
</div>

      </main>
    </>
  );
};

export default Page;