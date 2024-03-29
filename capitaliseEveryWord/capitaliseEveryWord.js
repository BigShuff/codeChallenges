//*********Objective******************
//The objective is to take in a sentence, and output the sentence with each word capitalised.

//*********Plan Of Attack *******************
//1)I need a way to find the first letter of each word
//2)If I can identify the space between each letter, the first letter of each word will be +1 in the string position
//3)Use a for loop to cycle through the string and compare each position with === " "
//4)A string is immutable so I need to represent the sentence in an array so the letters can be changed.
//5)Use sentenceArr = sentence.split("") to put each letter of the sentence as a seperate array element
//6)So far this gives a string called sentence that I can retrieve my required data from
// and an array of all the letters that I can use to change and subsequently display the new capitalised sentence


//use strict mode
"use strict";

//setup variables
let spaceNumArr = [];
let sentence = 'capitalise every word in this sentence.';

//split sentence into an array of letters - sentenceArr
let sentenceArr = sentence.split("");

//spaceFinder function finds the spaces in each sentence.
//the sentence is taken in through param inputSentence
function spaceFinder(inputSentence) {
    //a simple for loop that counts from 0 to 1 less than the length of the inputSentence
    for (let i = 0; i < inputSentence.length; i++) {
        //if i equals zero add it as the first element in the space number array - spaceNumArr
        //position zero is not a space in the sentence but it is the first letter so we will need it as a capital letter position.
        if (i === 0) spaceNumArr.push(i);
        //if the position of i is a space in the sentence add it to the space number array spaceNumArr incremented by one. So as to get the position of the letter not the space.
        if (inputSentence[i] === " ") spaceNumArr.push(i + 1)
    }
//return the spaceNumArr with the first position of the sentence 0, and all the other space numbers
return spaceNumArr;
}

//A forEach loop that goes through each value of spaceNumArr.
spaceNumArr.forEach(value => {
    //for each value in spaceNumArr capitalise the corresponding letter in the sentence array - sentenceArr
    sentenceArr.splice(value, 1, sentence[value].toUpperCase());
});

//output the contents of the sentence array as a string
console.log(sentenceArr.join(" "));
//program start send the value of 'sentence' to the spaceFinder function, and store the returned value in spaceNumArr.
spaceNumArr = spaceFinder(sentence);