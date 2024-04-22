"use strict";
function calcOfCircle(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    return { diameter, circumference, area };
}
const radius = 5;
const outputValue = calcOfCircle(radius);
console.log("diamater =", outputValue.diameter);
console.log("circumference =", outputValue.circumference);
console.log("area =", outputValue.area);
