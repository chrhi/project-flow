/* eslint-disable @typescript-eslint/no-floating-promises */
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import {userReducer} from "~/store/userReducer"
// icons 
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import TuneIcon from '@mui/icons-material/Tune';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { header_page_Reducer , PAGES } from '~/store/app-reducer/headerReducer'
import { RemoveProjectManager } from '~/lib/MetaData';



export default function DropDowsMenu() {
  //initializes hooks
   const router = useRouter()
  const {email  } = userReducer()
  const current_page = header_page_Reducer(state => state.current_page)
  const set_current_page = header_page_Reducer(state => state.set_current_page)
 
  const handleLogout = () => {
    Cookies.remove("abdullah-access-token")
    RemoveProjectManager()
    window.location.reload()
  }

  return (
    <div className="fixed text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[60px] w-[50px] flex justify-center items-center'>
      <Menu.Button >
      <SettingsIcon className="!text-gray-800 text-md  " />
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
        <Menu.Items className="absolute z-[100]  right-0 top-12  w-[280px] origin-top-right divide-y divide-gray-100  bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1  z-[100] ">
          <Menu.Item>
              {({ active }) => (
                <div className='w-full min-h-[45px] h-fit border-b  flex overflow-x-hidden items-center gap-x-1'>
                  <div className='rounded-[50%] w-[50px] h-[50px] bg-blue-500 '>
                  <img  className='rounded-[50%] w-[50px] h-[50px] ' src={"https://aniyuki.com/wp-content/uploads/2022/06/aniyuki-schwarz-weis-katzen-anime-37.jpg"} alt="profile pic" />
                  </div>
                  <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                  <h3 className='truncate text-md text-gray-600 '>{email || "mahdi.test1@gmail.com"}</h3>
                  <h3 className='truncate text-md text-gray-600 '>{ "abdullah jsk"}</h3>
                </div>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className='w-full min-h-[45px] h-fit border-b flex flex-col justify-center p-4 gap-y-1 '>
                   <h3 className='truncate text-lg font-bold  text-gray-800 '>{ "projet : "}</h3>
                  <h3 className='truncate text-md text-gray-600 '>{ "create the pfe web site"}</h3>
                  <h3 className='truncate text-md font-semibold  text-gray-800 '>{ "stade actuel : "}</h3>
                  <h3 className='truncate text-md text-gray-600 '>{ "starting up"}</h3>
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
                  ${ active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
                  ${
                    current_page === PAGES.PROFILE ? 'bg-blue-300 text-gray-900' : ' '  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              
                 Mon profil
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() =>{
                  set_current_page({payload:PAGES.PASSWORD})
                  router.push("/app/user/profile")  }}
                  className={`
                  ${ active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
                  ${
                    current_page === PAGES.PASSWORD ? 'bg-blue-300 text-gray-900' : ''  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>

              
                Paramètres de mot de passe
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() =>{
                  set_current_page({payload:PAGES.TEAM})
                  router.push("/app/user/accounts") }}
                  className={`
                  ${ active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
                  ${
                    current_page === PAGES.TEAM ? 'bg-blue-300 text-gray-900' : ''  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                 </svg>

                 Mon équipe
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={() =>{
                  set_current_page({payload:PAGES.INVATE})
                  router.push("/app/user/invite_member") } }
                  className={`
                  ${ active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
                  ${
                    current_page === PAGES.INVATE ? 'bg-blue-300 text-gray-900' : ''  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>

                inviter une nouvelle personne
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
                 `   ${ active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
                    ${
                    current_page === PAGES.SETTINGS ? 'bg-blue-300 text-gray-900' : ''  
                  }  group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`
                }
                >
                  <TuneIcon  className ="text-gray-400"  />
                  Paramètres
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                onClick={handleLogout}
                  className={`${
                    active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'
                  } group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <LogoutIcon  className ="text-gray-600 "  />
                  Se déconnecter
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