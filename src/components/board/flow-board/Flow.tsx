import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { openTasksShowUp } from '~/store/open-models';










function Flow({avatar , description , tag , title , id , index}  : Project &{ index : number}) {

  const setIsOpen  = openTasksShowUp(state => state.setShowModel)
  const setId = openTasksShowUp(state => state.setId)

 
  return (
    <Draggable  draggableId={id} index={index}>
        {(provided , snapshot) => (
            <Card 
            onClick={() => {
              setId(id)
              setIsOpen(true)
            }}
            className={`w-[90%] max-w-[300px]   flex flex-col items-start gap-y-2   shadow-lg h-fit min-h-[50px] rounded-lg bg-white my-4 
             ${snapshot.isDragging ? "shadow-xl " : "" }`}
            {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
             <CardHeader>
             
                 <CardTitle>{title}</CardTitle>
                
               
             </CardHeader>
             <CardContent className='w-full'>
                  <CardDescription>
                       {description}
                 </CardDescription>
             </CardContent>   
            </Card>
        )}
     </Draggable>
  )
}

export default Flow