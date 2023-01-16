console.log("========== LEVEL 2 ==========");

// 1.
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchCatNames = async (url) => {
    try {
        const response = await fetch(url);
        const cats = await response.json();

        for (const cat of cats) console.log(cat.name);
    } catch (error) {
        console.error(error);
    }
}

fetchCatNames(catsAPI);
