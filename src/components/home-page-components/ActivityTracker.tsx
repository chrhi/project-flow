/*
 * Import necessary dependencies and components.
 * Abdullah Chahri created this ActivityTracker component.
 * Email: mahdi.chahri55@gmail.com
 */
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import { formatTimeWithAMPM } from '~/hooks/date-to-houres';
import { getPrayerTimes } from '~/hooks/get-prayer-times';

const algeriaLatitude = 36.752887;
const algeriaLongitude = 3.042048;
const year = 2017;
const month = 4;

export function getCurrentYearAndMonth(): { year: number, month: number } {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  return {
    year: currentYear,
    month: currentMonth,
  };
}

const style = {
  clock: "!w-[92px] !h-[92px]"
};

export default function ActivityTracker() {


  const [value, setValue] = useState<PrayerTimes | null>(null);

  useEffect(() => {
    // Call the function and log the results
    getPrayerTimes(algeriaLatitude, algeriaLongitude, getCurrentYearAndMonth().year, getCurrentYearAndMonth().month)
      .then(prayerTimes => {
       
        setValue(prayerTimes);
        console.log("here are the pryer times" )
        console.log(typeof (prayerTimes?.Fajr ) === typeof new Date())
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const BlockClock = ({name , showBorder  , time} : {name: string, showBorder :true, time: Date | null}) => (
    <div className={`w-[18%] h-[80%] px-1 ${showBorder ? "border-r border-gray-300 " : ""} flex flex-col items-center justify-center gap-y-4`}>
      <Clock
        renderNumbers
        renderSecondHand={true}
        value={ time }
        hourHandLength={50}
        hourHandWidth={3}
        hourMarksLength={2}
        hourMarksWidth={1}
        minuteHandLength={60}
        minuteHandWidth={2}
        secondHandLength={70}
        renderHourMarks={true}
        renderMinuteMarks={false}
        className={`!w-[92px] !h-[92px] bg-[#2E3349] rounded-[50%] !text-[#A5AABE]`}
      />
      <div>
        <h1 className='text-md text-[#2F3349] font-medium text-center'>{name}</h1>
        <span className='text-sm text-gray-500 text-center'>{formatTimeWithAMPM(time || new Date())}</span>
      </div>
    </div>
  );

  return (
    /*
     * Main container for the ActivityTracker component.
     * Abdullah Chahri created this component to display activity times.
     * Email: mahdi.chahri55@gmail.com
     */
   
    <div className='hidden w-full lg:w-[48%] h-[200px] lg:flex gap-x-2 bg-white rounded-lg items-center justify-center'>
       {
      value ? 
      <>
      {/* @ts-ignore */}
      {BlockClock({name : "Fajr" , time :  value?.Fajr , showBorder : false})}
      {/* @ts-ignore */}
      {BlockClock({name : "Dhuhr" , time :  value?.Dhuhr, showBorder : true })}
      {/* @ts-ignore */}
      {BlockClock({name : "Asr" , time :  value?.Asr  , showBorder : true})}
      {/* @ts-ignore */}
      {BlockClock({name : "Maghrib" , time :value?.Maghrib , showBorder : true})}
      {/* @ts-ignore */}
      {BlockClock({name : "Isha" , time : value?.Isha , showBorder : false})}
      </>
        :
        <p> loading... </p>
        }
    
    </div>
  );
}


