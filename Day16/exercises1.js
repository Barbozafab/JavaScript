console.log("========== LEVEL 1 ==========");

// 1.
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
const skillsJSON = JSON.stringify(skills, undefined, 4);
console.log(skillsJSON);

// 2.
let age = 250;
const ageJSON = JSON.stringify(age, undefined, 4);
console.log(ageJSON);

// 3.
let isMarried = true;
const isMarriedJSON = JSON.stringify(isMarried, undefined, 4);
console.log(isMarriedJSON);

// 4.
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}
const studentJSON = JSON.stringify(student, undefined, 4);
console.log(studentJSON);
