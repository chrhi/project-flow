import React from 'react'

export  const TableHeader = () => {
  return (
    <div className='bg-white w-full mx-auto flex items-center justify-evenly p-4  gap-x-4   '>
      <div className='w-[20%]'>
            <p className='text-gray-400  text-start'>Nome</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-gray-400  '>Titre</p>
      </div>
   
      <div className='w-[30%]'>
            <p className='text-start text-gray-400  ' >Role / Responsabilite</p>
      </div>
      <div className='w-[20%]'>
            <p className='text-start text-gray-400  ' >Actions</p>
      </div>
    </div>
  )
}

