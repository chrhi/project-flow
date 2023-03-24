import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { Cost_Managment_form } from "~/components/forms/planning/Cost_Managment_form";


const Page: NextPage = () => {

  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <PlanningSideBar />
      <Cost_Managment_form />
      </main>
    </>
  );
};

export default Page;