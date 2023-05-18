/* eslint-disable @typescript-eslint/no-floating-promises */
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'




export default function Invitation() {
  //initializes hooks
 


  return (
    <div className="mr-12 text-right z-[100]">
    <Menu as="div" className="relative z-[100]  inline-block text-left">
      <div className='h-[60px] w-[50px] flex justify-center items-center'>
      <Menu.Button >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-[1.4rem]  text-gray-600 hover:bg-gray-100 rounded-full font-semibold h-[1.4rem]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
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
          <div className="px-1 py-1 min-h-[300px] flex justify-center items-center z-[100] ">
          <h1 className='text-xl font-bold text-center'>Empty section</h1>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
                }