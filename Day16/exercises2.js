console.log("========== LEVEL 2 ==========");

// 1.
const studentJSONFiltered = JSON.stringify(student, ["firstName", "lastName", "skills"], 4);
console.log(studentJSONFiltered);
