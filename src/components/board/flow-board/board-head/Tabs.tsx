
import { Tab } from '@headlessui/react'
import { BookMarked, Grid, LayoutGrid, LayoutPanelLeft } from 'lucide-react'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LayoutButton() {
  

  return (
    <div className="w-[200px] max-w-md px-2 py-14 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-200/20 p-1">
          
            <Tab
              className={({ selected }) =>
                classNames(
                  'w-full m-1 rounded-lg py-2 text-sm font-medium flex justify-center items-center leading-5 text-black',
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
              className={({ selected }) =>
                classNames(
                  'w-full m-1 rounded-lg py-2 text-sm flex justify-center items-center font-medium leading-5 text-black',
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
              className={({ selected }) =>
                classNames(
                  'w-full m-1 rounded-lg py-2 text-sm flex justify-center items-center font-medium leading-5 text-black',
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

