console.log("========== LEVEL 1 ==========");

// 1.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

// forEach => iterates over each element of an array.
// map => applies a function to every element of an array, modifying it.
// filter => returns a sub-array of elements that satisfy a given function.
// reduce => iterates over each element of an array, accumulating a value.

// 2.
const callback = (element) => console.log(element);
products.forEach(callback);

// 3.
countries.forEach(country => console.log(country));

// 4.
names.forEach(name => console.log(name));

// 5.
numbers.forEach(number => console.log(number));

// 6.
const countriesUpper = countries.map(country => country.toUpperCase());

// 7.
const countriesLength = countries.map(country => country.length);

// 8.
const numbersSquared = numbers.map(number => number * number);

// 9.
const namesUpper = names.map(name => name.toUpperCase());

// 10.
const productsPrices = products.map(product => product.price);

// 11.
const countriesLand = countries.filter(country => country.includes("land"));

// 12.
const countriesSix = countries.filter(country => country.length === 6);

// 13.
const countriesSixOrMore = countries.filter(country => country.length >= 6);

// 14.
const countriesE = countries.filter(country => country.startsWith('E'));

// 15.
const productsValue = products.filter(product => product.price !== '' && product.price !== ' ');

// 16.
const getStringLists = array => array.filter(item => typeof item === "string");

// 17.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// const sum = numbers.reduce((acc, cur) => acc + cur);

// 18.
const sentence = countries.reduce((acc, cur) => acc + cur + ", ", "") + "are north European countries";

// 19.
// some => returns true if at least one element of the array satisfies a given function
// every => returns true if, and only if, all elements of the array satisfy a given function

// 20.
console.log(names.some(name => name.length > 7));

// 21.
console.log(countries.every(country => country.includes("land")));

// 22.
// find => returns the value of the first element of the array that satisfies a given function
// findIndex => returns the index of the first element of the array that satisfies a given function

// 23.
console.log(countries.find(country => country.length === 6));

// 24.
console.log(countries.findIndex(country => country.length === 6));

// 25.
console.log(countries.findIndex(country => country === "Norway"));

// 26.
console.log(countries.findIndex(country => country === "Russia"));
