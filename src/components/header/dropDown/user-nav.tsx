import { Menu, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Gem,
  HelpCircle,
  Loader2,
  Plus,
  Settings,
  ShieldAlert,
  Users,
  Wallet,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { LogOut, Lock, User } from 'lucide-react';
import { buttonVariants } from '~/components/used/AbdullahButton';
import {  signOut } from 'next-auth/react';
import { api } from '~/utils/api';
import type { Organization } from '@prisma/client';
import {
  RemoveOrgId,
  RemoveOrgName,
  getOrganizationId,
  storeOrgName,
  storeOrganizationId,
} from '~/lib/data-in-cookies';
import toast from 'react-hot-toast';
import type { Session } from 'next-auth';

type Props = {
  serverSession: Session;
};

const NavigationOptions = [
  { icon: <User className="mr-2 h-4 w-4" />, name: 'My profile', path: '/app/user/profile' },
  // { icon: <Lock className="mr-2 h-4 w-4" />, name: 'Password Settings', path: '/app/user/password_settings' },
  { icon: <Users className="mr-2 h-4 w-4" />, name: 'My team', path: '/app/user/my-team' },
  { icon: <Wallet className="mr-2 h-4 w-4" />, name: 'My bills', path: '/app/user/my-bills' },
  { icon: <HelpCircle className="mr-2 h-4 w-4" />, name: 'Support', path: '' },
  { icon: <Gem className="mr-2 h-4 w-4 text-blue-500 " />, name: 'Discord community', path: '' },
];

export default function DropDowsMenu({ serverSession }: Props) {
  const router = useRouter();

  const [orgSelected, setOrgSelected] = useState('');

  const [orgs, setOrgs] = useState<Organization[]>([]);

  api.userRouter.getUser.useQuery(undefined, {
    onSuccess: (user) => {
      setOrgSelected(user?.selectedOrganizationId || '');
    },
  });

  const {isLoading} = api.organizationRouter.getUserOrganization.useQuery(undefined, {
    onSuccess: (orgs) => {
      setOrgs(orgs);
      
    },
  });

  const mutation = api.organizationRouter.updateUserSelectedOrg.useMutation({
    onSuccess: (data) => {
      if (!data || !data?.org || !data?.org?.id || !data?.org?.name) {
        toast.error('something went wrong, please try again!');
        return;
      }

      storeOrganizationId({ org_id: data?.org?.id });
      storeOrgName({ org_name: data?.org?.name });

      toast.success(`current selected organization is ${data?.org?.name}`, {
        position: 'top-center',
        icon: '🌍',
      });
    },
  });

  return (
    <div className="text-right z-[100]">
      <Menu as="div" className="relative z-[100] inline-block text-left">
        <div className="h-[60px] w-[20px] flex justify-center items-center">
          <Menu.Button className={`${buttonVariants({ variant: 'ghost', size: 'sm' })}`}>
            <Settings className="w-5 h-5 text-[#64748B]" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-[100] right-0 top-12 w-[300px] origin-top-right divide-y divide-gray-100 bg-white dark:bg-black shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 z-[100]">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={`
                      ${active ? 'bg-gray-50 ' : ''}
                      w-full min-h-[30px] h-fit border-b cursor-pointer flex overflow-x-hidden items-center gap-x-1`}
                    onClick={() => {
                      router.push('/app/user/profile');
                    }}
                  >
                    <Avatar>
                      <AvatarImage src={serverSession?.user.image || ''} alt="@abdullah" />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div className="w-[80%] min-h-[45px] h-fit flex flex-col justify-center p-4 gap-y-1">
                      <h3 className="truncate text-sm text-gray-600 dark:text-white">
                        {serverSession?.user.email}
                      </h3>
                      <h3 className="truncate text-sm text-gray-600 dark:text-white">
                        {serverSession?.user.name} {serverSession?.user.lastName}
                      </h3>
                    </div>
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div className="w-full min-h-[50px] h-fit bg-white flex border-b flex-col items-start">
                    <div className="flex gap-2 items-center p-4 w-full hover:bg-gray-100 cursor-pointer justify-start h-[45px]">
                      <h1 className="text-neutral-800 text-md">Organizations</h1>
                    </div>
                    {isLoading ? 

                    <div className='w-full h-[40px] flex items-center justify-center'>
                            <Loader2 className=' h-6  w-6 animate-spin' />
                    </div>
                
                    :
                    orgs.length === 0 ? 
                    <Menu.Item>
                    {({ active }) => (
                      <button
                      onClick={async () => await router.push("/app/user/organization-add")}
                        className={`  ${
                          active
                            ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900'
                            : 'text-gray-900 dark:text-white'
                        } group flex w-full  gap-x-4 items-center font-medium rounded-md px-2 py-2 text-sm`}
                      >
                        <Plus className="mr-2 h-5 w-5 " />
                        Create New Organization
                      </button>
                    )}
                  </Menu.Item>
                    :
                    <>
                    {
                    orgs.map((item) => {
                      return (
                        <div
                          onClick={() =>
                            mutation.mutate({
                              selected_organization_id: item.id,
                            })
                          }
                          key={item.id}
                          className={`flex gap-x-4 items-center p-4 w-full ${
                            getOrganizationId() === item.id ? 'bg-blue-300' : null
                          }  hover:bg-gray-100 cursor-pointer justify-start h-[45px]`}
                        >
                          <Avatar className="w-[30px] h-[30px]">
                            <AvatarImage src={item?.image} alt="@abdullah" />
                            <AvatarFallback>AB</AvatarFallback>
                          </Avatar>
                          <h1 className="text-neutral-700 text-sm">{item?.name}</h1>
                        </div>
                      );
                    })
                    }
                    <Menu.Item>
                    {({ active }) => (
                      <button
                      onClick={async () => await router.push("/app/user/organization-add")}
                        className={`  ${
                          active
                            ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900'
                            : 'text-gray-900 dark:text-white'
                        } group flex w-full  gap-x-4 items-center font-medium rounded-md px-2 py-2 text-sm`}
                      >
                        <Plus className="mr-2 h-5 w-5 " />
                        Create New Organization
                      </button>
                    )}
                  </Menu.Item>

                    </>
                    
                    }
                
                  </div>
                )}
              </Menu.Item>

              {NavigationOptions.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <button
                      onClick={async () => await router.push(item.path)}
                      className={`  ${
                        active
                          ? 'bg-gray-50 dark:bg-stone-800 dark:text-white text-gray-900'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.icon}
                      {item.name}
                    </button>
                  )}
                </Menu.Item>
              ))}

              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={async () => {
                      RemoveOrgId();
                      RemoveOrgName();
                      await signOut();
                    }}
                    className={`  ${
                      active
                        ? 'bg-gray-50 dark:bg-stone-800 dark:text-white  text-red-500'
                        : ' text-red-500 dark:text-white'
                    } group flex w-full  gap-x-4 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <LogOut className="mr-2 h-4 w-4 text-red-500" />
                    se déconnecter
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
