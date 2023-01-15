console.log("========== LEVEL 3 ==========");

// 1.
const cleanText = (str) => str.replace(/[@#$%&;]/g, '');

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& @rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanedText = cleanText(sentence)
console.log(cleanedText);

// 2.
function mostFrequentWords(str) {
    const words = str.match(/[A-Za-z0-9]+/g);
    const counts = {};
    const wordCounts = [];

    for (const word of words) {
        if (counts[word]) counts[word]++;
        else counts[word] = 1;
    }

    for (const word in counts) wordCounts.push({word, count: counts[word]});

    wordCounts.sort((a, b) => b.count - a.count);

    return wordCounts.slice(0, 3);
}

console.log(mostFrequentWords(cleanedText));
