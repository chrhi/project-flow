import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { cn } from '~/lib/utils';
import useLocalStorage from '~/hooks/use-local-storage';
import { debounce } from 'lodash';

function FutureReminder() {
  const [value, setValue] = useLocalStorage('ABDULLAH_TYPE_WRITER', 'loading...');
  const [input, setInput] = React.useState('');

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const [text] = useTypewriter({
    words: [value],
    loop: true,
  });

  // Define the debounce function with a delay of 500ms
  const DebounceSet = debounce((value: string) => {
    setValue(value);
 
  }, 500);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInput(newValue);
    // Call the DebounceSet function when the user types
    DebounceSet(newValue);
  };

  return (
    <div className='w-full lg:w-[48%] h-[100px] lg:h-[200px] bg-white p-2 lg:p-8 rounded-lg'>
      <h1 className=' text-lg lg:text-2xl text-[#2F3349]'>
        A daily reminder to your future self:
      </h1>
      <textarea
        value={input}
        onChange={handleInputChange}
        ref={textAreaRef}
        className={cn(
          'placeholder:text-transparent w-full h-[90px] lg:h-[180px] border-none focus:outline-none focus:ring-0 focus:border-none ',
          '!bg-clip-text !font-medium !bg-gradient-to-r !from-blue-500 !to-indigo-600 !text-transparent text-lg lg:my-8'
        )}
        placeholder={text}
      />
    </div>
  );
}

export default FutureReminder;
