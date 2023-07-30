
import { Tab } from '@headlessui/react'
import {  Grid, LayoutGrid, LayoutPanelLeft } from 'lucide-react'
import { LayoutReducer } from '~/store/flow-router/Layouts';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LayoutButton() {
  const setLayout = LayoutReducer(state => state.setLayout)

  return (
    <div className="w-[150px] max-w-md px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-lg bg-gray-200/20 p-1">
          
            <Tab
              onClick={() => setLayout({layout : 'BIG'})}
              className={({ selected }) =>
                classNames(
                  'w-full m-1 rounded-md py-1 text-xs font-medium flex justify-center items-center leading-5 text-black',
                  'ring-white    focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-200 hover:bg-white/[0.12] hover:text-black'
                )
              }
            >
             <LayoutPanelLeft />
            </Tab>
             
            <Tab
              onClick={() => setLayout({layout : 'SMALL'})}
              className={({ selected }) =>
                classNames(
                  'w-full m-1 rounded-md py-1 text-xs flex justify-center items-center font-medium leading-5 text-black',
                  'ring-white    focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-200 hover:bg-white/[0.12] hover:text-black'
                )
              }
            >
              <LayoutGrid />
               
            </Tab>
             
            <Tab
              onClick={() => setLayout({layout : 'ICONS'})}
              className={({ selected }) =>
                classNames(
                  'w-full m-1 rounded-md py-1 text-xs flex justify-center items-center font-medium leading-5 text-black',
                  'ring-white    focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'text-gray-200 hover:bg-white/[0.12] hover:text-black'
                )
              }
            >
              <Grid />
            </Tab>
          
        </Tab.List>
       
      </Tab.Group>
    </div>
  )
}

