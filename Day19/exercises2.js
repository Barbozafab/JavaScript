console.log("========== LEVEL 2 ==========");

// 1.
function outerThreeFunctions() {
    let num = 0;

    function innerAdd(x) {
        num += x;
        return num;
    }

    function innerMultiply(x) {
        num *= x;
        return num;
    }

    function innerDivide(x) {
        num /= x;
        return num;
    }

    return {
        innerAdd: innerAdd,
        innerMultiply: innerMultiply,
        innerDivide: innerDivide,
    }
}

const innerThreeFunctions = outerThreeFunctions();
console.log(innerThreeFunctions.innerAdd(10));
console.log(innerThreeFunctions.innerAdd(-2));
console.log(innerThreeFunctions.innerMultiply(2));
console.log(innerThreeFunctions.innerDivide(4));
