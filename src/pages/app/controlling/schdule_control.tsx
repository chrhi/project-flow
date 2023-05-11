import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Header } from "~/components/common/Header";
import { ControllingSidebar } from "~/components/sideBars/ControllingSidebar";
import { AbdullahTable } from "~/components/ui/used/AbdullahTable";
import { Form } from "~/components/ui/used/Form";
import { FormContainer } from "~/components/ui/used/FormContainer";
import { FormHead } from "~/components/ui/used/FormHead";
import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const Page: NextPage = () => {
  const [isOpen , setIsOpen] = useState<boolean>(true)
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
      <main className=" custopn-page-height  flex w-full bg-gray-50 ">
       <ControllingSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
       <FormContainer className ={` ${isOpen ? "ml-[30rem]" : "ml-[5rem]"}`}>
      <FormHead text="⭐ Schedule Performance Index (SPI) Chart" />
      <Form  >
      <div className="bg-white px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
            <DonutChart
                 className="mt-6 w-[300px]"
                 data={cities}
                 category="sales"
                 index="name"
                 valueFormatter={valueFormatter}
                 colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
              />

            </div>
        </div>
      </div>
   
       </Form>
  </FormContainer>
      </main>
    </>
  );
};

export default Page;