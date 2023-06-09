import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/header/Header";
import DocsSideBar from "~/components/docsComponents/DocsSideBar";
import { DocumentBuilder } from "~/components/docsComponents/DocumentBuilder";


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
      <main className=" custopn-page-height  flex w-full justify-center container  items-center bg-gray-50 ">
        <DocsSideBar  />
       <div
        className=" ml-[20rem] w-[80%] h-full p-8 "
       >
       {/* build the pdf builder component */}
       <DocumentBuilder title="Project charter " description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab tempora excepturi iure, aperiam commodi et! Officiis qui eum, maiores quasi repudiandae reiciendis quidem sint perspiciatis suscipit, vero in alias?" />
       <DocumentBuilder title="Srakholders" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab tempora excepturi iure, aperiam commodi et! Officiis qui eum, maiores quasi repudiandae reiciendis quidem sint perspiciatis suscipit, vero in alias?" />
       </div>
      </main>
    </>
  );
};

export default Page;