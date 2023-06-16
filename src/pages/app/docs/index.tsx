import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import DocsSideBar from "~/components/docsComponents/DocsSideBar";
import Head from "~/components/common/Head";
import { GeneraleBuilder } from "~/components/docsComponents/generale-builder";

const Page: NextPage = () => {
  
  
 
  return (
    <>
     <Head />
      <Header />
      <main className=" custopn-page-height flex w-full justify-center items-center container  bg-white ">
        <DocsSideBar  />
       <div
        className="ml-[20rem] w-[80%]  grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 h-full gap-4 pt-8 pb-8 "
       >
       {/* build the pdf builder component */}
        <GeneraleBuilder 
          title="Project Charter"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />

        <GeneraleBuilder 
          title="Project Management Plan"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />

        <GeneraleBuilder 
          title="Change Request"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />


        <GeneraleBuilder 
          title="Change Log"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />


        <GeneraleBuilder 
          title="Decision Log"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />

        <GeneraleBuilder 
          title="Process Improvement Plan"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />


        <GeneraleBuilder 
          title="Lessons Learned"
          color=""
          description="this is the project charter"
          phase="Inisiating"
        />
       
       </div>
      </main>
    </>
  );
};

export default Page;