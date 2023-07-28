import type{ Dispatch, FC, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import type{ Project } from '@prisma/client';
import { Plus } from 'lucide-react';
import { cn } from '~/lib/utils';
import LayoutButton from './Tabs';
import { AbdullahButton, buttonVariants } from '~/components/used/AbdullahButton';

interface BoardheadProps {
  setData: Dispatch<SetStateAction<any>>;
  data: Project[];
}

const Boardhead: FC<BoardheadProps> = ({ setData, data }) => {
  const router = useRouter();

  return (
    <div className='w-full h-[70px] p-6 flex justify-between px-4'>
      <div className='w-[100px] h-full flex items-center justify-center'>
        <h1 className='text-2xl font-semibold text-gray-900'>Projects</h1>
      </div>
      <div className='w-[50%] flex gap-x-4 justify-end items-center h-full'>
        <LayoutButton />
        <AbdullahButton
          onClick={async () => await router.push('/app/project/project-add')}
          className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}>
          <Plus /> Create New Project
        </AbdullahButton>
      </div>
    </div>
  );
};

export default Boardhead;
