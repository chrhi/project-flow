import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Gem, HelpCircle, Plus, Settings, ShieldAlert, Users, Wallet } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
  LogOut,
  Lock,
  User,
} from "lucide-react"
import {  buttonVariants } from '~/components/used/AbdullahButton'
import { useSession,  signOut } from "next-auth/react"
import { api } from '~/utils/api'
import { Organization } from '@prisma/client'


export default function DropDowsMenu() {
 
   const router = useRouter()
  
   const session= useSession()

   const [orgSelected , setOrgSelected] = useState("")

   const [orgs , setOrgs] = useState<Organization[]>([])

  

  api.userRouter.getUser.useQuery(undefined , {
    onSuccess : (user) => {
      setOrgSelected(user?.selectedOrganizationId || "")
    }
  })

   api.organizationRouter.getUserOrganization.useQuery(undefined , {
    onSuccess : (orgs) => {
      //@ts-ignore
     setOrgs(orgs)
    }
  })
 
 

  return (
    <div className=" text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[60px] w-[20px] flex justify-center items-center'>
          <Menu.Button className={`${buttonVariants({variant : "ghost" , size : "sm"})}`} >
           <Settings  className='w-5 h-5 text-neutral-800' />
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
        <Menu.Items className="absolute z-[100]  right-0 top-12  w-[300px] origin-top-right divide-y divide-gray-100  bg-white dark:bg-black shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1  z-[100] ">
          <Menu.Item>
              {({ active }) => (
                <div
                 className={`
                ${ active ? 'bg-gray-50 ' : ""}
                w-full min-h-[30px] h-fit border-b cursor-pointer flex overflow-x-hidden items-center gap-x-1`}
                onClick={() => {
                  router.push("/app/user/profile")
                 
                }  }
                >
                 <Avatar>
                  <AvatarImage src={session.data?.user.image || ""} alt="@abdullah" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                  <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                  <h3 className='truncate text-sm text-gray-600 dark:text-white'>{session.data?.user.email}</h3>
                  <h3 className='truncate text-sm text-gray-600  dark:text-white '>{session.data?.user.name} {session.data?.user.lastName}</h3>
                </div>
                </div>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
             <div className='w-full min-h-[50px] h-fit bg-white flex border-b flex-col items-start '>
                  <div className='flex gap-2 items-center p-4  w-full hover:bg-gray-100 cursor-pointer justify-start h-[45px]'>
                     <h1 className='text-neutral-800 text-md '>Organizations</h1>
                   </div>
                   {
                    orgs.map(item => {
                      return (
                        <div className='flex gap-x-4 items-center p-4  w-full bg-blue-300 hover:bg-gray-100 cursor-pointer justify-start h-[45px]'>
                           <Avatar className='w-[30px] h-[30px]'>
                             <AvatarImage src={"data:image/png;base64,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"} alt="@abdullah" />
                             <AvatarFallback>AB</AvatarFallback>
                           </Avatar>
                           <h1 className='text-neutral-700 text-sm'>{item?.name}</h1>
                        </div>
                      )
                    })
                   }
             </div>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={async () => await router.push("/app/user/profile")}
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                    <User className="mr-2 h-4 w-4" />
                   My profile
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={async () => await router.push("/app/user/password_settings")}
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                 
                    <Lock className="mr-2 h-4 w-4"  />
                  Password Settings
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={async () => await router.push("/app/user/my-team")}
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                 
                    <Users className="mr-2 h-4 w-4"  />
                  My team
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
              
                onClick={async () => await router.push("/app/user/my-bills")}
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                   
                    <Wallet  className="mr-2 h-4 w-4"/>
                  My bills
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
              
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                    <HelpCircle className="mr-2 h-4 w-4" />
                  Support
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
               
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  
                    <Gem className="mr-2 h-4 w-4 text-blue-500 "/>
                  Discord comunity
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={async () => await signOut()}
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    se déconnecter
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
                }