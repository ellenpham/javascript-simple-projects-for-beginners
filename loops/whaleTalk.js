const promptSync = require('prompt-sync');

function app () {
    const promptInstance = promptSync({
        sigint: true
    });

    let input = null;

    while (input !== 'quit') {
        
        let input = promptInstance("Please input a sentence in human language: ");

        if (input === 'quit') {
            console.log('See you later!');
            break;
        } else {
            
            const vowels = ['a', 'e', 'i', 'o', 'u'];

            let resultArray = [];

            for (let i = 0; i < input.length; i++) {
                if (input[i] === 'e') {
                    resultArray.push(input[i]);
                    };

                    if (input[i] === 'u') {
                    resultArray.push(input[i]);
                    };

                for (let j = 0; j < vowels.length; j++) {
                    if (input[i] === vowels[j]) {
                    resultArray.push(input[i]);
                    };
                };
            };

            let resultString = resultArray.join("").toUpperCase();
            console.log(`Translate it into its “whale talk” equivalent: ${resultString}.\n`);
        }
    };
}

app()

module.exports = {
    app
}