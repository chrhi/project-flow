import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { GripVertical } from 'lucide-react';
import { DropdownMenuSeparator } from '~/components/ui/dropdown-menu';
import type { Project, User } from "@prisma/client";
import { useRouter } from 'next/router';
import { setoreProjectMetaData } from '~/lib/MetaData';
import Image from 'next/image';
import { AlgeriaformatDate } from '~/utils/formate/AlgeriaFormate';
import { LayoutReducer , type  layoutValues } from '~/store/flow-router/Layouts';
import { ProjectReducer } from '~/store/flow-router/selected-project';

const FlowImage =  (image : string, type : string)  => {
  if (type === "IMAGE") {
    return (
      <div className='w-[50px] h-[50px] rounded-[50%] '>
        <Image
          src={image}
          alt="project image"
          width={50}
          height={50}
        />
      </div>
    );
  }

  if (type === "COLOR") {
    return (
      <div className='w-[50px] h-[50px] rounded-[50%] '>
        <div className='bg-purple-500 rounded-[50%] w-full h-full'></div>
      </div>
    );
  } else {
    return (
      <div className='w-[50px] h-[50px] flex items-center rounded-[50%] '>
        <span className='text-[40px]'>{image}</span>
      </div>
    );
  }
};

const AssignedPeaple = (team : User[]) => {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {team.map((item) => (
        <img
          key={item.id + "image"}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src={item?.image || "/assets/avatar.png"}
          alt={`${item.name} image `}
        />
      ))}
    </div>
  );
};

function Flow({
 ...project
}: Project & { index: number }) {

  const {  image, team, description, imagetype, title, id, index, currentPhase, dueDate, tag, tagColor,isOnGoing} = project
  const router = useRouter();
  const  setProject = ProjectReducer(state => state?.setProject)
  const layout = LayoutReducer(state => state?.layout) || 'BIG'
  const ICON : layoutValues = 'ICONS'
  const BIG : layoutValues = 'BIG'
  const SMALL : layoutValues = 'SMALL'

  const handleRouting = () => {
    setoreProjectMetaData({ project_id: id });
    setProject({project})
    router.push("/app/project/simple/brief");
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Card
          onClick={handleRouting}
          className={`w-[100%] transition duration-500 transform hover:-translate-y-1  ${layout === BIG ? 'max-w-[400px] h-[400px] ' : layout === SMALL ?  'max-w-[290px] h-[300px]' : 'max-w-[290px] h-[110px]' }  cursor-pointer flex flex-col items-start gap-y-2 shadow-lg hover:shadow-sky-200 hover:shadow-2xl min-h-[50px] rounded-lg bg-white my-4 ${
            snapshot.isDragging ? "shadow-xl" : ""
          }`}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <CardHeader className='w-full'>
            <div className='w-full flex items-center justify-between'>
              <div className='w-[90%] flex items-center justify-start gap-x-4'>
                {FlowImage(image, imagetype)}
                <CardTitle className={`text-[#2F3349]  ${layout === SMALL ? 'text-lg font-medium ' : layout === ICON ? "text-lg" : "text-xl" }`}>{title}</CardTitle>
              </div>
              <div {...provided.dragHandleProps} className='w-[10%] h-6'>
                <GripVertical className='text-gray-500 cursor-pointer w-6 h-6' />
              </div>
            </div>
          </CardHeader>
          <CardContent className='w-full'>
          <CardDescription className={` ${layout === ICON ? 'hidden' : ""} ${layout === BIG ? 'h-[120px] ' : 'h-[80px]'} overflow-hidden`}>
              {description}
          </CardDescription>  
         <DropdownMenuSeparator className={`rounded-lg bg-gradient-to-r ${ layout === ICON ? "hidden" : ""} from-blue-500 to-sky-500 mt-6 mb-4 h-1 w-full `} /> 
            {/* in here goes the department and who is assigned to */}
            <div className={`w-full  ${ layout === ICON ? "hidden" : "flex"} justify-between items-center my-2 h-[50px]`}>
              {AssignedPeaple(JSON.parse(team as string))}
              <div className='w-[200px] h-[50px] flex gap-x-2 items-center justify-end'>
                <div
                  className={`w-4 h-4 rounded-[50px]`}
                  style={{
                    border: `${tagColor} 2px solid`
                  }}
                />
                <p className='text-gray-700 text-sm truncate'>{tag}</p>
              </div>
            </div>
          
            {/* in here goes the status and the due date */}
            <div className={`w-full  ${layout === BIG ? 'flex' : 'hidden'}  justify-between h-[100px]`}>
              <div className='w-[50%] h-[100px] flex flex-col items-start justify-start gap-y-2'>
                <h4 className='text-md font-medium text-[#2F3349]'>Due date</h4>
                <p className='text-sm'>
                  {isOnGoing ? "on going" : AlgeriaformatDate(dueDate || new Date())}
                </p>
              </div>
              <div className='w-[50%] h-[100px] flex flex-col items-end justify-start gap-y-2'>
                <h4 className='text-md font-medium text-[#2F3349]'>Current phase</h4>
                <p className='text-sm'>{currentPhase}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

export default Flow