console.log("========== LEVEL 3 ==========");

// 1.
let month = window.prompt("Enter a month: ").toLowerCase();

if (["january", "march", "may", "july", "august", "october", "december"].includes(month)) {
    window.alert(`${month} has 31 days.`);
} else if (["april", "june", "september", "november"].includes(month)) {
    window.alert(`${month} has 30 days.`);
} else if (month === "february") {
    window.alert(`${month} has 28 or 29 days.`);
} else {
    window.alert("Not a valid month.");
}
