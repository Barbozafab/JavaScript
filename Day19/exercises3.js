console.log("========== LEVEL 3 ==========");

// 1.
function personAccount() {
    let firstName = "John";
    let lastName = "John";
    let incomes = new Set([[1_000, "Income one"], [2_000, "Income two"]]);
    let expenses = new Set([[1_000, "Expense one"], [500, "Expense two"]]);

    function totalIncome() {
        let sumIncome = 0;
        incomes.forEach(income => sumIncome += income[0]);

        return sumIncome;
    }

    function totalExpense() {
        let sumExpense = 0;
        expenses.forEach(expense => sumExpense += expense[0]);

        return sumExpense;
    }

    function accountInfo() {
        return `${firstName}, ${lastName}, ${incomes}, ${expenses}`;
    }

    function addIncome(income, description) {
        incomes.add([income, description]);
    }

    function addExpense(expense, description) {
        expenses.add([expense, description]);
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance,
    }
}

const innerFunctions = personAccount();
console.log(innerFunctions.totalIncome());
console.log(innerFunctions.totalExpense());
innerFunctions.addIncome(3_000, "Income 3");
console.log(innerFunctions.accountInfo());
console.log(innerFunctions.accountBalance());
