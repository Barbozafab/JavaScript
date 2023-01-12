console.log("========== LEVEL 2 ==========");

// 1.
const solveLinEquation = (a, b, c, x, y) => (a * x) + (b * y) + c;

// 2.
function solveQuadratic(a = 0, b = 0, c = 0) {
    if (a === 0) {
        return "Not a quadratic equation";
    }

    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        return "No real roots";
    } else if (delta === 0) {
        return [-b / (2 * a)];
    } else {
        return [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)];
    }
}

// 3.
function printArray(array) {
    for (const element of array) {
        console.log(element);
    }
}

// 4.
function showDateTime() {
    const now = new Date();

    return `${now.getDate() < 10 ? '0' : ''}${now.getDate()}/${now.getMonth() + 1 < 10 ? '0' : ''}${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours() < 10 ? '0' : ''}${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
}

// 5.
const swapValues = (x, y) => [y, x];

// 6.
function reverseArray(array) {
    const newArray = [];

    for (const element of array) {
        newArray.unshift(element);
    }

    return newArray;
}

// 7.
function capitalizeArray(array) {
    const newArray = [];

    for (const element of array) {
        newArray.push(element.toUpperCase());
    }

    return newArray;
}

// 8.
const addItem = (item, array = []) => array.push(item);

// 9.
const removeItem = (index, array) => {array.splice(index, 1); return array;}

// 10.
function sumOfNumbers(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        sum += i;
    }

    return sum;
}

// 11.
function sumOfOdds(number) {
    let sum = 0;

    for (let i = 1; i <= number; i += 2) {
        sum += i;
    }

    return sum;
}

// 12.
function sumOfEvens(number) {
    let sum = 0;

    for (let i = 2; i <= number; i += 2) {
        sum += i;
    }

    return sum;
}

// 13.
function evensAndOdds(num) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(`The number of odds are ${oddCount}.`);
    console.log(`The number of evens are ${evenCount}.`);
}

// 14.
function sum() {
    let _sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        _sum += arguments[i]
    }

    return _sum;
}

// 15.
function randomUserIp() {
    let ip = "";

    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 256);

        ip += num;

        if (i !== 3) {
            ip += ".";
        }
    }

    return ip;
}

// 16.
function randomMacAddress() {
    let mac = "";
    const hexDigits = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 2; j++) {
            mac += hexDigits[Math.floor(Math.random() * 16)];
        }

        if (i !== 5) {
            mac += ":";
        }
    }

    return mac;
}

// 17.
function randomHexaNumberGenerator() {
    let number = "#";
    const hexDigits = "0123456789ABCDEF";

    for (let i = 0; i < 6; i++) {
        number += hexDigits[Math.floor(Math.random() * 16)];
    }

    return number;
}

// 18.
function userIdGenerator() {
    let id = "";
    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 7; i++) {
        id += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }

    return id;
}
