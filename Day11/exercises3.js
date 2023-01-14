console.log("========== LEVEL 3 ==========");

// 1.
for (const {name, capital, population, languages} of countries_data) {
    console.log(name, capital, population, languages);
}

// 2.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, scores] = student;
let jsScore = scores[2];
let reactScore = scores[3];
console.log(name, skills, jsScore, reactScore);

// 3.
function convertArrayToObject(students) {
    return students.map(([name, skills, scores]) => ({name, skills, scores}));
}

// 4.
const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}
const newStudent = {...studentObj};
newStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
newStudent.skills.backEnd.push({skill: 'Express', level: 9});
newStudent.skills.dataBase.push({skill: 'SQL', level: 8});
newStudent.skills.dataScience.push('SQL');
console.log(newStudent)
console.log(studentObj)
