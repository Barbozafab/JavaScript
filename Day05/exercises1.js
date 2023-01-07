console.log("========== LEVEL 1 ==========");

// 1.
const arr = [];
console.log(arr);

// 2.
const nums = [0, 1, 2, 3, 4, 5, 6];
console.log(nums);

// 3.
console.log(nums.length);

// 4.
console.log(nums[0], nums[parseInt(nums.length / 2)], nums[nums.length - 1]);

// 5.
const mixedDataTypes = [0, 1.1, true, "abc", null, undefined];
console.log(mixedDataTypes);

// 6.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// 7.
console.log(itCompanies);

// 8.
console.log(itCompanies.length);

// 9.
console.log(itCompanies[0], itCompanies[parseInt(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

// 10.
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);

// 11.
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase());

// 12.
console.log(`${itCompanies.slice(0, itCompanies.length - 2).join(", ")} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// 13.
itCompanies.includes("Intel") ? console.log("Intel") : console.log("Intel is not found.");

// 14.
const filteredItCompanies = [];
if (itCompanies[0].toLowerCase().indexOf('o') === itCompanies[0].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[0]);}
if (itCompanies[1].toLowerCase().indexOf('o') === itCompanies[1].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[1]);}
if (itCompanies[2].toLowerCase().indexOf('o') === itCompanies[2].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[2]);}
if (itCompanies[3].toLowerCase().indexOf('o') === itCompanies[3].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[3]);}
if (itCompanies[4].toLowerCase().indexOf('o') === itCompanies[4].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[4]);}
if (itCompanies[5].toLowerCase().indexOf('o') === itCompanies[5].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[5]);}
if (itCompanies[6].toLowerCase().indexOf('o') === itCompanies[6].toLowerCase().lastIndexOf('o')) {filteredItCompanies.push(itCompanies[6]);}
console.log(filteredItCompanies);

// 15.
itCompanies.sort();
console.log(itCompanies);

// 16.
itCompanies.reverse();
console.log(itCompanies);

// 17.
console.log(itCompanies.slice(0, 3));

// 18.
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// 19.
console.log(itCompanies.slice(0, parseInt(itCompanies.length / 2)).concat(itCompanies.slice(parseInt(itCompanies.length / 2) + 1)));

// 20.
console.log(itCompanies.shift());

// 21.
itCompanies.splice(parseInt(itCompanies.length / 2), 1);
console.log(itCompanies);

// 22.
console.log(itCompanies.pop());

// 23.
itCompanies.pop();
itCompanies.pop();
itCompanies.pop();
itCompanies.pop();
console.log(itCompanies);
