import type { Project, User } from "@prisma/client";
import type { FC } from 'react'
import Image from 'next/image';
import { Card , CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useRouter } from "next/router";
import { ProjectReducer } from "~/store/flow-router/selected-project";
import { setoreProjectMetaData } from "~/lib/MetaData";
import { GripVertical } from "lucide-react";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { AlgeriaformatDate } from "~/utils/formate/AlgeriaFormate";


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
  

interface HomwPageFlowAbdullahProps {
    project : Project
}

const HomwPageFlow: FC<HomwPageFlowAbdullahProps> = ({project}) => {

    const router = useRouter();
    const  setProject = ProjectReducer(state => state?.setProject)

    const handleRouting = () => {
        setoreProjectMetaData({ project_id: project?.id });
        setProject({project})
        router.push("/app/project/simple/brief");
      };
    


  return   <Card
  onClick={handleRouting}
  className={`w-[100%] transition duration-500 border-none transform hover:-translate-y-1  max-w-[300px] h-[400px]     cursor-pointer flex flex-col items-start gap-y-2 shadow-lg hover:shadow-sky-200 hover:shadow-2xl min-h-[50px] rounded-xl bg-white my-4 `}

>
  <CardHeader className='w-full'>
    <div className='w-full flex items-center justify-between'>
      <div className='w-[90%] flex items-center justify-start gap-x-4'>
        {FlowImage(project.image, project.imagetype)}
        <CardTitle className={`text-[#2F3349] text-xl font-medium  `}>{project.title}</CardTitle>
      </div>
     
    </div>
  </CardHeader>
  <CardContent className='w-full'>
  <CardDescription className={`   h-[80px] overflow-hidden`}>
      {project.description}
  </CardDescription>  
 <DropdownMenuSeparator className={`rounded-lg bg-gradient-to-r  from-blue-500 to-sky-500 mt-6 mb-4 h-1 w-full `} /> 
    {/* in here goes the department and who is assigned to */}
    <div className={`w-full flex justify-between items-center my-2 h-[50px]`}>
      {AssignedPeaple(JSON.parse(project.team as string))}
      <div className='w-[200px] h-[50px] flex gap-x-2 items-center justify-end'>
        <div
          className={`w-4 h-4 rounded-[50px]`}
          style={{
            border: `${project.tagColor} 2px solid`
          }}
        />
        <p className='text-gray-700 text-sm truncate'>{project.tag}</p>
      </div>
    </div>
  
    {/* in here goes the status and the due date */}
    <div className={`w-full  flex  justify-between h-[100px]`}>
      <div className='w-[50%] h-[100px] flex flex-col items-start justify-start gap-y-2'>
        <h4 className='text-sm text-gray-500'>Due date</h4>
        <p className='text-md font-medium  text-[#2F3349] '>
          {project.isOnGoing ? "on going" : AlgeriaformatDate(project?.dueDate || new Date())}
        </p>
      </div>
      <div className='w-[50%] h-[100px] flex flex-col items-end justify-start gap-y-2'>
        <h4 className='text-sm  text-gray-500 '>Current phase</h4>
        <p className='text-md  text-[#2F3349] font-medium '>{project.currentPhase}</p>
      </div>
    </div>
  </CardContent>
</Card>
}

export default HomwPageFlow