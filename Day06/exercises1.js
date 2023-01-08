console.log("========== LEVEL 1 ==========");

// 1.
let i;
for (i = 0; i <= 10; i++) {
    console.log(i);
}

i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2.
for (i = 10; i >= 0; i--) {
    console.log(i);
}

i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}

i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0);

// 3.
let n = 10;
for (i = 0; i < n; i++) {
    console.log(i);
}

// 4.
for (i = 1; i <= 7; i++) {
    console.log('*'.repeat(i));
}

// 5.
for (i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

// 6.
console.log("i\ti^2\ti^3");
for (i = 0; i <= 10; i++) {
    console.log(`${i}\t${i * i}\t${i * i * i}`);
}

// 7.
for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 8.
for (i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// 9.
for (i = 2; i <= 100; i++) {
    let primo = true;

    for (let j = 2; j <= parseInt(Math.sqrt(i)); j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        console.log(i);
    }
}

// 10.
let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// 11.
let evens = 0, odds = 0;
for (i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evens += i;
    } else {
        odds += i;
    }
}

console.log(`The sum of all evens from 0 to 100 is ${evens}. And the sum of all odds from 0 to 100 is ${odds}.`);

// 12.
const arr = [evens, odds];
console.log(arr);

// 13.
const rand = [];

for (i = 0; i < 5; i++) {
    rand.push(Math.random());
}

console.log(rand);

// 14.
const newRand = [];

for (i = 0; i < 5; i++) {
    let num = Math.random();

    while (newRand.includes(num)) {
        num = Math.random();
    }

    newRand.push(num);
}

console.log(newRand);

// 15.
let id = "";
const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

for (i = 0; i < 6; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
}

console.log(id);
