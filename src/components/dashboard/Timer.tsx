import {
  BadgeDelta,
  Card,
  Flex,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";

export default function Timer() {



  return (

    <div className="w-[50%] p-8 bg-white flex items-center gap-x-4 rounded-2xl h-[200px]">
       <div className="w-full h-full !border-none">
      <Flex alignItems="start">
        <div>
          <Text>how much reminds </Text>
          <Metric>$ 12,699</Metric>
        </div>
        <BadgeDelta deltaType="moderateIncrease">13.2%</BadgeDelta>
      </Flex>
      <Flex className="mt-4">
        <Text className="truncate">68% ($ 149,940)</Text>
        <Text> full project bedget $ 220,500 </Text>
      </Flex>
      <ProgressBar percentageValue={15.9} className="mt-2" />
    </div>
    </div>
  )
}
