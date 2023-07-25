import type  EditorJS from '@editorjs/editorjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import type  { z } from 'zod'
import { uploadFiles } from '~/lib/uploadthing'
import { type  PostCreationRequest, PostValidator } from '~/lib/validators/note'
import TextareaAutosize from 'react-textarea-autosize'



import toast from 'react-hot-toast'
import { block } from 'million/react'

type FormData = z.infer<typeof PostValidator>

interface EditorProps {
  subredditId: string
}

 const Editor2: React.FC<EditorProps> = ({ subredditId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      subredditId,
      title: '',
      content: null,
    },
  })
  const ref = useRef<EditorJS>()
  const _titleRef = useRef<HTMLTextAreaElement>(null)
 
  const [isMounted, setIsMounted] = useState<boolean>(false)


 

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
        data: { blocks: [] },
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
       
        toast.error('Something went wrong.')
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

  async function onSubmit(data: FormData) {
    const blocks = await ref.current?.save()

    const payload: PostCreationRequest = {
      title: data.title,
      content: blocks,
      subredditId,
    }

    // createPost(payload)
  }

  if (!isMounted) {
    return null
  }

  const { ref: titleRef, ...rest } = register('title')

  return (
    <div className='w-full p-4 flex  bg-white rounded-lg  '>
      <form
        id='subreddit-post-form'
        className='w-full'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='prose prose-stone dark:prose-invert w-full'>
        <TextareaAutosize
            ref={(e) => {
              titleRef(e)
              // @ts-ignore
              _titleRef.current = e
            }}
            {...rest}
            placeholder='Title'
            className='block w-full resize-none border-0 px-1 text-2xl font-semibold bg-transparent text-gray-900 placeholder:text-gray-800 focus:ring-0 sm:py-1.5 sm:text-md sm:leading-6 !focus:outline-none !border-none'
          />
          
          <div id='editor' className='min-h-[400px] w-full ' />
          <p className='text-sm text-gray-500'>
            Use{' '}
            <kbd className='rounded-md border bg-muted px-1 text-xs uppercase'>
              Tab
            </kbd>{' '}
            to open the command menu.
          </p>
        </div>
      </form>
    </div>
  )
}

export const Editor = block(Editor2)