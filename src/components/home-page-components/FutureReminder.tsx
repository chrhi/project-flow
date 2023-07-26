import React from 'react'
import { useTypewriter , Cursor } from 'react-simple-typewriter'

function FutureReminder() {

  const [text] = useTypewriter({
    words:['Far better to dare mighty things, to win glorious triumphs,','even though checkered by failure, than to take rank with those poor spirits ' , 'even though checked by failed ', ' who neither enjoy much nor suffer much . . . in the grey twilight that knows not victory nor defeat.'],
    loop:true,
  });


  return (
    <div className=' w-full lg:w-[48%]  h-[200px] bg-white   p-8 rounded-lg' >
      <h1 className='text-2xl text-black '>
      A daily reminder to your future self:
        </h1>
        <p className='!bg-clip-text !bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-transparent text-lg my-8'>
        {text}
        </p>
    </div>
  
  )
}

export default FutureReminder