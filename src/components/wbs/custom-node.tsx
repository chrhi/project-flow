/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      
        <div className="ml-2">
          <div className="text-lg font-bold text-neutral-900">{data.name}</div>
          <div className="text-neutral-700 text-sm ">{data.job}</div>
      
         </div>

      <Handle type="target" position={Position.Top} className="w-8 !bg-blue-500" />
      <Handle type="source" position={Position.Bottom} className="w-8 !bg-blue-500" />
    </div>
  );
}

export default memo(CustomNode);