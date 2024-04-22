function calcOfCircle (radius: number) {
    const diameter: number = 2 * radius;
    const circumference: number = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return {diameter, circumference, area};
}

const radius: number = 5;
const outputValue = calcOfCircle(radius);

console.log("diamater =" , outputValue.diameter);
console.log("circumference =" , outputValue.circumference);
console.log("area =", outputValue.area);
