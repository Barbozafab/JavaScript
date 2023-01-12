console.log("========== LEVEL 2 ==========");

// 1.
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let max = Object.keys(users)[0];

for (const person of Object.keys(users)) {
    if (users[person].skills.length > users[max].skills.length) {
        max = person;
    }
}

console.log(max);

// 2.
let loggedIn = 0;
let points = 0;

for (const person of Object.keys(users)) {
    if (users[person].isLoggedIn) loggedIn++;
    if (users[person].points >= 50) points++;
}

console.log(loggedIn, points);

// 3.
const mern = [];

for (const person of Object.keys(users)) {
    if (users[person].skills.includes("MongoDB") && users[person].skills.includes("Express") && users[person].skills.includes("React") && users[person].skills.includes("Node")) mern.push(person);
}

console.log(mern);

// 4.
const copyUsers = Object.assign({}, users);

copyUsers.Fabio = {email: 'barbozafab@outlook.com', skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C/C++', 'Haskell', 'MySQL', 'RISC-V Assembly'], age: 20, isLoggedIn: true, points: 0};

// 5.
console.log(Object.keys(users));

// 6.
console.log(Object.values(users));

// 7.
const countries = {};
countries.Brazil = {name: "Brazil", capital: "Brasília", population: 220_000_000, languages: ["Portuguese"]};

console.log(countries.Brazil);
