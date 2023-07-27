/*
 * Import necessary dependencies and components.
 * Abdullah Chehri created this PagesNav component to represent the navigation bar for the pages.
 * Email: mahdi.chahri55@gmail.com
 */
import { useRouter } from 'next/router';
import { Button } from '../ui/button';
import { use_is_current_page } from '~/utils/navigation-helper';
import { cn } from '~/lib/utils';
import { buttonVariants } from '../used/AbdullahButton';

/*
 * PagesNav component represents the navigation bar for the pages.
 * It was created by Abdullah Chehri.
 * Email: mahdi.chahri55@gmail.com
 */
export function PagesNav() {
  // Initialize Next.js router
  const router = useRouter();

  // List of pages and their paths
  const LIST = [
    {
      name: "Home",
      path: "/app",
    },
    {
      name: "Chat",
      path: "/app/chat",
    },
    {
      name: "Projects",
      path: "/app/project",
    },
    // {
    //   name : "Tasks" , path : "/app/tasks" 
    // },
    // {
    //   name : "Brain" , path : "/app/brain" 
    // },
    // {
    //   name : "Invoices" , path : "/app/map" 
    // }
  ];

  return (
    /*
     * Main container for the PagesNav component.
     * Includes a list of buttons for each page in the navigation.
     */
    <div className='w-[70%] h-full hidden lg:flex justify-start items-center gap-x-6'>
      {LIST.map((item, index) => {
        return (
          <Button
            onClick={async () => await router.push(item.path)}
            variant="ghost"
            key={item.name}
            className={cn(buttonVariants({ variant: 'ghost', size: "sm" }), `text-[#64748B] dark:text-gray-100 ${use_is_current_page(item.path) ? 'text-slate-900 dark:text-white' : null} font-medium text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-stone-800 dark:active:bg-stone-700`)}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}
