import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";
import { Scope_plan_Form } from "~/components/forms/planning/Scope_plan_Form";


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
      <Header />
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <PlanningSideBar />
       <Scope_plan_Form />
      </main>
    </>
  );
};

export default Page;