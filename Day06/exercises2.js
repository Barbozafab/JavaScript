console.log("========== LEVEL 2 ==========");

// 1.
id = "";

for (i = 0; i < n; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
}

console.log(id);

// 2.
let hex = "";
const hexChars = "0123456789abcdef";

for (i = 0; i < 6; i++) {
    hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
}

console.log(`#${hex}`);

// 3.
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r},${g},${b})`);

// 4.
const fewCountries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya"
];

const newFewCountries = [];

for (country of fewCountries) {
    newFewCountries.push(country.toUpperCase());
}

console.log(newFewCountries);

// 5.
let fewLengths = [];

for (country of newFewCountries) {
    fewLengths.push(country.length);
}

console.log(fewLengths);

// 6.
const fewAbb = [];

for (i = 0; i < fewCountries.length; i++) {
    fewAbb.push([fewCountries[i], newFewCountries[i].substring(0, 3), fewLengths[i]]);
}

console.log(fewAbb);

// 7.
const land = [];

for (country of fewCountries) {
    if (country.includes("land")) {
        land.push(country);
    }
}

!land.length ? console.log("All these countries are without land.") : console.log(land);

// 8.
const ia = [];

for (country of fewCountries) {
    if (country.lastIndexOf("ia") == country.length - 2) {
        ia.push(country);
    }
}

!ia.length ? console.log("All these countries are without ia.") : console.log(ia);

// 9.
let bigIdx = 0;

for (i = 1; i < fewLengths.length; i++) {
    if (fewLengths[i] > fewLengths[bigIdx]) {
        bigIdx = i;
    }
}

console.log(fewCountries[bigIdx]);

// 10.
const five = [];

for (country of fewCountries) {
    if (country.length === 5) {
        five.push(country);
    }
}

console.log(five);

// 11.
bigIdx = 0;

for (i = 1; i < webTechs.length; i++) {
    if (webTechs[i].length > webTechs[bigIdx].length) {
        bigIdx = i;
    }
}

console.log(webTechs[bigIdx]);

// 12.
const newWeb = [];

for (web of webTechs) {
    newWeb.push([web, web.length]);
}

console.log(newWeb);

// 13.
const mernStack = ["MongoDB", "Express", "React", "Node"];

console.log(`${mernStack[0][0]}${mernStack[1][0]}${mernStack[2][0]}${mernStack[3][0]}`);

// 14.
for (web of webTechs) {
    console.log(web);
}

// 15.
const fruits = ["banana", "orange", "mango", "lemon"];
const newFruits = [];

for (i = fruits.length - 1; i >= 0; i--) {
    newFruits.push(fruits[i]);
}

console.log(newFruits);

// 16.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

for (i = 0; i < fullStack.length; i++) {
    for (j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j]);
    }
}
