console.log("========== LEVEL 1 ==========");

// 1.
let yourAge = window.prompt("Enter your age: ");

if (yourAge >= 18) {
    window.alert("You are old enough to drive.");
} else {
    window.alert(`You are left with ${18 - yourAge} year(s) to drive.`);
}

// 2.
let myAge = window.prompt("Enter my age: ");

if (myAge > yourAge) {
    window.alert(`I am ${myAge - yourAge} year(s) older than you`);
} else {
    window.alert(`You are ${yourAge - myAge} year(s) older than me.`);
}

// 3.
let a = 4, b = 3;

if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than than ${b}`);
}

console.log(`${a} is ${a > b ? "greater" : "less"} than ${b}`);

switch (true) {
    case a > b:
        console.log(`${a} is greater than ${b}`);
        break;
    default:
        console.log(`${a} is less than than ${b}`);
        break;
}

// 4.
let number = window.prompt("Enter a number: ");

window.alert(`${number} is an ${number % 2 === 0 ? "even" : "odd"} number.`);
