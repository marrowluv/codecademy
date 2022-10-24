let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnerAge = 18;

if (registeredEarly === false && runnerAge >= 18) {
  raceNumber += 1000;
}

if (registeredEarly === false && runnerAge > 18) {
  console.log(`Your race number is ${raceNumber}. You can run at 9:30 am`);
} else if (runnerAge > 18 && !registeredEarly === false) {
  console.log(`Your race number is ${raceNumber}. You can run at 11:00`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}. You can run at 12:30`);
} else registeredEarly === false && runnerAge === 18;
console.log("You should see the registration desk");
