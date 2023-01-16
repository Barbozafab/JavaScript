console.log("========== LEVEL 1 ==========");

// 1.
function outerPlusOne() {
    let count = 0;

    function innerPlusOne() {
        count++;
        return count;
    }

    return innerPlusOne;
}

const innerPlusOne = outerPlusOne();
console.log(innerPlusOne());
console.log(innerPlusOne());
console.log(innerPlusOne());
