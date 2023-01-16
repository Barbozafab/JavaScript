console.log("========== LEVEL 2 ==========");

// 1.
const student = {
    firstName: "Fábio",
    lastName: "Barboza",
    age: 20,
    skills: ["Python", "C", "Java", "RISC-V Assembly", "Haskell", "MySQL", "HTML", "CSS", "JavaScript"],
    country: "Brazil",
}

const studentJSON = JSON.stringify(student, undefined, 4);
localStorage.setItem("student", studentJSON);
