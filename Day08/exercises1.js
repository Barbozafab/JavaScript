console.log("========== LEVEL 1 ==========");

// 1.
const dog = {};

// 2.
console.log(dog);

// 3.
dog.name = "Oliver";
dog.legs = 4;
dog.color = "Brown";
dog.age = 10;
dog.bark = function() {return "Woof woof";}

// 4.
console.log(Object.entries(dog));

// 5.
dog.breed = "Wiener";
dog.getDogInfo = function() {return Object.entries(this)};
console.log(dog.getDogInfo());
