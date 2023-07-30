import axios from "axios";

// // Define the type for prayer times
// interface PrayerTimes {
//   Fajr: Date;
//   Dhuhr: Date;
//   Asr: Date;
//   Maghrib: Date;
//   Isha: Date;
// }

// Function to fetch prayer times from the API and return them as date objects
export async function getPrayerTimes(latitude: number, longitude: number, year: number, month: number): Promise<PrayerTimes | null> {
  try {
    const url = `https://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=2`;
    const response = await axios.get(url);

    if (response.data?.data?.length > 0) {
      const currentDay = new Date().getDate();
      const prayerTimesData = response.data.data.find((dayData: any) => dayData.date.gregorian.day === currentDay.toString());

      if (prayerTimesData) {
        const prayerTimes: PrayerTimes = {} as PrayerTimes ;
        const prayerTimesOfDay = prayerTimesData.timings;

        // Convert prayer times to date objects
        for (const prayer in prayerTimesOfDay) {
          const prayerTime = prayerTimesOfDay[prayer];
          const [hours, minutes] = prayerTime.split(":");
          prayerTimes[prayer as keyof PrayerTimes] = new Date(year, month - 1, currentDay, parseInt(hours), parseInt(minutes));
        }

        return prayerTimes;
      } else {
        throw new Error('No data available for the current day.');
      }
    } else {
      throw new Error('No data available for the specified location and date.');
    }
  } catch (error: any) {
    throw new Error('Error fetching prayer times: ' + error?.message);
  }
}
