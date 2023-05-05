/* eslint-disable react/no-unescaped-entities */
import Button from "@mui/material/Button";
import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import Image from "next/image";

const Page: NextPage = () => {
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

      <main className=" custopn-page-height  justify-center items-center pt-12 flex flex-col w-full bg-gray-50 ">
        <div className="w-full h-[70px] flex justify-center items-start my-8 flex-col px-8">
          <h1 className="text-xl font-semibold text-gray-900 ">Profile's informations</h1>
          <p className="text-lg  text-gray-700 " >this is a dommy data this is going to be displayed in here </p>
        </div>
      <div className='md:w-[70%] w-full xl:w-[900px] flex flex-col  h-fit bg-white rounded-lg shadow-lg'>
    <div className='w-full flex flex-col lg:flex-row min-h-[400px] h-fit '>
        <div className='lg:w-[20%] w-full h-full flex flex-col items-center px-4 gap-y-4 pt-4'>
            <p className='text-gray-400 text-lg  '>photo profile</p>
            <Image src={""} alt='profile'   width={60}
                  height={60}  />
           <button
           className="inline-block bg-white rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
           >
            change
           </button>
        </div>
        <div className='lg:w-[80%] w-full h-full flex flex-col items-start  p-4 sm:px-8'>
            <label className='text-gray-400 text-lg my-2 ' >first name</label>
            <input className={"w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}  />
            <label className='text-gray-400 text-lg my-2 ' >last name</label>
            <input className={" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}    />
            <label className='text-gray-400 text-lg my-2 ' >company name</label>
            <input className={" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}  />
            <label className='text-gray-400 text-lg my-2 ' >phone</label>
            <input className={" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}  />
            <label className='text-gray-400 text-lg my-2 ' >city</label>
            <input className={" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}  />
            <label className='text-gray-400 text-lg my-2 ' >borth day</label>
            <input className={" w-full border border-gray-300 px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding font-normal rounded-lg shadow-sm  transition  ease-in-out focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"}  />
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
      </main>
    </>
  );
};

export default Page;