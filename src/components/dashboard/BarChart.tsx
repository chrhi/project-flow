import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
  {
    name: "Amphibians",
    "Number of threatened species": 2488,
  },
  {
    name: "Birds",
    "Number of threatened species": 1445,
  },
  {
    name: "Crustaceans",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};



function BarChartAbdullah() {
  return (
     <Card>
    <Title>Number of species threatened with extinction (2021)</Title>
  
    <BarChart
      className="mt-6 w-full"
      data={chartdata}
      index="name"
      categories={["Number of threatened species"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={30}
    />
  </Card>
  )
}

export default BarChartAbdullah