import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Button } from "@mui/material"







export  function TimePicker () {
  
    const [isOpen, setIsOpen] = useState(false)
     
    function openModal() {
      setIsOpen(true)
    }
    function closeModal(){
      setIsOpen(false)
    }
    const [startDate , setStartDate] = useState<Date>(new Date())
    const [endDate , setEndDate] = useState<Date>(new Date())
    const handleSelect = (ranges:RangeKeyDict) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setStartDate(ranges?.selection?.startDate as Date)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      setEndDate(ranges?.selection?.endDate as Date)
    }
    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }
  

  return (
    <>
   
    <button 
         onClick={openModal}
         className="w-full h-[45px] rounded border flex items-center justify-between p-2 px-4 shadow-sm text-gray-400 "
    >
       from  20/03/2023 to 12/06/2023
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>

    </button>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
               
              >
                <Dialog.Panel className="  min-w-[600px] h-fit w-fit transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl my-4 font-medium leading-6 text-gray-900"
                  >
                   select the date 
                  </Dialog.Title>
                  <div className="w-full h-full mt-1 flex flex-col  ">
                  <DateRangePicker  
                    ranges={[selectionRange]}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    minDate={new Date()} onChange={handleSelect} 
                    direction="horizontal"
                    />
                    <div className='w-full h-[50px] flex items-center justify-end p-4'>
                    <Button 
                     onClick={closeModal}
                       className="!inline-flex !text-white !font-bold    !justify-center !rounded-md !border !border-gray-300 !bg-gradient-to-r !from-sky-500 !to-indigo-600 !px-4 !py-2 !text-sm   !shadow-sm !hover:bg-gray-50 !focus:outline-none !focus:ring-2 !focus:ring-indigo-500 focus:ring-offset-2 !focus:ring-offset-gray-100">
                       close and save
                    </Button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      </>
  )
}
