//enter a year in the prompt to find out whether or not it's a leap year using modulus operator and conditional statements.

function isLeap(year) {

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      } else {
        return "Not leap year.";
      }
    } else {
      return "Not leap year.";
    }
  } else {
    return "Not leap year.";
  }

}

var yearToCheck = prompt ("Enter the year to check if it's a leap year");

var result = isLeap(yearToCheck);

alert (result);
