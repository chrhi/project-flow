import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import { ProjectStart } from "~/components/home/ProjectStart";
import { Reminder } from "~/components/home/Reminder";



const Page: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Alpha app</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

      </Head>
      <main className="  min-h-screen w-full bg-gray-50 ">
           <Header />
          

            <div className="container mx-auto flex flex-col p-4 xl:p-16 gap-y-4 ">
            <div className="w-full flex items-center my-4 gap-x-8">
              <Reminder />
             
            </div>
                  <ProjectStart />
                 
            </div>
             
         
           
      </main>
    </>
  );
};

export default Page;