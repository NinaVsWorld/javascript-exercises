const removeFromArray = function(arr, ...manyMoreArgs) {
    return arr.filter(item =>
        !manyMoreArgs.includes(item)
    );
}

console.log(removeFromArray([1, 2, 3, 4], 7, 2));

// Do not edit below this line
module.exports = removeFromArray;
