import React from 'react';
import { DragDropContext, Droppable, type DropResult } from 'react-beautiful-dnd';
import type { Project } from '@prisma/client';
import { block } from 'million/react';
import Flow from './Flow';
// import dynamic from 'next/dynamic'
// const Flow = dynamic(() => import('./Flow'), {
//   ssr: false,
// })

type PropsType = {
  projects: Project[];
};

function Board({ projects }: PropsType) {
  const handleDragEnd = (result: DropResult) => {
    // Handle drag and drop logic here
  };

  return (
    <DragDropContext onDragEnd={(result) => handleDragEnd(result)}>
      <div className="w-full p-6 h-full">
        <Droppable droppableId="board">
          {(provided, snapshot) => (
            <div
              className="w-full justify-start flex gap-y-4 gap-x-10 flex-wrap h-fit"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {projects.map((item, index) => (
                <Flow key={item?.id} index={index} {...item} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

const BoardBlock = block(Board);

export default BoardBlock;
