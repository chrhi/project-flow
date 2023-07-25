// Created by Abdullah Chehri
import { useState, type  FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { cn } from '~/lib/utils';

const MessagesLoading: FC = ({}) => {
  const [messages] = useState(['A', 'A', 'B', 'B', 'A']);

  return (
    <div className='flex h-full flex-1 flex-col-reverse gap-4 p-3 pb-[100px] overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch'>
      {messages?.map((message, index) => {
        const isCurrentUser = message === 'A';
        const hasNextMessageFromSameUser = messages[index - 1] === messages[index];

        return (
          <div className='chat-message' key={`${message}${index}`}>
            <div className={cn('flex items-end', { 'justify-end': isCurrentUser })}>
              <div
                className={cn('flex flex-col space-y-2 text-base max-w-xs mx-2', {
                  'order-1 items-end': isCurrentUser,
                  'order-2 items-start': !isCurrentUser,
                })}
              >
                <Skeleton
                  className={cn('px-4 py-2 rounded-lg w-[250px] h-8 inline-block', {
                    'rounded-br-none': !hasNextMessageFromSameUser && isCurrentUser,
                    'rounded-bl-none': !hasNextMessageFromSameUser && !isCurrentUser,
                    
                  })}
                />
              </div>
              <div
                className={cn('relative w-6 h-6', {
                  'order-2': isCurrentUser,
                  'order-1': !isCurrentUser,
                  invisible: hasNextMessageFromSameUser,
                })}
              >
                <Skeleton className='rounded-full w-6 h-6' />
              </div>
            </div>
          </div>
           
        );
      })}
     
    </div>
  );
};

export default MessagesLoading;
