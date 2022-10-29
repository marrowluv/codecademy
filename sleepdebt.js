const getSleepHours = (day) => {
  if (day === "monday") {
    return 4;
  } else if (day === "tuesday") {
    return 4;
  } else if (day === "wednesday") {
    return 4;
  } else if (day === "wednesday") {
    return 4;
  } else if (day === "thursday") {
    return 4;
  } else if (day === "friday") {
    return 4;
  } else if (day === "saturday") {
    return 4;
  } else if (day === "sunday") {
    return 4;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

/* another way 
const getActualSleepHours = () => 6 + 7 
+ 9 + 8 + 5 + 10 + 11;
*/

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

/* another way 
const getIdealSleepHours = idealHours => idealHours * 7;
*/

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(
      "You got " +
        idealSleepHours +
        " hour(s). Your time sleeping is the ideal."
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours + actualSleepHours) +
        " hour(s) more than you needed this week. You should wake up earlier."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less than you needed this week. Get some rest."
    );
  }
};

/* another way 
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log("You got " + (idealSleepHours) + " hour(s). Your time sleeping is the ideal.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got " + (idealSleepHours + actualSleepHours) + " hour(s) more than you needed this week. You should wake up earlier.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less than you needed this week. Get some rest.");
  }
};
*/

calculateSleepDebt();
