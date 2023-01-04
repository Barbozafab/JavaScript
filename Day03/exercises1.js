console.log("========== LEVEL 1 ==========");

// 1.
let firstName = "Fábio";
let lastName = "Barboza";
let country = "Brazil";
let city = "Santo André";
let age = 20;
let isMarried = false;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

// 2.
console.log(typeof '10' === typeof 10);

// 3.
console.log(parseInt('9.8', 10) === '10');

// 4.
console.log(true);
console.log(1 < 2);
console.log(2 ** 2 > 1 ** 2);

console.log(false);
console.log(1 > 2);
console.log(2 ** 2 < 1 ** 2);

// 5.
let i = 4 > 3, // true
    ii = 4 >= 3, // true
    iii = 4 < 3, // false
    iv = 4 <= 3, // false
    v = 4 == 4, // true
    vi = 4 === 4, // true
    vii = 4 != 4, // false
    viii = 4 !== 4, // false
    ix = 4 != '4', // false
    x = 4 == '4', // true
    xi = 4 === '4', // false
    xii = "python".length > "jargon".length; // false

console.log(i, ii, iii, iv, v, vi, vii, viii, ix, x, xi, xii);

// 6.
i = 4 > 3 && 10 < 12; // true
ii = 4 > 3 && 10 > 12; // false
iii = 4 > 3 || 10 < 12; // true
iv = 4 > 3 || 10 > 12; // true
v = !(4 > 3); // false
vi = !(4 < 3); // true
vii = !(false); // true
viii = !(4 > 3 && 10 < 12); // false
ix = !(4 > 3 && 10 > 12); // true
x = !(4 === '4'); // true
xi = !"dragon".includes("on") && !"python".includes("on") // false

console.log(i, ii, iii, iv, v, vi, vii, viii, ix, x, xi);

// 7.
const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`);
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());
