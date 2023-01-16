console.log("========== LEVEL 1 ==========");

// 1.
const countriesAPI = "https://restcountries.com/v3.1/all";
// fetch(countriesAPI)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

const fetchCountries = async (url) => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        console.log(countries);
    } catch (error) {
        console.error(error);
    }
}

fetchCountries(countriesAPI);
