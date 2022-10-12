// Задача 5. Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

const stringArr = [
    'You have reached 3 level',
    'You have gained 120 xp',
    'You have failed your quest!',
    'You cannot take this quest until you have not got 30 level!',
    'Your have finished your quest succesfully',
    'Minions left - 1',
    '-120 dmg',
    '105.98.90.18',
];
const numsList = /\b[13]{1}\b/;

const findNums = (arr, regexp) => arr.filter(element => element.match(regexp));
console.log(findNums(stringArr, numsList));