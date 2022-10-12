// Задача 2. Дано масив рядків. Вивести ті, у яких немає цифр.

// Варіант вирішення від зворотнього. Регулярний вираз на пошук чисел та додати оператор НЕ

const stringArr = [
    'You have achieved 5 level',
    'You have gained 120 xp',
    'You have failed your quest',
    'You cannot take this quest until you have not got 20 level!',
    'Your have finished your quest succesfully',
];
const numsList = /[0-9]/;

const findStringWithoutNums = (arr, numsList) => arr.filter(element => !numsList.test(element));
console.log(findStringWithoutNums(stringArr, numsList));


// Варіант вирішення з пошуком літер та символу знак оклику

/*const stringArr = [
    'You have reached 5 level',
    'You have gained 120 xp',
    'You have failed your quest!',
    'You cannot take this quest until you have not got 20 level!',
    'Your have finished your quest succesfully',
];
const numsList = /^[a-z\s!]+$/i;

const findStringWithoutNums = (arr, numsList) => arr.filter(element => numsList.test(element));
console.log(findStringWithoutNums(stringArr, numsList));*/