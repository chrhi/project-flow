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
  const {email , first_name , last_name , photo   } = userReducer()
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

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
                <div
                 className={`
                ${ active ? 'bg-gray-50 ' : ""}
                w-full min-h-[45px] h-fit border-b cursor-pointer flex overflow-x-hidden items-center gap-x-1`}
                >
                  <div className='rounded-[50%] w-[50px] h-[50px] bg-blue-500 '>
                  <img  className='rounded-[50%] w-[50px] h-[50px] ' src={photo} alt="profile pic" />
                  </div>
                  <div className='w-[80%] min-h-[45px] h-fit   flex flex-col justify-center p-4 gap-y-1 '>
                  <h3 className='truncate text-md text-gray-600 '>{email }</h3>
                  <h3 className='truncate text-md text-gray-600 '>{ first_name + " " + first_name || "unknown"}</h3>
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
                    current_page === PAGES.PROFILE ? 'bg-blue-200 text-gray-900 font-semibold ' : ' '  
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
                  router.push("/app/user/password_settings")  }}
                  className={`
                  ${ active ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
                  ${
                    current_page === PAGES.PASSWORD ? 'bg-blue-200 text-gray-900 font-semibold ' : ''  
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
                    current_page === PAGES.TEAM ? 'bg-blue-200 text-gray-900 font-semibold ' : ''  
                  } group flex w-full gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  h-6">
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
                  ${ active ? 'bg-blue-200 text-gray-900 font-semibold ' : 'text-gray-900'}
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
                    current_page === PAGES.SETTINGS ? 'bg-blue-200 text-gray-900 font-semibold ' : ''  
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