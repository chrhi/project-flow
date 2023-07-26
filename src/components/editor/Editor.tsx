import type  EditorJS from '@editorjs/editorjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import type  { z } from 'zod'
import { uploadFiles } from '~/lib/uploadthing'
import { PostValidator } from '~/lib/validators/note'
import TextareaAutosize from 'react-textarea-autosize'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { getProjectMetaData } from '~/lib/MetaData'
import { AbdullahButton, buttonVariants } from "~/components/used/AbdullahButton";
import { cn } from "~/lib/utils";


type FormData = z.infer<typeof PostValidator>

interface EditorProps {
  isBreif? : boolean,
  blocks? : any
}

 export const Editor: React.FC<EditorProps> = ({isBreif = false , blocks}) => {

  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
     
      title: '',
      content: null,
    },
  })
  const ref = useRef<EditorJS>()
  const _titleRef = useRef<HTMLTextAreaElement>(null)
 
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const [isRouterLoading, setIsRouterLoading] = useState<boolean>(false)

 
 

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
        placeholder: 'Type here to start writing...',
        inlineToolbar: true,
        data: {  blocks: blocks? blocks : [] },
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
  }, [])

  useEffect(() => {
    if (Object.keys(errors).length) {
      for (const [_key, value] of Object.entries(errors)) {
        value
        toast.error((value as { message: string }).message)
      }
    }
  }, [errors])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    const init = async () => {
      await initializeEditor()

      setTimeout(() => {
        _titleRef?.current?.focus()
      }, 0)
    }

    if (isMounted) {
      init()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  const mutation = api.noteRouter.create_note.useMutation({
    onSuccess : () => {
      
      router.push("/app/simple-project/notes")
  
    },
    onError : () => {
    
        toast.error("some thing went wrong please try again")
    }
  })

  const handleCancel = () => {
    setIsRouterLoading(true)
    router.push("/app/simple-project/notes")
    setIsRouterLoading(false)
  }

  async function onSubmit(data: FormData) {
 
    const blocks = await ref.current?.save()

    mutation.mutate({
      projectId : getProjectMetaData(),
      title : data.title,
      content : blocks
    })
  }

  if (!isMounted) {
    return null
  }

  const { ref: titleRef, ...rest } = register('title')

  return (
    <>
   <div className="w-full h-[70px] flex items-center justify-between">
  <h2 className="text-xl my-4 font-bold text-start text-gray-500">Create Note</h2>
  <div className="w-[200px] flex h-full items-center gap-x-4 justify-end pr-4">
    <AbdullahButton
    onClick={handleCancel}
    isLoading={isRouterLoading}
    disabled={mutation.isLoading}
    className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>
      cancel
    </AbdullahButton>
    <AbdullahButton 
       isLoading={mutation.isLoading}
      disabled={isRouterLoading}
       form='abdullah-post-form'
       className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
      save
    </AbdullahButton>
  </div>
</div>

<div>
  <div className="w-full p-4 flex bg-white rounded-lg">
    <form id="abdullah-post-form" className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="prose prose-stone dark:prose-invert w-full">
        <TextareaAutosize
          ref={(e) => {
            titleRef(e);
            // @ts-ignore
            _titleRef.current = e;
          }}
          {...rest}
          placeholder="Title"
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

