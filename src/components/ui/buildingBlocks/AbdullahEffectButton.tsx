/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/display-name */
import { cn } from '~/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import * as React from 'react'

function rippleEffect(event : React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const btn = event?.currentTarget;
    
      const circle = document.createElement("span");
      const diameter = Math.max(btn?.clientWidth, btn?.clientHeight);
      const radius = diameter / 2;
  
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event?.clientX - (btn?.offsetLeft + radius)}px`;
      circle.style.top = `${event?.clientY - (btn?.offsetTop + radius)}px`;
      circle.classList.add("ripple");
  
      const ripple = btn?.getElementsByClassName("ripple")[0];
  
      if (ripple) {
          ripple.remove();
      }
  
      btn?.appendChild(circle);
  }
  
//   const btn = document.getElementById("bt");
//   btn.addEventListener("click", rippleEffect);

const buttonVariants = cva(
    " overflow-hidden  relative   hover:bg-opacity-90",
  {
    variants: {
      variant: {
        default:
          ' inline-flex justify-center rounded-md bg-transparent text-slate-900  hover:bg-blue-50    py-2 px-3 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
        destructive: 'text-white hover:bg-red-600 ',
        outline:
          'bg-blue-500 text-white hover:bg-blue-800   border border-slate-200 ',
        subtle:
          'bg-blue-100 text-slate-900 hover:bg-blue-200  ',
        ghost:
          'bg-transparent text-slate-900  hover:bg-blue-50  data-[state=open]:bg-transparent',
        link: 'bg-transparent  underline-offset-4 hover:underline text-slate-900 hover:text-blue-500 hover:bg-transparent ',
        rukia: 'w-full bg-blue-500 text-white hover:bg-blue-800 ',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        none : "p-1"
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean ,
  onClick? : () => void 
}

 const AbdullahEffectButton =
  ({ className, children, variant, isLoading, size, onClick , ...props } :ButtonProps ) => {

    const buttonRef = React.useRef(null)

    function handleClick (e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        rippleEffect(e)
       if( onClick){
         onClick()
       }
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={buttonRef}
        disabled={isLoading}
        onClick={(e) => handleClick(e)}
        {...props}>
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
        
      </button>
    )
  }



export { AbdullahEffectButton, buttonVariants }