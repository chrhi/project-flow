/* eslint-disable @typescript-eslint/no-floating-promises */
import { Menu, Transition } from '@headlessui/react'
import { MailOpen } from 'lucide-react'
import { Fragment, useState , useEffect } from 'react'
import { AbdullahButton , buttonVariants } from '~/components/used/AbdullahButton'
import { openInvitationModel } from '~/store/messages-popup'
import { api } from '~/utils/api'
import Image from 'next/image'
import type { JoinRequest } from '@prisma/client'
import { toast } from 'react-hot-toast'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

interface Props {
  inisialInvites : number
}

export default function Invitation({inisialInvites}:Props) {

  const [isEmpty , setIsEmpty] = useState(true)

  const [data , setData] = useState<JoinRequest[]>([])

  const [inisialInvitesNumber , setInisialInvitesNumber] = useState<number>(0)

  const setIsOpen = openInvitationModel(state => state.setIsOpen)

  const setId = openInvitationModel(state => state.setId)
  
  api.notificatioRouter.getJoinRequestsOfUser.useQuery(undefined , {
    onSuccess : (data) => {
        if(data.length > 0 ){
          console.log(data)
          setData(data)
          setIsEmpty(false)
          return
        }

        return
       
    },
    onError : () => {
      toast.error("something went wrong")
    }
  })

  const mutation = api.notificatioRouter.reduceNotifications.useMutation()

  const handleClick = (id : string) => {
    setId(id)
    setIsOpen(true)
  }

   useEffect(() => {

    setInisialInvitesNumber(inisialInvites)
  }, [inisialInvites])
  
  const handleReduceInvitations = () => {
    setInisialInvitesNumber(0)
    mutation.mutate({type :"INVITATION"})
  }
 


  return (
    <div className="  text-right z-[100]">
    <Menu as="div"
    
    className="relative z-[100]  inline-block text-left">
 
      <div className='h-[60px] w-[20px] flex justify-center items-center'>
  
      <Menu.Button
       onClick={handleReduceInvitations}
        className={`${buttonVariants({variant : "ghost" , size : "sm"})} relative`} >
        {inisialInvitesNumber > 0 ? 
         <div className='bg-blue-500 rounded-full absolute flex justify-center items-center w-4 h-4 top-[0] right-[0]'>
         <span className='text-white text-xs '>{inisialInvitesNumber}</span>
          </div>
         : 
       null
       }
       
         <MailOpen  className='w-5 h-5 text-[#64748B]'/>
      </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
     
          <Menu.Items className="absolute z-[100]  right-0 top-12  w-[290px] origin-top-right divide-y divide-gray-100  bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
        
                
              
                          {isEmpty ?
                          <div className="px-1 py-1 w-full h-[300px] flex justify-center items-center z-[100] ">
                            <div className='w-full h-full flex flex-col items-center gap-y-4 justify-center'>
                                <Image 
                                       src="/assets/no-invites.png"
                                       alt="there is no join requests"
                                       width={70} height={70} /> 
                                <p className='text-xl font-semibold text-gray-900'>No Invites</p>
                            </div> 
                          </div>
                          :
                        
                            <div className='w-full h-[300px] overflow-y-auto flex flex-col  items-start '>
                                   <p className='text-lg font-semibold text-gray-900 m-4 '> Invites</p>
                            {
                              data.map(item => (
                                <Menu.Item>
                                  {({ active }) => (
                                      <div
                                      onClick={() => handleClick(item.id)}
                                      className='flex gap-x-2 items-center p-4  w-full  hover:bg-gray-100 cursor-pointer justify-start h-[60px]'>
                                          <Avatar className='w-[30px] h-[30px]'>
                                               <AvatarImage src={ item.senderAvatar ||  "/assets/avatar.png"} alt="@abdullah" />
                                               <AvatarFallback>AB</AvatarFallback>
                                          </Avatar>
                                       <h1 className='text-gray-900 text-sm'>{item.senderName || item.senderEmail } invated you to join  his organization</h1>
                                      </div>
                                  )}
                               </Menu.Item>
                              ))
                            }
                            
                           
                               
                          
                        
                            </div>
                          }
                         
            
             
             
         
          
          </Menu.Items>
      
      </Transition>
      
    </Menu>
    </div>
  )
                }