console.log("========== LEVEL 2 ==========");

// 1.
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const A = new Set(a);
const B = new Set(b);

const unionArray = [...a, ...b];
const unionSet = new Set(unionArray);

// 2.
const interArray = a.filter(x => B.has(x));
const interSet = new Set(interArray);

// 3.
const diffArray = a.filter(x => !B.has(x));
const diffSet = new Set(diffArray);

console.log(unionSet);
console.log(interSet);
console.log(diffSet);
