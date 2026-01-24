const palindromes = function (str) {
    const arr = str.toLowerCase().split('').filter(letter => {
        return !/[.,!?;:"'(){}[\]-]/.test(letter);
    }).filter(letter => {
        return /\S/.test(letter);
    });
    const reversedArr = str.toLowerCase().split('').reverse().filter(letter => {
        return !/[.,!?;:"'(){}[\]-]/.test(letter);
    }).filter(letter => {
        return /\S/.test(letter);
    });
    return arr.every((letter, index) => letter === reversedArr[index]);
};
console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
