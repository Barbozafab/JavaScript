console.log("========== LEVEL 2 ==========");

// 1.
const productsTotalPrice1 = products.map(product => product.price).filter(price => typeof price === "number").reduce((acc, cur) => acc + cur, 0);

// 2.
const productsTotalPrice2 = products.reduce(function(acc, cur) {if (typeof cur.price === "number") return acc + cur.price; else return acc}, 0);

// 3.
function categorizeCountries(countries) {
    const newArray = [[], [], [], []];

    countries.forEach(element => {
        if (element.includes("land")) newArray[0].push(element);
        if (element.includes("ia")) newArray[1].push(element);
        if (element.includes("island")) newArray[2].push(element);
        if (element.includes("stan")) newArray[3].push(element);
    });

    return newArray;
}

// 4.
function getLetterCount(countries) {
    let letterCount = {};
    for (let country of countries) {
        const firstLetter = country[0];
        if (letterCount[firstLetter]) letterCount[firstLetter]++;
        else letterCount[firstLetter] = 1;
    }
    return Object.entries(letterCount).map(([letter, count]) => ({ letter, count }));
}

// 5.
const getFirstTenCountries = countries => countries.slice(0, 10);

// 6.
const getLastTenCountries = countries => countries.slice(countries.length - 10, countries.length);

// 7.
function findLetter(countries) {
    const array = getLetterCount(countries);
    let max = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i].count > array[max].count) max = i;
    }

    return array[max].letter;
}
