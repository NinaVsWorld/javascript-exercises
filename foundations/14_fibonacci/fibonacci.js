const fibonacci = function(num) {
    const n = parseInt(num);
    if (n < 0) {
        return "OOPS";
    }
    return helper(0, 1, n, 0);
};

const helper = function(prev, next, stop, acc) {
    if (acc == stop) {
        return prev;
    }
    const num = prev + next;
    return helper(next, num, stop, acc + 1);
}

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
