import React, { useState } from 'react';
import { AbdullahButton, buttonVariants } from '../used/AbdullahButton';
import animatin from '~/assets/svg/94021-startup.gif';
import Image from 'next/image';
import { Input } from '../used/Input';
import { TextField } from '../used/TextField';
import NewTimePicker from '../used/NewTimePicker';
import toast from 'react-hot-toast';
import { api } from '~/utils/api';
import type { DateRangePickerValue } from '@tremor/react';
import { getUserMetadata } from '~/lib/MetaData';
import { redis } from '~/lib/upstash';

type Props = {
  refetch: () => Promise<any>;
};

export const ProjectStarter = ({ refetch }: Props) => {
  const [value, setValue] = useState<DateRangePickerValue>(
    {
      from: new Date(2023, 1, 1),
      to: new Date(),
    }
  );
  const [data, setData] = useState({
    password: '',
    userId: '',
    title: '',
    description: '',
  });

  const mutation = api.projectRouter.create_project.useMutation({
    onSuccess: async (data) => {
      
      await redis.set(data.id, JSON.stringify({currentPhase : data.currentPhase}));
      await refetch();
      toast('Good Job!', {
        icon: '👏',
      });
    },
    onError: () => {
      toast.error("quelque chose s'est mal passé, veuillez réessayer");
    },
  });

  const handleSubmit = () => {
    if (!data.password || !data.title || !data.description) {
      toast.error('tous les champs sont requis');
      return;
    }
    mutation.mutate({
      title: data.title,
      endsAt: value.to as Date,
      startAt: value.from  as Date,
      user_id: getUserMetadata(),
    });
  };

  return (
    <div className="w-full max-w-4xl   bg-white dark:bg-black rounded-lg  flex h-[500px] shadow-xl border">
      <div className="w-[50%] gird grid-cols-12 p-4 gap-y-4 h-full">
        <div className="col-span-12 my-4 h-[40px] flex items-center">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-white">Stating the project </h1>
        </div>
        <Input
          lable="enter your password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className='my-4'
        />
        <div className="col-span-12 my-4 ">
          <NewTimePicker value={value} setValue={setValue} text="sélectionner une heure à laquelle ce projet doit commencer et se terminer" />
        </div>
        <Input
          className='my-4'
          lable="quel est le titre du projet ?"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextField
          className='my-4'
          lable="pouvez-vous décrire le projet ?"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
        />
      </div>
      <div className="w-[50%] h-full flex flex-col justify-end items-center">
        <Image width={200} className="mb-24" src={animatin} alt="starting up the project" />
        <div className="w-full flex justify-end items-center p-8 h-[50px]">
          <AbdullahButton className={buttonVariants({ variant: 'primary' })} onClick={handleSubmit} isLoading={mutation.isLoading}>
            Démarrer le projet
          </AbdullahButton>
        </div>
      </div>
    </div>
  );
};
