const promptSync = require('prompt-sync');

const promptInstance = promptSync({
    sigint: true
});

class userInputError extends Error {
    constructor(message = "Invalid number input! Please try again!") {
        super();
        this.statusCode = 404;
        this.message = message;
    }
};

console.log('\nHi, welcome to the Sleep Debt Calculator!\n');
console.log("Please input your sleep hours for the listed days: ");


// need to adjust for DRY code
function app() {
    const monSleepHours = promptInstance("Monday: ");
    const tueSleepHours = promptInstance("Tuesday: ");
    const wedSleepHours = promptInstance("Wednesday: ");
    const thuSleepHours = promptInstance("Thursday: ");
    const friSleepHours = promptInstance("Friday: ");
    const satSleepHours = promptInstance("Saturday: ");
    const sunSleepHours = promptInstance("Sunday: ");
    
    if (isNaN(monSleepHours) || isNaN (tueSleepHours) || isNaN (wedSleepHours) || isNaN (thuSleepHours) || isNaN (friSleepHours) || isNaN (satSleepHours) || isNaN (sunSleepHours)) {
        throw new userInputError();
    };

    const getSleepHours = (day) => {
        switch (day) {
        case "Monday":
            return Number(monSleepHours)
            break;
        case "Tuesday":
            return Number(tueSleepHours)
            break;
        case "Wednesday":
            return Number(wedSleepHours)
            break;
        case "Thursday":
            return Number(thuSleepHours)
            break;
        case "Friday":
            return Number(friSleepHours)
            break;
        case "Saturday":
            return Number(satSleepHours)
            break;
        case "Sunday":
            return Number(sunSleepHours)
            break;
        }
    };


    const getActualSleepHours = () => getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday")  + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday");


    const getIdealSleepHours = (userIdealHours = 8) => {
        return userIdealHours * 7;
    };

    const calculateSleepDebt = () => {
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();

        if (actualSleepHours === idealSleepHours) {
        console.log(`You got the perfect amount ${actualSleepHours} of sleep this week.`);
        } else if (actualSleepHours > idealSleepHours) {
        console.log(`You got ${Math.floor(actualSleepHours - idealSleepHours)} hour(s) more sleep than you needed this week.`);
        } else {
        console.log(`You got ${Math.floor(idealSleepHours - actualSleepHours)} hour(s) less sleep than you needed this week. Get some rest.`);
        }
    };

    calculateSleepDebt();
}

try {
    app();
  } catch (error) {
    if (error.statusCode) {
      console.log(`Error ${error.statusCode} occured, its message is: ${error.message}`);
    } else {
      console.log("Some error occurred" + error.message);
    };
  } finally {
    console.log("\nSee you next time!");
  };

module.exports = {
    app
}

