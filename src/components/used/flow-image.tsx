import { block } from "million/react"


type Props = {
    image : string , 
    type : string,
    small? : boolean
}

export const FlowImageNotGood = ({image , type , small }:Props) => {



    return (
        <div className='w-[50px] h-[50px] rounded-[50%] '>
            {type === "COLOR" ?
             <div className='bg-purple-500 rounded-[50%] w-full h-full'>
  
             </div>
             :
             <span className={` ${small ? "text-[30px]" : "text-[40px]" }`}>{image}</span>
            }
        </div>
    )

  }


  export const FlowImage = block(FlowImageNotGood)