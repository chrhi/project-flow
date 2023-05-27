import Skeleton from 'react-loading-skeleton';


const HomePageLoader = ({}) => {
  return <div className='w-full h-[600px] flex  justify-center gap-4'>
        <div className='w-[70%] h-full  flex flex-col justify-centerrounded-lg'>
           <Skeleton style={{width : "50%"}} />
           <Skeleton style={{width : "100%"}} />
           <Skeleton style={{width : "100%" , height:"400px"}} />
        </div>
       
  </div>
}

export default HomePageLoader