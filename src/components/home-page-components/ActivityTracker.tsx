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

const style = {
  clock: "!w-[92px] !h-[92px]"
};

export default function ActivityTracker() {

  
  const [value, setValue] = useState<PrayerTimes | null>(null);

  useEffect(() => {
    // Call the function and log the results
    getPrayerTimes(algeriaLatitude, algeriaLongitude, year, month)
      .then(prayerTimes => {
        if (!prayerTimes) return;
        setValue(prayerTimes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const BlockClock = (name: string, showBorder = true, time: Date | null) => (
    <div className={`w-[18%] h-[80%] px-1 ${showBorder ? "border-r border-gray-300 " : ""} flex flex-col items-center justify-center gap-y-4`}>
      <Clock
        renderNumbers
        renderSecondHand={true}
        value={time ? time : new Date()}
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
      {/* @ts-ignore */}
      {BlockClock("Fajr ", true, value["Fajr"])}
      {/* @ts-ignore */}
      {BlockClock("Dhuhr ", true, value["Dhuhr"])}
      {/* @ts-ignore */}
      {BlockClock("Asr", true, value["Asr"])}
      {/* @ts-ignore */}
      {BlockClock("Maghrib", true, value["Maghrib"])}
      {/* @ts-ignore */}
      {BlockClock("Isha", false, value["Isha"])}
    </div>
  );
}


