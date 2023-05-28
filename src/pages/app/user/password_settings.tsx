import { type NextPage } from "next";
import Head from "~/components/common/Head";
import { Header } from "~/components/header/Header";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { api } from "~/utils/api";
import { useEffect , useState } from "react";
import { getUserMetadata } from "~/lib/MetaData";
import  toast  from "react-hot-toast";


const Page: NextPage = () => {

  const [inputs , setInputs ] = useState({
    password : "",
    newPassword : "",
    confirmNewPassword : ""
  })
  
  const mutation = api.userRouter.updateUserPassword.useMutation({
    onSuccess(data) {
      toast.success("your password has been updated successfully")
    },
    onError(){
      toast.error("failed to update password")
    }
  })

  const handleSubmit = () => {
    if(inputs.newPassword !== inputs.confirmNewPassword){
      toast.error("passwords should match")
    }
    mutation.mutate({
      userId : getUserMetadata(),
      password : inputs.password , 
      newPassword : inputs.newPassword
    })
  }



  return (
    <>
      <Head />
    
      <Header />

      <main className=" custopn-page-height max-w-7xl  items-center pt-8 flex flex-col w-full bg-gray-100 ">
        <div className="w-full h-[70px] flex justify-center items-start  flex-col px-8">
          <h1 className="text-3xl font-semibold text-gray-900 ">Password Settings</h1>
          <p className="text-lg  text-gray-700 " >By changing your password, all of your active sessions will be logged out. </p>
        </div>

        <div className='  w-full max-w-5xl  p-4 mx-auto rounded-lg   h-fit min-h-[300px] flex flex-col  my-4   bg-white '>
        
        <div className="flex  w-full flex-col  gap-y-2  items-start gap-x-2">
                   <p>Current Password</p>
                   <input value={inputs.password} type="text"
                    onChange={({target}) => setInputs({...inputs , password : target.value })}
                   className="px-4 py-1.5 h-[40px] max-w-[70%] rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full" />
         </div>
         <div className="flex gap-x-8 w-full h-[60px] items-center">

              <div className="flex  w-[50%] flex-col gap-y-2  items-start gap-x-2">
                   <p>New Password</p>
                   <input value={inputs.newPassword} type="text"
                    onChange={({target}) => setInputs({...inputs , newPassword : target.value })}
                   className="px-4 py-1.5 h-[40px] max-w-[70%] rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full" />
              </div>

               <div className="flex  w-[50%] flex-col gap-y-2  items-start gap-x-2">
                   <p>Confirm New Password</p>
                   <input value={inputs.confirmNewPassword} type="text"
                    onChange={({target}) => setInputs({...inputs , confirmNewPassword : target.value })}
                   className="px-4 py-1.5 h-[40px] max-w-[70%] rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition ease-in  w-full" />
               </div>


         </div>
         
             <div className="w-full h-[50px] items-center justify-start flex ">
                 <AbdullahButton 
                 onClick={handleSubmit}
                 isLoading={mutation.isLoading}
                 className={`${buttonVariants({size:"sm", variant:'primary'})} font-semibold`}>
                        save changes
                 </AbdullahButton>
             </div>
        </div>
      </main>
    </>
  );
};

export default Page;