function areaOfRectangle (length: number, width: number): number {
    const area = length * width;
    return area;
}

const lengthValue: number = 5;
const width: number = 3;
const output: number = areaOfRectangle(lengthValue, width);
console.log({output});

