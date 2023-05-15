/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useEffect, useState , useCallback } from 'react';
import { FormContainer } from '~/components/ui/used/FormContainer';
import { FormHead } from '~/components/ui/used/FormHead';
import { Treepopup } from '~/components/planning/tree/Treepopup';
import { type NextPage } from "next";
import { Header } from "~/components/common/Header";
import { PlanningSideBar } from "~/components/sideBars/PlanningSideBar";

import ReactFlow , {
  MiniMap,
  Controls,
  Background,
  useReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { AbdullahButton  , buttonVariants} from '~/components/ui/buildingBlocks/AbdullahButton';

const initialNodes = [

];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const flowKey = 'example-flow';
const getNodeId = () => `randomnode_${+new Date()}`;


const Page: NextPage = () => {
  
  const [isOpen , setIsOpen] = useState<boolean>(false)
  const [isOpenAlert , setIsOpenAlert] = useState<boolean>(true)
  const [isPopUpOpen , setIsPopUpOpen ] = useState<boolean>(false)

 
  // const set_loading = loading_Reducer(state => state.set_isLoading)

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [rfInstance, setRfInstance] = useState(null);
  const { setViewport } = useReactFlow();

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onSave = useCallback(() => {
    if (rfInstance) {
      const flow = rfInstance.toObject();
      localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow =  () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));

      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onAdd = useCallback(({title , text , shape } : {title: string , text: string , shape : string }) => {
    //in here we have to make a pop up
    const newNode = {
      id: getNodeId(),
      data: {
         label: title,


         },

      position: {
        x: 10,
        y: 10,
      },
    };
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);
   
 
//   className="inline-flex justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"

  return (
 <>
    
      <Header />
      <main className={` custopn-page-height  flex w-full   ${isOpenAlert ? "bg-gray-50" : "bg-white"}`} >
       <PlanningSideBar setIsOpen ={setIsOpenAlert} isOpen = {isOpenAlert} />
       <FormContainer className ={` ${isOpenAlert ? "ml-[20rem]" : "m-[0]"}`}>
      <Treepopup setIsOpen ={setIsOpen} isOpen ={isOpen} refetch={() => {console.log("")}} parent_id={233}/>
     
   
      <div className='w-[95%] mx-auto h-[50px] bg-white gap-x-4 py-4 flex justify-end px-4 items-center '>
     
        {/* first button */}
    <AbdullahButton 
       onClick={onSave}
       className={buttonVariants({variant:"secondary"})}>
       save
      </AbdullahButton>
        {/* second button */}
      <AbdullahButton 
      onClick={onRestore}
      className={buttonVariants({variant:"secondary"})}>
        restore
      </AbdullahButton>

      <AbdullahButton 
      onClick={() => setIsPopUpOpen(true)}
      className={buttonVariants({variant:"primary"})}>
        create new task
      </AbdullahButton>
      </div>
    <div id="treeWrapper" className='mx-auto bg-white ' style={{ width: '95%', height: '100%' }}>

    
    <Treepopup
      isOpen = {isPopUpOpen}
      setIsOpen={setIsPopUpOpen} 
      onAdd={onAdd}
      />
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={setRfInstance}
    >

      <div className="save__controls">
     
      </div>
      <MiniMap  zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
   
    </div>
    </FormContainer>
      </main>
      </>
  );
};

export default Page;