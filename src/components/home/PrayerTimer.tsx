import {useEffect , useState} from 'react'
import Clock from 'react-clock'

const style ={
  clock :"!w-[100px] bg-gray-100 !h-[100px] rounded-[50%]"
}

export default function PrayerTimes() {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (

    <div className='w-[60%]  h-[200px] flex gap-x-2 bg-white rounded-lg items-center justify-center' >
      <div className={`w-[18%] h-[80%]  flex flex-col items-center justify-center gap-y-4 `}>
           <Clock  value={value} className={style.clock} />
           <h1>abdullah</h1>
       </div>
       <div className={`w-[18%] h-[80%]  flex flex-col items-center justify-center gap-y-4 `}>
           <Clock  value={value} className={style.clock} />
           <h1>abdullah</h1>
       </div>
       <div className={`w-[18%] h-[80%]  flex flex-col items-center justify-center gap-y-4 `}>
           <Clock  value={value} className={style.clock} />
           <h1>abdullah</h1>
       </div>
       <div className={`w-[18%] h-[80%]  flex flex-col items-center justify-center gap-y-4 `}>
           <Clock  value={value} className={style.clock} />
           <h1>abdullah</h1>
       </div>
       <div className={`w-[18%] h-[80%]  flex flex-col items-center justify-center gap-y-4 `}>
           <Clock  value={value} className={style.clock} />
           <h1>abdullah</h1>
       </div>
    </div>

    
  )
}