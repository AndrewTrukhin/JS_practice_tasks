// Задача 3. Дано масив рядків. Вивести ті, у яких є голосні літери.

const stringArr = [
    'You have reached 5 level',
    'You have gained 120 xp',
    'You have failed your quest!',
    'You cannot take this quest until you have not got 20 level!',
    'Your have finished your quest succesfully',
    '-120 dmg',
    '105.98.90.18',
];
const vowelsList = /[aeiouy]/i;

const findStringWithVowels = (arr, vowelsList) => arr.filter(element => vowelsList.test(element));
console.log(findStringWithVowels(stringArr, vowelsList));