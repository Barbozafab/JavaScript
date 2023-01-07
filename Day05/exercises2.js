console.log("========== LEVEL 2 ==========");

// 1.
console.log(countries);
console.log(webTechs);

// 2.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.replaceAll('.', '').replaceAll(',', '').split(" ");
console.log(words);
console.log(words.length);

// 3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes("Meat")) {shoppingCart.unshift("Meat");}
if (!shoppingCart.includes("Sugar")) {shoppingCart.push("Sugar");}
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// 4.
countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia");

// 5.
if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess.");
} else {
    webTechs.push("Sass");
    console.log(webTechs);
} 

// 6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
