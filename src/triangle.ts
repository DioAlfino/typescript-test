function outputOfTriangle (a: number, b: number): number {
    const output: number =  180 - (a + b);
    return output;
}

const a: number = 80;
const b: number = 65;
const result: number = outputOfTriangle(a, b);

console.log("angle triangle c =",result);

