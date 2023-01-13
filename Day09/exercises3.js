console.log("========== LEVEL 3 ==========");

// 1.
const sortedName = [...countries_data].sort((a, b) => a.name.localeCompare(b.name));
const sortedCapital = [...countries_data].sort((a, b) => a.capital?.localeCompare(b.capital));
const sortedPopulation = [...countries_data].sort((a, b) => a.population - b.population);

// 2.
function mostSpokenLanguages(countries, num) {
    let languageCount = {};

    for (const country of countries) {
        for (const language of country.languages) {
            if (languageCount[language]) languageCount[language]++;
            else languageCount[language] = 1;
        }
    }

    return Object.entries(languageCount)
        .map(([language, count]) => ({language, count}))
        .sort((a, b) => b.count - a.count)
        .slice(0, num);
}

// 3.
function mostPopulatedCountries(countries, num) {
    let populationCount = {};

    for (const country of countries) {
        populationCount[country.name] = country.population;
    }

    return Object.entries(populationCount)
        .map(([name, population]) => ({ name, population }))
        .sort((a, b) => b.population - a.population)
        .slice(0, num);
}

// 4.
const statistics = {
    data: [],
    count: function() {return this.data.length},
    sum: function() {return this.data.reduce((acc, cur) => acc + cur, 0)},
    min: function() {return Math.min(...this.data)},
    max: function() {return Math.max(...this.data)},
    range: function() {return this.max() - this.min()},
    mean: function() {return this.sum() / this.count()},
    median: function() {if (this.count() % 2 === 0) return ((this.data[this.count() / 2 - 1] + this.data[this.count() / 2]) / 2); else return this.data[Math.floor(this.count() / 2)]},
    mode: function () {
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
        return {mode: parseInt(modes[0]), count: maxFrequency};
    },
    variance: function () {
        let mean = this.mean();
        let variance = this.data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / (this.count() - 1);
        return variance;
    },
    std: function () {
        return Math.sqrt(this.variance());
    },
    freqDist: function () {
        let frequency = {};
        this.data.forEach(function (i) { frequency[i] = frequency[i] + 1 || 1 });
        return Object.entries(frequency).map(element => [element[1] * 100 / this.count(), parseInt(element[0]),]).sort((a, b) => b[0] - a[0]);
    },
    describe: function() {
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
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
statistics.data = ages.sort((a, b) => a - b);
console.log(statistics.describe());
