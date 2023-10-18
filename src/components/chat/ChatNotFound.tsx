import Image from 'next/image'
import React from 'react'

function ChatNotFound() {
  return (
    <div className='w-full h-[400px] flex items-center justify-center '>
        <Image
         src={"/assets/comunications.jpg"}
         alt="not found"
         width={300}
         height={400}
         />
    </div>
  )
}

export default ChatNotFound