console.log("========== LEVEL 3 ==========");

// 1.
class Statistics {
    constructor(data) {this.data = [...data].sort((a, b) => a - b)};

    count() {return this.data.length;}
    sum() {return this.data.reduce((acc, cur) => acc + cur, 0);}
    min() {return Math.min(...this.data);}
    max() {return Math.max(...this.data);}
    range() {return this.max() - this.min();}
    mean() {return this.sum() / this.count();}
    median() {return this.count() % 2 === 0 ? (this.data[this.count() / 2 - 1] + this.data[this.count() / 2]) / 2 : this.data[Math.floor(this.count() / 2)];}
    mode() {
        let modeObj = {};
        this.data.forEach(num => {
            if (!modeObj[num]) modeObj[num] = 0;
            modeObj[num]++;
        });
        let maxFrequency = 0, modes = [];
        for (let num in modeObj) {
            if (modeObj[num] > maxFrequency) {
                modes = [num];
                maxFrequency = modeObj[num];
            } else if (modeObj[num] === maxFrequency) {
                modes.push(num);
            }
        }
        if (modes.length === Object.keys(modeObj).length) modes = [];
        return { mode: parseInt(modes[0]), count: maxFrequency };
    }
    variance() {
        let mean = this.mean();
        let variance = this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (this.count() - 1);
        return variance;
    }
    std() {return Math.sqrt(this.variance());}
    freqDist() {
        let frequency = {};
        this.data.forEach(function (i) { frequency[i] = frequency[i] + 1 || 1 });
        return Object.entries(frequency).map(element => [element[1] * 100 / this.count(), parseInt(element[0]),]).sort((a, b) => b[0] - a[0]);
    }
    describe() {
        console.log('Data: ', this.data);
        console.log('Count: ', this.count());
        console.log('Sum: ', this.sum());
        console.log('Min: ', this.min());
        console.log('Max: ', this.max());
        console.log('Range: ', this.range());
        console.log('Mean: ', this.mean());
        console.log('Median: ', this.median());
        console.log('Mode: ', this.mode());
        console.log('Variance: ', this.variance());
        console.log('Standard Deviation: ', this.std());
        console.log('Frequency Distribution: ', this.freqDist());
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);
statistics.describe();

// 2.
class PersonAccount {
    constructor(firstName, lastName, incomes = new Set(), expenses = new Set()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = incomes;
        this.expenses = expenses;
    }

    totalIncome() {
        let sumIncome = 0;
        this.incomes.forEach(income => sumIncome += income[0]);

        return sumIncome;
    }
    totalExpense() {
        let sumExpense = 0;
        this.expenses.forEach(expense => sumExpense += expense[0]);

        return sumExpense;
    }
    accountInfo() {
        console.log(this.firstName, this.lastName, this.incomes, this.expenses);
    }
    addIncome(income, description) {
        this.incomes.add([income, description]);
    }
    addExpense(expense, description) {
        this.expenses.add([expense, description]);
    }
    accountBalance() {
        console.log(this.totalIncome - this.totalExpense);
    }
}
