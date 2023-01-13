console.log("========== LEVEL 1 ==========");

// 1.
const newSet = new Set();

// 2.
for (let i = 0; i <= 10; i++) {
    newSet.add(i);
}

// 3.
newSet.delete(0);

// 4.
newSet.clear();

// 5.
const array = ['a', 'b', 'c', 'd', 'e'];

const arraySet = new Set(array);

// 6.
const countries = ['Finland', 'Sweden', 'Norway']
const newMap = new Map();

for (const country of countries) {
    newMap.set(country, country.length);
}
