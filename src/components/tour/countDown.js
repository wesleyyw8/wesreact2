const countDown = timer => {
  let seconds = timer.getSeconds();
  let minutes = timer.getMinutes();
  let hours = timer.getHours();
  let days = timer.getDate();
  let months = timer.getMonth();
  let year = timer.getFullYear();
  if (seconds > 0) {
    seconds--;
  }
  else if (minutes > 0) {
    minutes--;
    seconds = 0;
  }
  else if (hours > 0) {
    hours--;
    seconds = 59;
    minutes = 59;
  }
  else if (days > 1) {
    days--;
    hours = 23;
    seconds = 59;
    minutes = 59;
  }
  else if (months > 1) {
    months--;
    days = 0;
    hours = 23;
    seconds = 59;
    minutes = 59;
  }
  else {
    year--;
    months = 0;
    days = 0;
    hours = 23;
    seconds = 59;
    minutes = 59;
  }

  return new Date(year, months, days, hours, minutes, seconds);
};

export default countDown;