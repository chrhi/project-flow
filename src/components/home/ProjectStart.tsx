import {useState} from 'react'

export const ProjectStart = () => {

    const [projectStarted , setProjectStarted] = useState<boolean>(false)

const handleClick = () => {
    setProjectStarted(prev => prev = !prev)
}

if(projectStarted){
    return(
        <div className='w-full h-[120px] flex items-center p-4'>
            <h1 className='text-gray-900 font-bold text-xl' >prject started</h1>
        </div>
    )
}

  return (

    <div className='w-full h-[300px] flex flex-col justify-center gap-y-4 my-4 bg-white p-8'>
       <div className='w-full flex flex-col justify-center gap-y-4  my-4 h-[50px]'>
       <h1  className='text-gray-900 font-bold text-3xl text-start ' >start your project </h1>
       <p className='text-lg text-gray-600 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima</p>
       </div>
        <button
        className="rounded-lg w-[200px] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-sky-500 to-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleClick}
        >
            start my project
        </button>
    </div>
  )
}

