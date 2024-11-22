export const formatTime = (time: any) => {
  const date = new Date(time);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const formatttedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const ampm = hours < 12 ? 'AM' : 'PM';

  const formattedTime = `${formattedHours}.${formatttedMinutes} ${ampm}`;

  return formattedTime;
};