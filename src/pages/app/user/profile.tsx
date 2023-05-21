/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/header/Header";
import Image from "next/image";
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { api } from "~/utils/api";
import { useEffect , useState } from "react";
import { getUserMetadata } from "~/lib/MetaData";
import { toast } from "react-toastify";
import { ImagePickUp } from "~/components/common/ImagePickUp";


const Page: NextPage = () => {

  const [inputs , setInputs ] = useState({
    name : "",
    lastName : "",
    phone : "",
    email : ""
  })
  const [photo , setPhoto ] = useState("")


  const handleSubmit = () => {
   //todo
  }


  return (
    <>
      <Head>
      <title>ProjectFlow</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />

      <main className=" custopn-page-height  items-center pt-8 flex flex-col w-full bg-white ">
        <div className="w-full h-[70px] flex justify-center items-start  flex-col px-8">
          <h1 className="text-3xl font-semibold text-gray-900 ">Profile's informations</h1>
          <p className="text-lg  text-gray-700 " >this is a dommy data this is going to be displayed in here </p>
        </div>
      <div className=' max-w-5xl w-full  h-fit min-h-[300px] flex my-4   bg-white '>
          
          <div className='lg:w-[20%] w-full h-full flex flex-col items-center px-4 gap-y-4 pt-4'>
            <p className='text-gray-400 text-lg  '>photo profile</p>
            <img  src={photo} alt="picture photo" className="w-[80px] h-[80px] rounded-[50%] "/>
          <ImagePickUp setPhoto={setPhoto} />
        </div>
       
          <div className="w-[80%] h-full flex gap-y-4 flex-col p-4 ">
            {/* this is the second div */}
          <div className="w-full h-[50px] flex gap-x-4  items-center justify-between ">
          <div className="flex w-[50%] justify-between  items-center gap-x-2">
                <p>User name :</p>
                <input value={inputs.name } onChange={({target}) => setInputs({...inputs , name : target.value })} className="px-4 py-1.5 h-[40px] max-w-[70%] rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in  w-full" />
            </div>
            <div className="flex  w-[50%] justify-between items-center gap-x-2">
                <p>last name :</p>
                <input value={inputs.lastName } 
                 onChange={({target}) => setInputs({...inputs , lastName : target.value })}
                className="px-4 py-1.5 h-[40px] max-w-[70%] rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in  w-full" />
            </div>
          </div>
          {/* this is the second div */}
           <div className="w-full flex h-[50px] gap-x-4 items-center justify-between ">
              <div className="flex  w-[50%] justify-between  items-center gap-x-2">
                   <p>phone:</p>
                   <input value={inputs.phone} 
                    onChange={({target}) => setInputs({...inputs , phone : target.value })}
                   className="px-4 py-1.5 h-[40px] max-w-[70%] rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in  w-full" />
              </div>
              <div className="flex  w-[50%] justify-between items-center gap-x-2">
                  <p>email :</p>
                  <input value={inputs.email} 
                  
                  className="px-4 py-1.5 text-gray-700  h-[40px] max-w-[70%] rounded-lg outline-none border   transition ease-in shadow-lg w-full" />
               </div>
           </div>
           {/* this is the divided section */}
           <div className="w-full flex  items-center  h-[40px] justify-between ">
            <p className="font-semibold ">OTHER INFORMATION</p>
            <div className="w-[70%]  border-b h-[5px]" />
           </div>
           {/* this is the rest of the Profile */}
           <div className="w-full  flex flex-col gap-y-4 ">
               <div className="flex  w-full justify-between  items-center gap-x-2">
                   <p>city :</p>
                   <input  className="px-4 py-1.5 h-[40px]  rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in  w-[80%]" />
                </div>
                <div className="flex   w-full justify-between  items-center gap-x-2">
                   <p>job title :</p>
                   <input  className="px-4 py-1.5 h-[40px]  rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in w-[80%]" />
                </div>
                <div className="flex  w-full justify-between  items-center gap-x-2">
                   <p>zip code :</p>
                   <input  className="px-4 py-1.5 h-[40px]  rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in  w-[80%]" />
                </div>
                <div className="flex  w-full justify-between  items-center gap-x-2">
                   <p>date of birth :</p>
                   <input  className="px-4 py-1.5 h-[40px]  rounded-lg outline-none border focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-lg transition ease-in  w-[80%]" />
                 </div>
                
           </div>
           <div className="w-full h-[50px] items-center justify-start flex ">
             <AbdullahButton
             onClick={handleSubmit}
             isLoading={false}
               className={buttonVariants({size:"sm", variant:'primary'})}
               >
                        save changes
              </AbdullahButton>
           </div>
          </div>
       </div>
      </main>
    </>
  );
};

export default Page;