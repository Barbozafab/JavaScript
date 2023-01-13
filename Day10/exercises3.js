console.log("========== LEVEL 3 ==========");

// 1.
function spokenLanguages(countries) {
    const langArray = [];
    countries.forEach(country => country.languages.forEach(language => langArray.push(language)));
    
    const langSet = new Set(langArray);
    const counts = [];
    
    for (const lang of langSet) {
        counts.push({language: lang, count: langArray.filter((language) => language === lang).length});
    }

    return counts;
}
    
console.log(spokenLanguages(countries_data).length);

// 2.
const mostSpokenLanguages = (countries, num) => spokenLanguages(countries).sort((a, b) => b.count - a.count).slice(0, num).map(obj => {let newObj = {}; newObj[obj.language] = obj.count; return newObj});
