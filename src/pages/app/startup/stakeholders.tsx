import { type NextPage } from "next";
import Head from "next/head";
import AddStakeHolder from "~/components/common/AddStakeHolder";
import { Row } from "~/components/common/Row";
import { Sidebar } from "~/components/ui/Sidebar";
import { TableHeader } from "~/components/ui/TableHeader";
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
      <main className=" min-h-screen flex w-full bg-gray-50 ">
       <Sidebar />
       <div className="ml-[16rem] flex flex-col items-center  custom-width h-fit min-h-screen">
{/*       
       all the contenet goes in here */}
      
    <div className='w-full h-[50px] flex items-center justify-between  p-8 my-4 '>
         <div>
              <h1 className='font-bold text-gray-900 text-2xl '>startup/stakeholders </h1>
        </div>
              <AddStakeHolder />
    </div>

    <TableHeader />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
    <Row />
        {/* this is the end of the page */}
       </div>
     
      </main>
    </>
  );
};

export default Page;