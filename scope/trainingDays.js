const promptSync = require('prompt-sync');

function app() {

    const promptInstance = promptSync({
        sigint : true
    });


    const getRandEvent = () => {
        const random = Math.floor(Math.random() * 3);
        if (random === 0) {
        return 'Marathon';
        } else if (random === 1) {
        return 'Triathlon';
        } else if (random === 2) {
        return 'Pentathlon';
        }
    };
    

    const getTrainingDays = event => {
        let days = undefined;
        if (event === 'Marathon') {
        days = 50;
        } else if (event === 'Triathlon') {
        days = 100;
        } else if (event === 'Pentathlon') {
        days = 200;
        }
    
        return days;
    };
    
    let name = null;

    while (name !== 'quit') {
        let userNameInput = promptInstance("Please input your name: ");
        name = userNameInput;

        if (name === 'quit') {
            console.log("See you later!")
            break;
        } else if (!name.match(/^[A-Za-z ]+$/)) {
            console.log ("Invalid name! Please try again.\n")
            continue;
        } else {
            const logEvent = (name, event) => {
                console.log(`${name}'s event is: ${event}`);
            };
            
            const logTime = (name, days) => {
                console.log(`${name}'s time to train is: ${days} days\n`);
            };
            
            const event = getRandEvent();
            const days = getTrainingDays(event);
        
            logEvent(name, event);
            logTime(name, days);
        } 
    }
}

app()

module.exports = {
    app
}