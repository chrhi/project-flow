/*
 * Import necessary dependencies and components.
 * Abdullah Chahri created this FutureReminder component.
 * Email: mahdi.chahri55@gmail.com
 */
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function FutureReminder() {

  const [text] = useTypewriter({
    words: ['Far better to dare mighty things, to win glorious triumphs,', 'even though checkered by failure, than to take rank with those poor spirits', 'even though checked by failed', 'who neither enjoy much nor suffer much . . . in the grey twilight that knows not victory nor defeat.'],
    loop: true,
  });

  return (
    /*
     * Main container for the FutureReminder component.
     * Abdullah Chahri created this component to display future reminders.
     * Email: mahdi.chahri55@gmail.com
     */
    <div className='w-full lg:w-[48%] h-[200px] bg-white p-8 rounded-lg'>
      <h1 className='text-2xl text-[#2F3349]'>
        A daily reminder to your future self:
      </h1>
      <p className='!bg-clip-text !font-medium !bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-transparent text-lg my-8'>
        {text}
      </p>
    </div>
  );
}

export default FutureReminder;
