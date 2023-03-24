import { type NextPage } from "next";
import Head from "next/head";
import { Chain } from "~/components/common/Chain";
import { Header } from "~/components/common/Header";
import { useState } from "react";
import { ProjectStarter } from "~/components/common/ProjectStarter";
const Page: NextPage = () => {

  const [hasProjectStart , setHasProjectStart] = useState<boolean>(true)

  return (
    <>
      
      <main className=" min-h-screen w-full bg-gray-50 ">
           <Header />
          {
            
            hasProjectStart ?
            <div className=" mx-auto p-4 ">
            <h1 className="text-gray-800 font-bold text-2xl text-start ml-4 mt-8  " >Contrôlez et configurez votre projet</h1>
            <p className="text-gray-300 text-md ml-4 mt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod soluta, fuga nostrum </p>
            <div className="w-[80%] xl:w-[1060] mx-auto gap-x-8  rounded-lg min-h-[400px] h-fit flex justify-center items-center my-2">
              <Chain path={`/app/startup`} name="démarrage" selected  />
              <Chain path={`/app/planning`} name="planification" />
              <Chain path={`/app/executing`} name="exécution" />
              <Chain path={`/app/controlling`} name="contrôler" />
              <Chain path={`/app/close`} name="fermer" />
            </div>
          </div>
            :
            <ProjectStarter />
          }
     
      </main>
    </>
  );
};

export default Page;