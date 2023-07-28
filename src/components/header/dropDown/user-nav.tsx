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
import type { Organization } from '@prisma/client'
import { RemoveOrgId, RemoveOrgName, getOrganizationId, storeOrgName, storeOrganizationId } from '~/lib/data-in-cookies'
import toast from 'react-hot-toast'
import type { Session } from 'next-auth'

type Props = {
  serverSession : Session
}


export default function DropDowsMenu({serverSession}:Props) {
 
   const router = useRouter()
  
  

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

  const mutation = api.organizationRouter.updateUserSelectedOrg.useMutation({
    onSuccess :(data) => {

      if(!data || !data?.org || !data?.org?.id || !data?.org?.name ){
        toast.error("some thing went wrong please try again!")
        return 
      }

      storeOrganizationId({org_id : data?.org?.id})
      storeOrgName({org_name : data?.org?.name})

      toast.success(`current selected organization is ${data?.org?.name}`, {
        position: "top-center",
        icon: '🌍',
      })
    }
  })

 
 

  return (
    <div className=" text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[60px] w-[20px] flex justify-center items-center'>
          <Menu.Button className={`${buttonVariants({variant : "ghost" , size : "sm"})}`} >
           <Settings  className='w-5 h-5 text-[#64748B]' />
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
                  <AvatarImage src={serverSession?.user.image || ""} alt="@abdullah" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                  <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                  <h3 className='truncate text-sm text-gray-600 dark:text-white'>{serverSession?.user.email}</h3>
                  <h3 className='truncate text-sm text-gray-600  dark:text-white '>{serverSession?.user.name} {serverSession?.user.lastName}</h3>
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
                        <div
                        onClick={() => mutation.mutate({
                          selected_organization_id : item.id
                        })}
                        key={item.id}
                        className={`flex gap-x-4 items-center p-4  w-full ${getOrganizationId() === item.id ? "bg-blue-300" : null }  hover:bg-gray-100 cursor-pointer justify-start h-[45px]`}>
                           <Avatar className='w-[30px] h-[30px]'>
                             <AvatarImage  src={"data:image/png;base64,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"} alt="@abdullah" />
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
                onClick={async () =>{
                  RemoveOrgId()
                  RemoveOrgName()
                  await signOut()
                }}
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