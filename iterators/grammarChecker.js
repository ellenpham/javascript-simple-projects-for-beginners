function app() {
    let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

    let storyWords = story.split(' ');
    //console.log(storyWords)
    let unnecessaryWord = 'literally';
    let misspelledWord = 'beautifull';
    let badWord = 'freaking';


    // log the original story to the console
    console.log("The original paragraph is: \n")
    console.log(story)

    // count how many word in the array 
    let count = 0;
    storyWords.forEach( (word) => {
    count++;
    });
    console.log(`\nThe total number of words in the paragraph is ${count} \n`);

    // filter the unnecessaryWord
    storyWords = storyWords.filter( (word) => {
    return word !== unnecessaryWord;
    });

    // replace all the misspelledWord
    storyWords = storyWords.map( (word) => {
    if (word === misspelledWord) {
        return "beautiful";
    } else {
        return word;
    }
    });

    // find the index of the badWord
    const badWordIndex = storyWords.findIndex( (word) => {
    return word === badWord;
    }); // return 78

    // replace the badWord
    storyWords[78] = "really";

    // check if every word is 10 characters or less
    lengthCheck = storyWords.every( (word) => {
    return word.length <= 10;
    }); // return false

    // find the index of the long word with findIndex() method
    const longWordIndex = storyWords.findIndex( (word) => {
    return word.length > 10;
    }); // return 111

    storyWords[111] = "stunning";

    // log the editted story to the console
    console.log("The paragraph after editting is: \n")
    console.log(storyWords.join(' '))
}

app()

module.exports = {
    app
}