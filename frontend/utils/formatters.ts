export const timeFormatter = (date?: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    // timeZone: 'Australia/Sydney',
    // timeZoneName: 'short'
  };
  const time = new Intl.DateTimeFormat("en-AU", options).format(
    date ?? new Date()
  );
  return time;
};