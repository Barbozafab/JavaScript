console.log("========== LEVEL 2 ==========");

// 1.
function tenMostFrequentWords(str) {
    const words = str.match(/[A-Za-z0-9]+/gi);
    const counts = {};
    const wordCounts = [];

    for (const word of words) {
        if (counts[word]) counts[word]++;
        else counts[word] = 1;
    }

    for (const word in counts) wordCounts.push({word, count: counts[word]});

    wordCounts.sort((a, b) => b.count - a.count);

    return wordCounts.slice(0, 10);
}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
