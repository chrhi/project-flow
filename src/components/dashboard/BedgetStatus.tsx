/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import {
  AreaChart,
  Card,
  Flex,
  Icon,
  Text,
  Title,

} from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";

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
   <div className='w-full duration-500   bg-white rounded-2xl h-fit '>
      <div className=" p-8 !border-none">
      <div className="md:flex justify-between">
        <div>
          <Flex
            justifyContent="start"
            className="space-x-0.5"
            alignItems="center"
          >
            <Title> Performance History </Title>
            <Icon
              icon={InformationCircleIcon}
              variant="simple"
              tooltip="Shows day-over-day (%) changes of past performance"
            />
          </Flex>
          <Text> Daily increase or decrease per domain </Text>
        </div>
      
      </div>
      <AreaChart
        
        data={performance}
        index="date"
        categories={[selectedKpi]}
        colors={["blue"]}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={56}
        className="h-64 mt-6"
      />
    </div>
   </div>
  )
}

export default BedgetStatus