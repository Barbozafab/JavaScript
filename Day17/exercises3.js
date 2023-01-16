console.log("========== LEVEL 3 ==========");

// 1.
const personAccount = {
    firstName: "John",
    lastName: "John",
    incomes: new Set([[1_000, "Income one"], [2_000, "Income two"]]),
    expenses: new Set([[1_000, "Expense one"], [500, "Expense two"]]),

    totalIncome: function() {
        let sumIncome = 0;
        this.incomes.forEach(income => sumIncome += income[0]);

        return sumIncome;
    },
    totalExpense: function() {
        let sumExpense = 0;
        this.expenses.forEach(expense => sumExpense += expense[0]);

        return sumExpense;
    },
    accountInfo: function() {
        console.log(this.firstName, this.lastName, this.incomes, this.expenses);
    },
    addIncome: function(income, description) {
        this.incomes.add([income, description]);
    },
    addExpense: function(expense, description) {
        this.expenses.add([expense, description]);
    },
    accountBalance: function() {
        console.log(this.totalIncome - this.totalExpense);
    },
}

const personAccountJSON = JSON.stringify(personAccount);
localStorage.setItem("personAccount", personAccountJSON);
localStorage.clear();
