/* eslint-disable */
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
 
  return twMerge(clsx(inputs))
}

export function nFormatter(num?: number, digits?: number) {
  if (!num) return "0";
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits || 1).replace(rx, "$1") + item.symbol
    : "0";
}

export function formatDateAlgeria(date: Date): string {
  const months: string[] = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  
  const days: string[] = [
    "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
  ];
  //@ts-ignore
  const day: string = days[date.getDay()];
    //@ts-ignore
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  const hours: number = date.getHours();
  
  return `${day}, ${year} ${month} ${hours}:00`;
}

export function downloadImage(dataUrl : any) {
  const a = document.createElement('a');

  a.setAttribute('download', 'reactflow.png');
  a.setAttribute('href', dataUrl);
  a.click();
}


export function toPusherKey(key: string) {
  return key.replace(/:/g, '__')
}

// Function to order an array of dates from newest to oldest
function orderDatesNewestToOldest(dates: Date[]): Date[] {
  return dates.slice().sort((a, b) => b.getTime() - a.getTime());
}

// Function to order an array of dates from oldest to newest
function orderDatesOldestToNewest(dates: Date[]): Date[] {
  return dates.slice().sort((a, b) => a.getTime() - b.getTime());
}
