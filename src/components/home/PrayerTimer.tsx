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

  const BlockClock = (name:string , showBorder = true) => (
    <div className={`w-[18%] h-[80%] ${showBorder ? "border-r border-gray-600 " : ""} flex flex-col items-center justify-center gap-y-4 `}>
    <Clock renderSecondHand={false} value={value} className={style.clock} />
    <h1>{name}</h1>
    </div>
  )


  return (

    <div className='w-[60%]  h-[200px] flex gap-x-2 bg-white rounded-lg items-center justify-center' >
     {BlockClock("fadjr" )}
     {BlockClock("dohr")}
     {BlockClock("assar")}
     {BlockClock("makhrib")}
     {BlockClock("ishaaa", false)}
    </div>

    
  )
}