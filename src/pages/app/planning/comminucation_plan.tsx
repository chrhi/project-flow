import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { Comunication_form } from "~/components/forms/planning/Comunication_form";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";



const Page: NextPage = () => {

  return (
    <>
    
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <PlanningSideBar />
      <Comunication_form />
      </main>
    </>
  );
};

export default Page;