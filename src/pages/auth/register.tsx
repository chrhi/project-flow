import { Button } from "@mui/material";
import { type NextPage } from "next";
import Head from "next/head";
import {  useRef } from "react";




const Page: NextPage = () => {

 

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)




  

  return (
    <>
      <Head>
        <title>sonatrach</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-full min-h-screen bg-gray-50 flex justify-center items-center ">
        
         <div className="w-[400px] xl:w-[500px] min-h-[300px] h-fit bg-white rounded-lg shadow flex gap-y-4 flex-col p-4 ">
          <div className="w-full h-[70px] flex items-center gap-4">
            <p className="text-gray-900 text-2xl ">signup for free account</p>
          </div>
         
          <form className={`w-full  flex transition-all h-fit flex-col p-4 `}>
            <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
                   email
            </label>
            <input
              ref={emailRef}
              type="email"
              name="titre"
              id="titre"
              autoComplete="titre"
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset  sm:text-sm sm:leading-6  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
             <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
                   password
            </label>
            <input
               ref={passwordRef}
              type="password"
              name="password"
              id="password"
             
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset  sm:text-sm sm:leading-6  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
              <label htmlFor="titre" className="block text-sm font-medium leading-6 text-gray-900">
                  confirme  password
            </label>
            <input
               ref={passwordRef}
              type="password"
              name="password-confirme"
              id="password-confirme"
             
              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset  sm:text-sm sm:leading-6  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
            />
            <Button
               className="!inline-flex my-4  !gap-x-2 !normal-case   !w-full !justify-center !rounded-md  !bg-gradient-to-r !from-sky-500 !to-indigo-600 !text-white  !px-4 !py-2 !text-lg    !hover:bg-gray-300 !focus:outline-none !focus:ring-2 !focus:ring-gray-500 !focus:ring-offset-2 !focus:ring-offset-gray-500"
            >
              sign up
            </Button>
          </form>

         
          <Button 
           className="!inline-flex  !gap-x-2 !normal-case   !w-full !justify-center !rounded-md bg-gray-900  !px-4 !py-2 !text-lg  !text-white  hover:bg-gray-700 !focus:outline-none !focus:ring-2 !focus:ring-gray-500 !focus:ring-offset-2 !focus:ring-offset-gray-500"
          >
            signup with github
          </Button>
         </div>
      </main>
    </>
  );
};

export default Page;