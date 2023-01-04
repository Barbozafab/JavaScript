console.log("========== LEVEL 2 ==========");

// 1.
let base = Number(window.prompt("Enter base: "));
let height = Number(window.prompt("Enter height: "));

window.alert(`The area of the triangle is ${0.5 * base * height}`);

// 2.
let a = Number(window.prompt("Enter side a: "));
let b = Number(window.prompt("Enter side b: "));
let c = Number(window.prompt("Enter side c: "));

window.alert(`The perimeter of the triangle is ${a + b + c}`);

// 3.
let length = Number(window.prompt("Enter length: "));
let width = Number(window.prompt("Enter width: "));

window.alert(`The area of the rectangle is ${length * width}`);
window.alert(`The perimeter of the rectangle is ${2 * (length + width)}`);

// 4.
let radius = Number(window.prompt("Enter the radius: "));

window.alert(`The area of the circle is ${Math.PI * (radius ** 2)}`);
window.alert(`The perimeter of the circle is ${2 * Math.PI * radius}`);

// 5.
console.log(`slope = 2`);
console.log(`x-intercept = 1`);
console.log(`y-intercept = -2`);

// 6.
console.log(`slope = ${(10 - 2) / (6 - 2)}`);

// 7.
console.log(`slope(5) === slope(6)? ${2 === ((10 - 2) / (6 - 2))}`);

// 8.
console.log((10) ** 2 + 6 * 10 + 9);
console.log((0) ** 2 + 6 * 0 + 9);
console.log((-3) ** 2 + 6 * -3 + 9);

// 9.
let hours = Number(window.prompt("Enter hours: "));
let rate = Number(window.prompt("Enter rate per hour: "));

window.alert(`Your weekly earning is ${hours * rate}`);

// 10.
let yourName = window.prompt("Enter your first name: ");

window.alert(`Your name, ${yourName}, is ${yourName.length > 7 ? "long" : "short"}.`)

// 11.
let familyName = window.prompt("Enter your family name: ");

window.alert(`Your first name, ${yourName}, is ${yourName.length > familyName.length ? "longer" : "shorter"} than your family name, ${familyName}.`);

// 12.
let myAge = 250;
let yourAge = 25;

console.log(`I am ${Math.abs(myAge - yourAge)} years ${myAge > yourAge ? "older" : "younger"} than you.`)

// 13.
let birthYear = window.prompt("Enter birth year: ");
// yourAge = now.getFullYear() - birthYear;

window.alert(`You are ${yourAge}. ${yourAge >= 18 ? "You are old enough to drive." : `You will be allowed to drive after ${18 - yourAge} year(s).`}`)

// 14.
let numberOfYears = window.prompt("Enter number of years: ");

window.alert(`${numberOfYears} years is equal to ${numberOfYears * 365 * 24 * 60 * 60}`);

// 15.
console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
