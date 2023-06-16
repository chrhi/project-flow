/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import {
  AreaChart,
} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

 const performance = [
    {
      date: "2021-01-01",
      Sales: 900.73,
      Profit: 173,
      Customers: 73,
    },
    {
      date: "2021-02-12",
      Sales: 1000.74,
      Profit: 174.6,
      Customers: 74,
    },
    // ...
    {
      date: "2021-04-03",
      Sales: 1000,
      Profit: 782,
      Customers: 682,
    },
    {
      date: "2021-01-01",
      Sales: 900.73,
      Profit: 173,
      Customers: 73,
    },
    {
      date: "2021-01-02",
      Sales: 1000.74,
      Profit: 174.6,
      Customers: 74,
    },
    // ...
    {
      date: "2021-03-13",
      Sales: 882,
      Profit: 682,
      Customers: 652,
    },
    {
      date: "2021-01-09",
      Sales: 90.73,
      Profit: 173,
      Customers: 73,
    },
    {
      date: "2021-01-02",
      Sales: 1000.74,
      Profit: 740.6,
      Customers: 164,
    },
    // ...
    {
      date: "2021-03-13",
      Sales: 882,
      Profit: 682,
      Customers: 682,
    },
  ];
  
  // Basic formatters for the chart values
  const dollarFormatter = (value: number) =>
    `$ ${Intl.NumberFormat("us").format(value).toString()}`;
  
  const numberFormatter = (value: number) =>
    `${Intl.NumberFormat("us").format(value).toString()}`;
  

  
function BedgetStatus() {
    const [selectedKpi, setSelectedKpi] = useState("Sales");
  
    // map formatters by selectedKpi
    const formatters: { [key: string]: any } = {
      Sales: dollarFormatter,
      Profit: dollarFormatter,
      Customers: numberFormatter,
    };

    
  return (

      <Card >
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>
          You made 265 sales this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
      <AreaChart
        
        data={performance}
        index="date"
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className=" h-52 lg:h-64 mt-6"
      />

      </CardContent>
    </Card>
   
  )
}

export default BedgetStatus