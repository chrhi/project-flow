/* eslint-disable react/no-unescaped-entities */
import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
// import  PrayerTimer  from "~/components/home/PrayerTimer";
import { ProjectStart } from "~/components/home/ProjectStart";
import { Reminder } from "~/components/home/Reminder";
import dynamic from 'next/dynamic';
const PrayerTimes = dynamic(() => import('~/components/home/PrayerTimer'), {
  ssr: false,
});



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
            <div className=" w-[100%] flex flex-col mt-3 p-6 xl:p-8  gap-y-4 ">
               <div className='w-full h-[50px] flex md:justify-start justify-center    items-center'>
    
                <h1 className='text-3xl  font-semibold  ' >Salut 👋 c'est le tableau de bord et votre espace personnel</h1>
               </div>
            <div className="w-full flex items-center  gap-x-8">
              <Reminder />
              <PrayerTimes />
            </div>
              <ProjectStart />
            </div>
      </main>
    </>
  );
};

export default Page;