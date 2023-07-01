/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { useCallback , useState } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge,    Background, MiniMap, Controls } from 'reactflow';

import 'reactflow/dist/base.css';


import CustomNode from './custom-node';

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: '1',
    type: 'custom',
    data: { title: 'this is a word', description: 'CEO', cost: 400 , level : 1},
    position: { x: 0, y: 50 },
  },
  {
    id: '2',
    type: 'custom',
    data: { title: 'this is a word and it has every thing in it this is a word and it has every thing in it this is a word and it has every thing in it', description: 'Designer', cost: 800 , level : 1 },

    position: { x: -200, y: 200 },
  },
  {
    id: '3',
    type: 'custom',
    data: { title: 'but for how long it is going to work', description: 'Developer', cost: 788 , level : 1 },
    position: { x: 200, y: 200 },
  },
];

const initEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
  },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const [edgeOptions , setEdgeOption] = useState( {
    animated: true,
    type: 'smoothstep',
  })

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
   <div   style={{ height: 600 }}>
     <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      defaultEdgeOptions={edgeOptions}
      fitView
      
    >
         <Background color="#aaa" gap={16} />
      <MiniMap />
      <Controls />
    </ReactFlow>
   </div>
  );
};

export default Flow;