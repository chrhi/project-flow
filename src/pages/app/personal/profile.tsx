/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import logo from "~/assets/logo.png"
import Image from "next/image"
import { Button } from "@mui/material";


const style ={
    input :"mt-2 block  transition  ease-in-out  w-full rounded-md  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
}


const Page: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Sonatrach</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </Head>
      <main className="  min-h-screen w-full bg-gray-50 ">
           <Header />
            <div className=" w-[100%] flex flex-col items-center mt-3 p-6 xl:p-8  gap-y-4 ">
            <div className='md:w-[70%] w-full xl:w-[900px] flex flex-col  h-fit bg-white rounded-lg shadow-lg'>
    <div className='w-full flex flex-col  lg:flex-row min-h-[400px] h-fit '>
        <div className='lg:w-[20%] w-full h-full flex flex-col items-center px-4 gap-y-4 pt-4'>
            <p className='text-gray-400 text-lg  '>photo profile</p>
            <Image src={logo} alt='profile'   width={60}
                  height={60}  />
           <button
           className="inline-block bg-white rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
           >
            change
           </button>
        </div>
        <div className='lg:w-[80%] w-full h-full flex flex-col items-start  p-4 sm:px-8'>
            <label className='text-gray-400 text-lg my-2 ' >first name</label>
            <input className={style.input}  value={"abdullah"} />
            <label className='text-gray-400 text-lg my-2 ' >last name</label>
            <input className={style.input}  value={"somwthing"}  />
            <label className='text-gray-400 text-lg my-2 ' >company name</label>
            <input className={style.input} value={"how"}  />
            <label className='text-gray-400 text-lg my-2 ' >phone</label>
            <input className={style.input}  />
          
        </div>
    </div>
    <div className='bg-white h-[70px] w-full items-center flex sm:justify-end justify-center px-4'>
    <Button 
  
    variant="contained"  
    className="rounded  !text-white text-lg  bg-gradient-to-r from-sky-500 to-indigo-600" >
     edit my profile
    </Button>
    </div>
    </div>
             
            </div>
      </main>
    </>
  );
};

export default Page;