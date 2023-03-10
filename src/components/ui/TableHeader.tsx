import React from 'react'

export  const TableHeader = () => {
  return (
    <div className='bg-gray-300 w-[90%] mx-auto flex items-center justify-evenly p-4 shadow gap-x-4   '>
      <div className='w-[20%]'>
            <p className='text-gray-900 font-bold text-start'>Nome</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-gray-900  font-bold'>Titre</p>
      </div>
   
      <div className='w-[30%]'>
            <p className='text-start text-gray-900  font-bold' >Role / Responsabilite</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-gray-900  font-bold' >Actions</p>
      </div>
    </div>
  )
}

