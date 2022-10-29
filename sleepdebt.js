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

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

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

calculateSleepDebt();
