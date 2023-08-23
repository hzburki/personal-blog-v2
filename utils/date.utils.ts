/**
 * @description 
 *  Converts a date string to a human readable date
 * 
 * @param date 
 */
export const humanReadableDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}