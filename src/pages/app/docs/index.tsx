/* eslint-disable @typescript-eslint/no-misused-promises */
import { type NextPage } from "next";
import Head from "next/head";
import {  useState } from "react";
import { Header } from "~/components/common/Header";
import { FolderIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

const LISTA = [
  {
    name : "start up " , 
    path : "/app/startup"
  },
  {
    name : "planning " , 
    path : "/app/startup"
  },
  {
    name : "executing" , 
    path : "/app/startup"
  },
  {
    name : "controlling" , 
    path : "/app/startup"
  },
  {
    name : "closing" , 
    path : "/app/startup"
  },
]


const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)

  const router = useRouter()
 
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
      <main className=" custopn-page-height  flex w-full justify-center items-center bg-gray-50 ">
      <div className="w-[80%] h-[80%] rounded-lg flex gap-x-4 bg-white shadow-lg p-4 flex-wrap ">

        {
          LISTA.map(item => (
            <div key={item.name} 
            onClick={() => router.push("/app/docs/startUp") }
            className="w-[100px] h-[100px] hover:bg-blue-100 cursor-pointer rounded-lg flex flex-col items-center p-4">
            <FolderIcon className="h-24 w-24 text-blue-300  " />
            <p className="text-sm text-gray-800 font-medium leading-3">{item.name}</p>
          </div>
          ))
        }


      </div>
      </main>
    </>
  );
};

export default Page;