// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
// example: 12:01:00PM => 12:01:00
function convertTime(s) {
  const value = s.substring(0, s.length -2)
  const arr = value.split(':')
  const hours = +arr[0];

  const am_pm = s.substring(s.length - 2, s.length )

  if (am_pm === 'AM') {
    if (hours === 12) {
      arr[0] = '00';
    }
  } else {
    if (hours !== 12) {
      arr[0] = hours + 12;
    }
  }

 return arr.join(':')
}

convertTime('07:05:45PM');