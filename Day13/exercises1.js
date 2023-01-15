console.log("========== LEVEL 1 ==========");

// 1.
console.table(countries);

// 2.
console.table(countries_data);

// 3.
console.group("1");
console.table(countries);
console.groupEnd();

console.group("2");
console.table(countries_data);
console.groupEnd();
