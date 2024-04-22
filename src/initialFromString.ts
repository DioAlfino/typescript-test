function getInitialFromString (input: string): string {
    const words = input.split(' ');
    const initWords = words.map (words => words.charAt(0));

    return initWords.join('').toUpperCase();
}

const inputWords: string = "Dio Alfino 3";
const init: string = getInitialFromString(inputWords);

console.log("initial =", init);
