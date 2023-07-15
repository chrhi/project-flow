import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { openTasksShowUp } from '~/store/open-models';
import { ArrowUpNarrowWide, Grid, GripVertical } from 'lucide-react';
import { DropdownMenuSeparator } from '~/components/ui/dropdown-menu';



const FlowImage = () => {


  return <div className='w-[50px] h-[50px] rounded-[50%] '>
            <div className='bg-purple-500 rounded-[50%] w-full h-full'>

            </div>
  </div>
}


const AssignedPeaple = () => {
  
  return (
    <div className="flex -space-x-2 overflow-hidden">
    <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
  </div>
  )
}




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
            className={`w-[100%] max-w-[400px] h-[400px] cursor-pointer  flex flex-col items-start gap-y-2   shadow-lg hover:shadow-sky-200  min-h-[50px] rounded-lg bg-white my-4 
             ${snapshot.isDragging ? "shadow-xl " : "" }`}
             {...provided.draggableProps}  ref={provided.innerRef}
           >
             <CardHeader className='w-full '>

              <div className='w-full flex items-center justify-between'>
                  <div className='w-[90%] flex items-center justify-start gap-x-4'>
                        {FlowImage()}
                       <CardTitle className='text-xl'>{title}</CardTitle>
                  </div>
                 
                     <div   {...provided.dragHandleProps} className='w-[10%] h-6'>
                         <GripVertical    className='text-gray-500 cursor-pointer w-6 h-6 '/>
                     </div>
              </div>

             </CardHeader>
             <CardContent className='w-full '>
                  <CardDescription className=''>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perferendis repudiandae quidem nostrum nam repellat id optio sed labore maiores nobis, minima modi amet blanditiis perspiciatis dolores nihil? Sunt, debitis.
                 </CardDescription>
                 <DropdownMenuSeparator className=' rounded-lg  bg-gradient-to-r from-blue-500 to-sky-500 mt-6 mb-4 h-2 w-full'/>

                 {/* in here goes the depatement and who is assgin to  */}
                 <div className='w-full  flex justify-between h-[50px]'>
                  {AssignedPeaple()}
                    <div className='w-[100px] h-[50px] p-2'>
                          <p className='text-blue-500 text-md font-bold  '>#Reaserch</p>
                    </div>
                 </div>

                 {/* in here goes the status and the due date */}
                 <div className='w-full flex justify-between  h-[100px] '>
                        <div className='w-[50%] h-[100px] flex flex-col items-start justify-start gap-y-2'>
                            <h4 className='text-md font-semibold'>Due date</h4>
                            <p className='text-sm'>On going</p>
                        </div>
                        <div className='w-[50%] h-[100px] flex flex-col items-end justify-start gap-y-2'>
                            <h4 className='text-md font-semibold'>Current phase</h4>
                            <p className='text-sm'>Business case</p>
                        </div>
                 </div>
             </CardContent>   
            </Card>
        )}
     </Draggable>
  )
}

export default Flow