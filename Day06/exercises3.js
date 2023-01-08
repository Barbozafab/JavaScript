console.log("========== LEVEL 3 ==========");

// 1.
const sortedCountries = [];

for (country of fewCountries) {
    let newCountry = country;

    sortedCountries.push(newCountry);
}

console.log(sortedCountries);

// 2.
sortedCountries.sort();
console.log(sortedCountries);

// 3.
webTechs.sort();
console.log(webTechs);
mernStack.sort();
console.log(mernStack);

// 4.
let lands = [];

for (i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        lands.push(countries.slice(i, i + 1).toString());
    }
}

console.log(lands);

// 5.
bigIdx = 0;

for (i = 1; i < countries.length; i++) {
    if (countries[i].length > countries[bigIdx].length) {
        bigIdx = i;
    }
}

console.log(countries[bigIdx]);

// 6.
let newLands = [];

for (i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        newLands.push(countries.slice(i, i + 1).toString());
    }
}

console.log(newLands);

// 7.
let four = [];

for (i = 0; i < countries.length; i++) {
    if (countries[i].length === 4) {
        four.push(countries.slice(i, i + 1).toString());
    }
}

console.log(four);

// 8.
let twoWords = [];

for (i = 0; i < countries.length; i++) {
    if (countries[i].split(" ").length >= 2) {
        twoWords.push(countries.slice(i, i + 1).toString());
    }
}

console.log(twoWords);

// 9.
let newCountries = [];

for (i = countries.length - 1; i >= 0; i--) {
    newCountries.push(countries[i].toUpperCase());
}

console.log(newCountries);
