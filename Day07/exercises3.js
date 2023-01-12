console.log("========== LEVEL 3 ==========");

// 1.
function userIdGeneratedByUser() {
    let numOfChars = prompt("Enter the number of characters for the ID:");
    let numOfIds = prompt("Enter the number of IDs to be generated:");

    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ids = "";

    for (let i = 0; i < numOfIds; i++) {
        let id = "";
        for (let j = 0; j < numOfChars; j++) {
            id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }

        ids += (id + '\n');
    }

    return ids;
}

// 2.
function rgbColorGenerator() {
    let rgb = "rgb(";

    rgb += Math.floor(Math.random() * 255) + ",";
    rgb += Math.floor(Math.random() * 255) + ",";
    rgb += Math.floor(Math.random() * 255) + ")";

    return rgb;
}

// 3.
function arrayOfHexaColors(num) {
    array = [];

    for (let i = 0; i < num; i++) {
        array.push(randomHexaNumberGenerator());
    }

    return num === 1 ? array[0] : array;
}

// 4.
function arrayOfRgbColors(num) {
    array = [];

    for (let i = 0; i < num; i++) {
        array.push(rgbColorGenerator());
    }

    return num === 1 ? array[0] : array;
}

// 5.
function convertHexToRgb(hex) {
    let r = parseInt("0x" + hex[1] + hex[2], 16);
    let g = parseInt("0x" + hex[3] + hex[4], 16);
    let b = parseInt("0x" + hex[5] + hex[6], 16);

    return "rgb(" + r + "," + g + "," + b + ")";
}

// 6.
function convertRgbToHex(rgb) {
    let hex = "#";
    let split = rgb.substring(4, rgb.length - 1).split(",");
    let r = Number(split[0]).toString(16);
    let g = Number(split[1]).toString(16);
    let b = Number(split[2]).toString(16);

    if (r.length === 1) {
        hex += "0"
    }

    hex += r;

    if (g.length === 1) {
        hex += "0"
    }

    hex += g;

    if (b.length === 1) {
        hex += "0"
    }

    hex += b;

    return hex;
}

// 7.
function generateColors(type, num) {
    let fun;

    if (type == "hexa") {
        fun = arrayOfHexaColors;
    } else {
        fun = arrayOfRgbColors;
    }

    return fun(num);
}

// 8.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 9.
function factorial(num) {
    let fact = 1;

    if (num < 0) {
        return -1;
    }

    for (let i = 2; i < num; i++) {
        fact *= i;
    }

    return fact;
}

// 10.
const isEmpty = (param) => param.length === 0 ? 1 : 0;
console.log(isEmpty([]));
console.log(isEmpty([1, 2, 3]));

// 11.
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// 12.
function sumOfArrayItems(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return "Error: All array items must be of type 'number'";
        }

        sum += array[i];
    }

    return sum;
}

// 13.
function average(array) {
    let sum = sumOfArrayItems(array);

    if (typeof sum !== "number") {
        return sum;
    }

    return sum / array.length;
}

// 14.
function modifyArray(array) {
    if (array.length < 5) {
        return "Item not found";
    }

    array[4] = array[4].toUpperCase();

    return array;
}

// 15.
function isPrime(num) {
    if (num < 2) return 0;
    if (num === 2) return 1;

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return 0;
        }
    }

    return 1;
}
console.log(isPrime(4));

// 16.
function isUnique(array) {
    const newArray = [];

    for (const element of array) {
        if (newArray.includes(element)) {
            return 0;
        }

        newArray.push(element);
    }

    return 1;
}

// 17.
function isSameType(array) {
    const type = typeof(array[0]);

    for (const element of array) {
        if (typeof element !== type) {
            return 0;
        }
    }

    return 1;
}

// 18.
function isValid(name) {
    const invalid = ["`", "~", "!", "@", "#", "%", "^", "&", "*", "(", ")", "-", "'", "\"", "[", "{", "}", "]", "\\", "|", "/", "?", ">", "<", ".", ",", "]"];

    for (const element of invalid) {
        if (name.includes(element)) {
            return 0;
        }
    }

    return 1;
}

// 19.
function sevenUnique() {
    const nums = [];

    for (let i = 0; i < 7; i++) {
        nums.push(Math.floor(Math.random() * 10));

        while (!isUnique(nums)) {
            nums[i] = Math.floor(Math.random() * 10);
        }
    }

    return nums;
}

// 20.
function reverseCountries(countries) {
    let reverse = [];

    for (const country of countries) {
        let newCountry = country;

        reverse.unshift(newCountry);
    }

    return reverse;
}
