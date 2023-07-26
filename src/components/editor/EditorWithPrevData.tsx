import type  EditorJS from '@editorjs/editorjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import { uploadFiles } from '~/lib/uploadthing'
import TextareaAutosize from 'react-textarea-autosize'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton'
import { cn } from '~/lib/utils'
import { Save, Trash2, Undo2 } from 'lucide-react'

interface EditorProps {
  title : string ,
  blocks : any,
  noteId : string 
}

 export const EditorWithPrevData: React.FC<EditorProps> = ({blocks , title , noteId}) => {

  const router = useRouter()
 
  const ref = useRef<EditorJS>()

 
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const [Title, setTitle] = useState<string>(title)

  const [content, setContent] = useState<any>([])

  const [isRouterLoading, setisRouterLoading] = useState<boolean>(false)


 

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    //@ts-ignore
    const Header = (await import("@editorjs/header")).default
     //@ts-ignore
     const Embed = (await import("@editorjs/embed")).default
     //@ts-ignore
    const Table = (await import('@editorjs/table')).default
     //@ts-ignore
    const List = (await import('@editorjs/list')).default
     //@ts-ignore
    const Code = (await import('@editorjs/code')).default
     //@ts-ignore
    const LinkTool = (await import('@editorjs/link')).default
     //@ts-ignore
    const InlineCode = (await import('@editorjs/inline-code')).default
     //@ts-ignore
    const ImageTool = (await import('@editorjs/image')).default

       //@ts-ignore
       const CheckList  = (await import('@editorjs/checklist')).default
       //@ts-ignore
      const Delimiter  = (await import('@editorjs/delimiter')).default
       //@ts-ignore
      const Quote  = (await import('@editorjs/quote')).default
       //@ts-ignore
      const CodeBox  = (await import('@bomdi/codebox')).default


    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
      
        inlineToolbar: true,
        data: {  blocks:  content },
        tools: {
          header: Header,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: '/api/link',
            },
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                async uploadByFile(file: File) {
                  // upload to uploadthing
                
                  const [res] = await uploadFiles({endpoint :"imageUploader", files : [file]})

                  return {
                    success: 1,
                    file: {
                      url: res?.fileUrl,
                    },
                  }
                },
              },
            },
          },
          embed: Embed,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          checkList : CheckList ,
          delimiter : Delimiter ,
          codeBox : CodeBox,
          quote : Quote
        },
      })
    }
  }, [content])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
     
      setContent(blocks?.blocks)
      setTitle(title)
    }
  }, [blocks , title])

  useEffect(() => {
    const init = async () => {
      await initializeEditor()
    }

    if (isMounted) {
      init()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  const updateMutation = api.noteRouter.update_note.useMutation({
    onSuccess : () => {
      toast.success("The note has been updated successfully")
    },
    onError : () => {
      toast.error("The note has been deleted ")
    }
  })

  const deleteMutation = api.noteRouter.delete_note.useMutation(
    {
      onSuccess :async  () => {
       await  router.push("/app/simple-project/notes")
        setisRouterLoading(false)
      },
      onError : () => {
        toast.error("faild to delete the data")
        setisRouterLoading(false)
      }
    }
  )


  const handleSubmit = async  () =>{
    const blocks = await ref.current?.save()
    updateMutation.mutate({
        noteId,
        title : Title,
        content : blocks
      })
  }

  
  const handleDelete = async  () =>{
    setisRouterLoading(true)
    deleteMutation.mutate({noteId })
  }

  const handleReturnBack = async () => {
    setisRouterLoading(true)
     await router.push("/app/simple-project/notes")
    setisRouterLoading(true)

  }

  if (!isMounted) {
    return null
  }



  return (
    <>
    <div className="w-full h-[70px] flex items-center justify-between">
          <h2 className="text-xl my-4 font-bold text-start text-gray-500">Create Note</h2>
      <div className="w-[200px] flex h-full items-center gap-x-4 justify-end pr-4">
         <AbdullahButton
           isLoading={isRouterLoading}
           disabled = {updateMutation.isLoading || deleteMutation.isLoading || isRouterLoading}
           onClick={handleReturnBack}
           className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
         
            {!isRouterLoading&&  <Undo2 className='w-4 h-4 text-gray-900'/> }
           </AbdullahButton>
           
           <AbdullahButton
           isLoading={deleteMutation.isLoading}
           disabled = {updateMutation.isLoading || deleteMutation.isLoading || isRouterLoading}
           onClick={handleDelete}
           className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
            {!deleteMutation.isLoading &&  <Trash2  className='w-4 h-4 text-gray-900'/> }
           </AbdullahButton>
           <AbdullahButton 
              isLoading={updateMutation.isLoading }
              disabled = {updateMutation.isLoading || deleteMutation.isLoading || isRouterLoading}
              
              onClick={handleSubmit}
              className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
                {!updateMutation.isLoading &&  <Save  className='w-4 h-4 text-gray-900'/> }
           
           </AbdullahButton>
     </div>
   </div>
  
<div>
  <div className="w-full p-4 flex bg-white rounded-lg">
    <form id="abdullah-post-form" className="w-full" >
      <div className="prose prose-stone dark:prose-invert w-full">
        <TextareaAutosize
        
     
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          value={Title}
          className="block w-full resize-none border-0 px-1 text-2xl font-semibold bg-transparent text-gray-900 placeholder:text-gray-800 focus:ring-0 sm:py-1.5 sm:text-md sm:leading-6 !focus:outline-none !border-none"
        />
        
        <div id="editor" className="min-h-[400px] w-full" />
        <p className="text-sm text-gray-500">
          Use{' '}
          <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
            Tab
          </kbd>{' '}
          to open the command menu.
        </p>
      </div>
    </form>
  </div>
</div>

</>
  )
}

