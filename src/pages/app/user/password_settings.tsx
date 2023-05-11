/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import ReactFlow, { MiniMap, Controls } from 'reactflow';

const WorkBreakdown = () => {
  const [elements, setElements] = useState([
    {
      id: 'root',
      type: 'default',
      data: { text: 'Root Node', color: '#ffffff' },
      position: { x: 0, y: 0 },
    },
  ]);

  const onElementsRemove = (elementsToRemove) => {
    setElements((prevElements) =>
      prevElements.filter((element) => !elementsToRemove.includes(element))
    );
  };

  const onConnect = (params) => {
    const { source, target } = params;
    const newEdge = {
      id: `e${source}-${target}`,
      source,
      target,
    };
    setElements((prevElements) => [...prevElements, newEdge]);
  };

  const onNodeClick = (event, node) => {
    // Handle click event for a node
    console.log('Clicked on node:', node);
  };

  const onAddNode = (sourceNodeId) => {
    const newNodeId = `n${elements.length + 1}`;
    const newNode = {
      id: newNodeId,
      type: 'default',
      data: { text: 'New Node', color: '#ffffff' },
      position: { x: 0, y: 0 },
    };
    const newEdge = {
      id: `e${sourceNodeId}-${newNodeId}`,
      source: sourceNodeId,
      target: newNodeId,
    };
    setElements((prevElements) => [...prevElements, newNode, newEdge]);
  };

  const CustomNode = ({ data }) => {
    return (
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '4px',
          background: data.color,
          padding: '8px',
          cursor: 'pointer',
        }}
        onClick={(event) => onNodeClick(event, data)}
      >
        {data.text}
      </div>
    );
  };

  const nodeTypes = {
    default: CustomNode,
  };

  return (
    <div style={{ height: '600px' }}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkBreakdown;
