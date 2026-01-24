const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        const date = new Date();
        if ((a.yearOfDeath === undefined) && (b.yearOfDeath === undefined)) {
            return (date.getFullYear() - a.yearOfBirth) - (date.getFullYear() - b.yearOfBirth);
        } else if (a.yearOfDeath === undefined) {
            return (date.getFullYear() - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        } else if (b.yearOfDeath === undefined) {
            return (a.yearOfDeath - a.yearOfBirth) - (date.getFullYear() - b.yearOfBirth);
        } else {
            return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        }
    })
    return arr.pop();
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
console.table(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
