import { type NextPage } from "next";
import { Header } from "~/components/header/Header";
import PhasesSideBar from "~/components/sideBars/PhasesSideBar";



const Page: NextPage = () => {

  return (
    <>
    <Header />
      <main className=" w-full custom-hieght-navbar bg-white  ">
       <h1>this is the busness case </h1>
      </main>
    </>
  );
};

export default Page;