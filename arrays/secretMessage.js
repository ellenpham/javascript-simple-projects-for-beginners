let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();

// Use an array method to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push("to");
secretMessage.push("Program");

// Change the word easily to the word right by accessing the index and replacing it
secretMessage[7] = "right";

// Use an array method to remove the first string of the array
secretMessage.shift();

// Use an array method to add the string Programming to the beginning of the array
secretMessage.unshift("Programming");

// Use an array method to remove the strings get, right, the, first, time,, and replace them with the single string know,
// Syntax : array.splice(index, howmanytoremove, item1, ....., itemX)
secretMessage.splice(6, 5, "know");

// Use console.log() and .join() to print the secret message as a sentence

console.log(secretMessage.join(" "));