import React from 'react'




export  const List = () => {
  return (
    <div className='w-full rounded-lg bg-white  p-8 flex flex-col items-center h-full  min-h-[500px]  '>
       {
        [1,2,3,4,5].map((number,index) =>{
         return(
            <div key={index} className='w-full h-[50px] my-2 cursor-pointer hover:bg-gray-50 flex items-center justify-between '>
                <div className='w-[70%] '>
                <h1 className='truncate text-xl font-bold '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quas suscipit quaerat quibusdam totam omnis et hic ea deleniti unde aliquid molestiae odit quo similique iste assumenda ipsa, id placeat!</h1>      
                </div>
                <div className='w-[20%]'>
                    <p>02/08/2019</p>
                </div>
        </div>
         )
        })
       }
    </div>
  )
}

