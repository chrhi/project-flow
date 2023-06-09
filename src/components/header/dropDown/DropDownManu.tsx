/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import {userReducer} from "~/store/userReducer"
import { ProjectReduer } from '~/store/project-reducer'
import Cookies from 'js-cookie';
import { header_page_Reducer , PAGES } from '~/store/app-reducer/headerReducer'
import { RemoveProjectManager , removeAll } from '~/lib/MetaData';
import { Settings } from 'lucide-react'



export default function DropDowsMenu() {
  //initializes hooks
   const router = useRouter()
  const {email , first_name , last_name , photo   } = userReducer()
  const { currentPhase , projectTitle } = ProjectReduer()
  const current_page = header_page_Reducer(state => state.current_page)
  const set_current_page = header_page_Reducer(state => state.set_current_page)
 
  const handleLogout = () => {
    Cookies.remove("abdullah-access-token")
    RemoveProjectManager()
    removeAll()
    window.location.reload()
  }

  return (
    <div className="fixed text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[60px] w-[50px] flex justify-center items-center'>
          <Menu.Button >
             <Settings className='w-5 h-5 text-gray-700 dark:text-white cursor-pointer ' />
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
        <Menu.Items className="absolute z-[100]  right-0 top-12  w-[280px] origin-top-right divide-y divide-gray-100  bg-white dark:bg-black shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1  z-[100] ">
          <Menu.Item>
              {({ active }) => (
                <div
                 className={`
                ${ active ? 'bg-gray-50 ' : ""}
                w-full min-h-[45px] h-fit border-b cursor-pointer flex overflow-x-hidden items-center gap-x-1`}
                onClick={() => {
                  router.push("/app/user/profile")
                  set_current_page({payload:PAGES.PROFILE})
                }  }
                >
                  <div className='rounded-[50%] w-[50px] h-[50px] bg-blue-500 '>
                  <img  className='rounded-[50%] w-[50px] h-[50px] ' src={photo} alt="profile pic" />
                  </div>
                  <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                  <h3 className='truncate text-md text-gray-600 dark:text-white'>{email }</h3>
                  <h3 className='truncate text-md text-gray-600  dark:text-white '>{ first_name + " " + last_name || "unknown"}</h3>
                </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className='w-full min-h-[45px] h-fit border-b flex flex-col justify-center p-4 gap-y-1 '>
                   <h3 className='truncate text-lg font-bold  text-gray-800 dark:text-white '>{ "project : "}</h3>
                  <h3 className='truncate text-md text-gray-600 dark:text-white '>{projectTitle}</h3>
                  <h3 className='truncate text-md font-semibold  text-gray-800 '>{ "current phase : "}</h3>
                  <h3 className='truncate text-md text-gray-600 dark:text-white '>{ currentPhase}</h3>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => {
                  router.push("/app/user/profile")
                  set_current_page({payload:PAGES.PROFILE})
                }  }
                  className={`
                  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'}
                  ${
                    current_page === PAGES.PROFILE ? 'bg-blue-200 text-gray-900 font-semibold ' : ' '  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              
              My profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() =>{
                  set_current_page({payload:PAGES.PASSWORD})
                  router.push("/app/user/password_settings")  }}
                  className={`
                  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'}
                  ${
                    current_page === PAGES.PASSWORD ? 'bg-blue-200 text-gray-900 font-semibold ' : ''  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>

              
            Password settings
                </button>
              )}
            </Menu.Item>           
           <Menu.Item>
              {({ active }) => (
                <button
                onClick={() => {
                  set_current_page({payload:PAGES.SETTINGS})
                  router.push("/app/user/settings") } }
                  className={
                 `     ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'}
                    ${
                    current_page === PAGES.SETTINGS ? 'bg-blue-200 text-gray-900 font-semibold ' : ''  
                  }  group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`
                }
                >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                 </svg>

                Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={handleLogout}
                  className={`  ${ active ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900' : 'text-gray-900 dark:text-white'} group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                 </svg>

             Sign out
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