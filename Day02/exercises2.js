console.log("========== LEVEL 2 ==========");

// 1.
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2.
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// 3.
console.log(typeof '10' == typeof 10);
console.log(typeof parseInt('10') == typeof 10);
console.log(typeof Number('10') == typeof 10);
console.log(typeof +'10' == typeof 10);

// 4.
console.log(parseFloat('9.8') == 10);
console.log(Math.ceil(parseFloat('9.8')) == 10);
console.log(Math.round(parseFloat('9.8')) == 10);

// 5.
console.log("python".includes("on") && "jargon".includes("on"));

// 6.
console.log("I hope this course is not full of jargon.".includes("jargon"));

// 7.
console.log(Math.round(100 * Math.random()));

// 8.
console.log(Math.round(50 * Math.random()) + 50);

// 9.
console.log(Math.round(255 * Math.random()));

// 10.
console.log("JavaScript"[Math.round(9 * Math.random())]);

// 11.
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

// 12.
console.log("You cannot end a sentence with because because because is a conjunction".substring(31, 54));
