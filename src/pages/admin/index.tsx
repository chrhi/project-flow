import { type NextPage } from "next";
import { HeaderAdmin } from "~/components/header/admin-header/HeaderAdmin";
import {  LineChart } from "@tremor/react";
import MaxWidthWrapper from "~/components/layout/MaxWidthWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

const chartdata = [
  {
    date: 0,
    "Nombre d'utilisateurs": 0,
  
  },
  {
    date: 7,
    "Nombre d'utilisateurs": 1,
   
  },
  {
    date: 12,
    "Nombre d'utilisateurs": 1,
   
  },
  {
    date: 22,
    "Nombre d'utilisateurs": 2,
   
  },
  {
    date: 27,
    "Nombre d'utilisateurs": 4,
   
  },
  //...
];

const Page: NextPage = () => {

  return (
    <>
    <HeaderAdmin />
      <main className=" w-full custom-hieght-navbar bg-stone-50  flex justify-start items-center  ">
        <MaxWidthWrapper>
        <div className="w-full flex flex-wrap gap-8 ">

        <Card  >
      <CardHeader>
        <CardTitle>Taux de croissance des utilisateurs</CardTitle>
        <CardDescription>
        La croissance des utilisateurs est cruciale pour évaluer le succès d'une entreprise et prendre des décisions stratégiques en matière de développement et de marketing.
        </CardDescription>
      </CardHeader>
    
          <CardContent>
        
             <LineChart
                   className="mt-6"
                   data={chartdata}
                   index="date"
                   categories={["Nombre d'utilisateurs"]}
                   colors={["blue"]}
                   yAxisWidth={40}
             />
          </CardContent>
      
     
    </Card>
      
        </div>
        </MaxWidthWrapper>
      </main>
    </>
  );
};

export default Page;
