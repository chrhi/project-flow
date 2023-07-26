export function formatTimeWithAMPM(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
  
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
  
    return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  }
  