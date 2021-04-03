//I wrote a program that will register runners for the race and give them instructions on race day.
//Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. 
//Runners are assigned a race number and start time based on their age and registration.
//Race numbers assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);
//This variable indicates whether a runner registered early or not and other variable is set it for the age of the runner
const registeredEarly = true;
const runnerage = 24;
//Control flow statement that checks whether the runner is an adult and registered early, only early adults will receive a race number at or above 1000
if (runnerage > 18 && registeredEarly === true) {
    raceNumber += 1000;
}
//This statement will check age and registration time to determine race time
if (runnerage > 18 && registeredEarly === true) {
    console.log('Runner who has the racenumber ' + raceNumber + ', you will have a race at 9.30 am');
} else if (runnerage > 18 && registeredEarly === false) {
    console.log('Runner who has the racenumber ' + raceNumber + ', you will have a race at 11.00 am');
}
//People who are under 18, I logged a statement to the console telling them that they will race at 12.30 pm including their racenumber. 
if (runnerage < 18 && registeredEarly === false) {
    console.log('Runner who has the race number ' + raceNumber + ', you will have a race at 12.30 am');
    //Runners exactly 18 years old has to see the registration desk
} else if (runnerage === 18) {
    console.log('Runner who is 18 years old with the race number ' + raceNumber + ', see the registration desk.')
}