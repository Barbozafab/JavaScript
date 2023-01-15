console.log("========== LEVEL 3 ==========");

// 1.
console.time("Regular for loop");
let count1 = 0;
for (let i = 0; i < countries.length; i++) count1++;
for (let i = 0; i < countries_data.length; i++) count1++;
console.timeEnd("Regular for loop");

console.time("For of loop");
let count2 = 0;
for (const country of countries) count2++;
for (const country of countries_data) count2++;
console.timeEnd("For of loop");

console.time("forEach loop");
let count3 = 0;
countries.forEach(country => count3++);
countries_data.forEach(country => count3++);
console.timeEnd("forEach loop");
