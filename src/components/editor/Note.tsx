import { FileText } from 'lucide-react'
import { useState, type FC } from 'react'
import { AlgeriaformatDate } from '~/utils/formate/AlgeriaFormate'
import { useRouter } from 'next/router'



interface NoteAbdullahProps {
  noteId : string , 
  title : string,
  createdAt : Date , 
  authorName : string , 
  authorEmail : string
}

const NoteElement: FC<NoteAbdullahProps> = ({title , createdAt , authorEmail , authorName, noteId}) => {

    const router = useRouter()

    const [isLoading , setIsLoading ] = useState<boolean>(false)

    const handleRouting = async  () => {
         setIsLoading(true)
         await router.push(`/app/simple-project/notes/${noteId}`)
         setIsLoading(false)
    }


  return <div
    onClick={async () =>{
        if(isLoading === true) return 
        await handleRouting()}}
    className={`w-[95%] mx-auto cursor-pointer hover:bg-gray-50 rounded-lg p-3  h-[50px] flex items-center gap-x-2 ${isLoading ? "bg-gray-50" : "bg-white"}`}>
   <FileText className="w-8 h-8 text-blue-500 " />
    <div className='max-w-[90%]  w-[100px] flex flex-col items-start justify-center'>
        <p className='text-md font-semibold text-gray-800 truncate'>{title}</p>
        <span className='text-xs text-gray-400 truncate '>created at {AlgeriaformatDate(createdAt)} by {" "}{authorName}{" "}{authorEmail}</span>
    </div>
  </div>
}

export default NoteElement