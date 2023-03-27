/* eslint-disable @typescript-eslint/restrict-template-expressions */
 // format date to dd/mm/yyyy
 export const AlgeriaformatDate = (date : Date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

// supabase fromte 
// format date to yyyy/MM/dd
export const supabaseFormater = (date : Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}/${month}/${day}`;
  };
// from supabase formate to algeria formate 
export const  SupabaseToAlgeria = (inputDate : string) =>  {
    const dateParts = inputDate.split('/');
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return `${day}/${month}/${year}`;
  }