import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { Scope_plan_Form } from "~/components/forms/planning/Scope_plan_Form";
import { RessourceAllocation } from "~/components/planning/RessourceAllocation";


const Page: NextPage = () => {

  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <PlanningSideBar />
      <RessourceAllocation />
      </main>
    </>
  );
};

export default Page;