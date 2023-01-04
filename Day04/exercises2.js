console.log("========== LEVEL 2 ==========");

// 1.
let grade = window.prompt("Enter the grade: ");

if (80 <= grade && grade <= 100) {
    window.alert('A');
} else if (70 <= grade && grade <= 89) {
    window.alert('B');
} else if (60 <= grade && grade <= 69) {
    window.alert('C');
} else if (50 <= grade && grade <= 59) {
    window.alert('D');
} else if (0 <= grade && grade <= 49) {
    window.alert('F');
} else {
    window.alert("Not a valid grade.");
}

// 2.
let month = window.prompt("Enter a month: ").toLowerCase();

if (month === "september" || month === "october" || month === "november") {
    window.alert("Autumn");
} else if (month === "december" || month === "january" || month === "february") {
    window.alert("Winter");
} else if (month === "march" || month === "april" || month === "may") {
    window.alert("Spring");
} else if (month === "june" || month === "july" || month === "august") {
    window.alert("Summer");
} else {
    window.alert("Not a valid month.");
}

// 3.
let day = window.prompt("Enter a day: ").toLowerCase();

if (day === "saturday" || day === "sunday") {
    window.alert(`${day} is a weekend.`);
} else if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
    window.alert(`${day} is a working day.`);
} else {
    window.alert("Not a valid day.");
}
