console.log("========== LEVEL 3 ==========");

// 1.
const averageWeight = async (url) => {
    try {
        const response = await fetch(url);
        const cats = await response.json();
        const averageWeight = cats.reduce((acc, cur) => acc + (Number(cur.weight.metric[0]) + Number(cur.weight.metric[4])) / 2, 0) / cats.length;
        console.log(averageWeight);
    } catch (error) {
        console.error(error);
    }
}

averageWeight(catsAPI);

// 2.
const largestCountries = async (url) => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        const countriesSize = countries.map(country => ({ name: country.name.common, area: country.area }));
        countriesSize.sort((a, b) => b.area - a.area);
        console.log(countriesSize.slice(0, 10));
    } catch (error) {
        console.error(error);
    }
}

largestCountries(countriesAPI);

// 3.
const countLanguages = async (url) => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        const languagesArray = countries.map(country => country.languages);
        const languagesSet = new Set();

        for (const language of languagesArray) {
            for (const lang in language) {
                languagesSet.add(language[lang]);
            }
        }

        console.log(languagesSet.size);
    } catch (error) {
        console.error(error);
    }
}

countLanguages(countriesAPI);
