import { type NextPage } from "next";
import { HeaderAdmin } from "~/components/header/admin-header/HeaderAdmin";
import { Card, LineChart, Title } from "@tremor/react";
import MaxWidthWrapper from "~/components/layout/MaxWidthWrapper";

const chartdata = [
  {
    year: 0,
    "Users Growth Rate": 0,
    "Project Growth Rate": 0,
  },
  {
    year: 7,
    "Users Growth Rate": 1,
    "Project Growth Rate": 1.58,
  },
  {
    year: 12,
    "Users Growth Rate": 1,
    "Project Growth Rate": 1.61,
  },
  {
    year: 22,
    "Users Growth Rate": 2,
    "Project Growth Rate": 1.61,
  },
  {
    year: 27,
    "Users Growth Rate": 4,
    "Project Growth Rate": 1.67,
  },
  //...
];

const Page: NextPage = () => {

  return (
    <>
    <HeaderAdmin />
      <main className=" w-full custom-hieght-navbar bg-stone-50 flex justify-start items-center  ">
        <MaxWidthWrapper>
        <div className="w-full flex flex-wrap gap-8 ">
          
          <Card className="w-[80%] mx-auto h-[400px]">
          <Title>Users Growth Rates </Title>
        <LineChart
              className="mt-6"
              data={chartdata}
              index="year"
              categories={["Users Growth Rate"]}
              colors={["blue"]}
             
              yAxisWidth={40}
             />
            </Card>
      
        </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default Page;