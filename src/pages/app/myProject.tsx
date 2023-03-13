import { type NextPage } from "next";
import Head from "next/head";
import { Chain } from "~/components/common/Chain";
import { Header } from "~/components/common/Header";

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
      <main className=" min-h-screen w-full bg-gray-50 ">
           <Header />
      <div className="container mx-auto xl:p-4 ">
        <h1 className="text-gray-800 font-bold text-2xl text-start ml-4 mt-8  " >Contrôlez et configurez votre projet</h1>
        <p className="text-gray-300 text-md ml-4 mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta, fuga nostrum </p>
        <div className="w-[80%] xl:w-[1060] mx-auto gap-x-8  rounded-lg min-h-[400px] h-fit flex justify-center items-center my-2">
          <Chain path={`/app/startup`} name="startup" selected  />
          <Chain path={`/app/planning/scope`} name="planning" />
          <Chain path={`/app/startup`} name="controlling" />
          <Chain path={`/app/startup`} name="executing" />
          <Chain path={`/app/startup`} name="close" />
            {/* <Chain /> */}
        {/* <div className='z-10 absolute  top-0 -left-4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob '  />
        <div className='z-10 absolute top-0 -right-4 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-xl opacity-25  animate-Blob'  />
        <div className='z-10 absolute -bottom-8 -left-20 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-Blob'  /> */}
        </div>
      </div>
      </main>
    </>
  );
};

export default Page;