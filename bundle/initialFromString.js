"use strict";
function getInitialFromString(input) {
    const words = input.split(' ');
    const initWords = words.map(words => words.charAt(0));
    return initWords.join('').toUpperCase();
}
const inputWords = "Dio Alfino 3";
const init = getInitialFromString(inputWords);
console.log("initial =", init);
