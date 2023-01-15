console.log("========== LEVEL 1 ==========");

// 1.
const text = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
const earnings = text.match(/\d+/g);

console.log(12 * (parseInt(earnings[0]) + parseInt(earnings[2])) + parseInt(earnings[1]));

// 2.
const particles = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
const points = particles.match(/-?\d+/g);
const sortedPoints = points.map(Number).sort((a, b) => a - b);
const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];
console.log(distance);

// 3.
function is_valid_variable(name) {
    const pattern = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
    return pattern.test(name);
}
console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));
