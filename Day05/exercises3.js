console.log("========== LEVEL 3 ==========");

// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);

let median = (ages[parseInt(ages.length / 2)] + ages[parseInt(ages.length / 2) + 1]) / 2;
console.log(median);

let average = (ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9]) / ages.length;
console.log(average);

let range = ages[ages.length - 1] - ages[0];
console.log(range);

console.log(Math.abs(ages[0] - average), Math.abs(ages[ages.length - 1] - average));

// 2.
console.log(countries.slice(0, 10));

// 3.
console.log(countries[countries.length / 2]);

// 4.
console.log([countries.slice(0, countries.length / 2), countries.slice(countries.length / 2)]);
