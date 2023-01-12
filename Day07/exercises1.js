console.log("========== LEVEL 1 ==========");

// 1.
const printFullName = () => console.log("Fábio de Andrade Barboza");

// 2.
const returnFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// 3.
const addNumbers = (num1, num2) => num1 + num2;

// 4.
const areaOfRectangle = (length, width) => length * width;

// 5.
const perimeterOfRectangle = (length, width) => 2 * (length + width);

// 6.
const volumeOfRectPrism = (length, width, height) => length * width * height;

// 7.
const areaOfCircle = (radius) => Math.PI * radius * radius;

// 8.
const circumOfCircle = (radius) => 2 * Math.PI * radius;

// 9.
const density = (mass, volume) => mass / volume;

// 10.
const speed = (distance, time) => distance / time;

// 11.
const weight = (mass, gravity = 9.81) => mass * gravity;

// 12.
const oC_to_oF = (oC) => (oC * 9 / 5) + 32;

// 13.
function bmi(weight, height) {
    let _bmi = weight / (height * height);

    if (_bmi < 18.5) {
        return `Underweight`;
    } else if (_bmi < 24.9) {
        return `Normal`;
    } else if (_bmi < 29.9) {
        return `Overweight`;
    } else {
        return `Obese`;
    }
}

// 14.
function checkSeason(month) {
    if ([`December`, `January`, `February`].includes(month)) {
        return `Winter`;
    } else if ([`March`, `April`, `May`].includes(month)) {
        return `Spring`;
    } else if ([`June`, `July`, `August`].includes(month)) {
        return `Summer`;
    } else {
        return `Autumn`;
    }
}

// 15.
function findMax(num1, num2, num3) {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    return max;
}
