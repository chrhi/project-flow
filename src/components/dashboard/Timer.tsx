import {useEffect , useState} from 'react'
import Clock from 'react-clock'; 

const style ={
  clock :"!w-[100px] bg-gray-100 !h-[100px] rounded-[50%]"
}

export default function Timer() {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);



  return (

    <div className="w-[50%]  bg-white flex items-center gap-x-4 rounded-lg h-[200px]">
     <Clock renderSecondHand value={value} className={style.clock} />
    
    </div>
    
  )
}
