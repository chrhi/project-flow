import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { Scope_plan_Form } from "~/components/forms/planning/Scope_plan_Form";


const Page: NextPage = () => {

  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <PlanningSideBar />
       <Scope_plan_Form />
      </main>
    </>
  );
};

export default Page;