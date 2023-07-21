import type  { FC } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '@tremor/react'
import { useRouter } from 'next/router'
import { cn } from '~/lib/utils'
import { use_is_current_page } from '~/utils/navigation-helper'

interface chatContactAbdullahProps {
  id : string ,
  image : string , 
  name : string , 
  lastMessage : string , 
  isUnseenMessages : boolean 
}

const ChatContact: FC<chatContactAbdullahProps> = ({image , name , lastMessage ,isUnseenMessages , id}) => {


  const router = useRouter()

  const handleClick = () => {
    router.push(`/app/chat/${id}`)
    
    
  }
 
  return <div
            onClick={handleClick}
            className={cn("w-full h-[60px] px-4  cursor-pointer my-1 hover:bg-gray-100  flex items-center justify-start gap-x-2 ",
            `${use_is_current_page(`/app/chat/${id}`) ? "bg-sky-900" :" bg-white" }`)}>
            <Avatar className='w-[50px] h-[50px]'>
                   <AvatarImage src={image || "/assets/avatar.png"} alt="@abdullah" />
                   <AvatarFallback>AB</AvatarFallback>
            </Avatar>
           <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                <h3 className='truncate text-sm text-gray-600 '>{name}</h3>
                <h3 className={ `truncate text-sm ${isUnseenMessages ? "text-gray-900 font-semibold" : "text-gray-600"}    ` }>{lastMessage} </h3>
           </div>
            <div className='w-[50px] h-full flex items-center justify-center'>
                 <Badge className='rounded-xl ' color='blue'>new</Badge>
            </div>
</div>
}

export default ChatContact