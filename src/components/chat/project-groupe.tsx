import type  { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '@tremor/react'
import { useRouter } from 'next/router'
import { cn } from '~/lib/utils'
import { useSession } from 'next-auth/react'
import { storeChatPartnerId  , getChatPartnerId} from '~/lib/data-in-cookies'
import { block } from 'million/react'

interface chatContactAbdullahProps {
  id : string ,
  image : string , 
  imageType : string , 
  title : string , 
  description : string , 
  isUnseenMessages : boolean 
}

const FlowImage = (image : string, type : string) => {

    if(type === "COLOR"){
      return <div className='w-[50px] h-[50px] rounded-[50%] '>
         <div className='bg-purple-500 rounded-[50%] w-full h-full'>
  
         </div>
      </div>
    }else{
    return (  <div className='w-[50px] h-[50px] flex items-center rounded-[50%] '>
    <span className='text-[40px]'>{image}</span>
  </div>)
    }
  
  
  
  }


const ProjectGroupe: FC<chatContactAbdullahProps> = ({image  , imageType, title , description ,isUnseenMessages , id}) => {

  const session = useSession()

  const router = useRouter()

  const handleClick = () => {
    router.push(`/app/chat`)
    storeChatPartnerId({
      id 
    })
    
    
  }
 
  return <div
            onClick={handleClick}
            className={cn("w-full h-[60px] px-4  cursor-pointer my-2 hover:bg-gray-100  flex items-center justify-start gap-x-2 ",{
              "bg-sky-50" : getChatPartnerId() === id
            }
           )}>
           {FlowImage(image , imageType )}
           <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                <h3 className='truncate text-sm text-gray-600 '>{title}</h3>
                <h3 className={ `truncate text-sm ${isUnseenMessages ? "text-gray-900 font-semibold" : "text-gray-600"}    ` }>{description} </h3>
           </div>
          
</div>
}

export default ProjectGroupe