const countDown = timer => {
  let {seconds, minutes, hours, days} = timer;
  if (seconds > 0) {
    seconds--;
  }
  else if (minutes > 0) {
    minutes--;
    seconds = 59;
  }
  else if (hours > 0) {
    hours--;
    seconds = 59;
    minutes = 59;
  }
  else if (days > 0) {
    days--;
    hours = 24;
    seconds = 59;
    minutes = 59;
  }
  return {
    hours,
    minutes,
    seconds,
    days
  };
};

export default countDown;