// Задача 1. Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

const stringArr = [
    'You have reached 5 level',
    'You have gained 120 xp',
    'You have failed your quest',
    'You cannot take this quest until you have not got 20 level',
    'Your have finished your quest succesfully',
];
const numsList = /[0-9]/; // /\d/ також пошук цифр у стрінзі

const findStringWithNums = (arr, numsList) => arr.filter(element => numsList.test(element));
console.log(findStringWithNums(stringArr, numsList));


// Варіант вирішення з forEach

/*const stringArr = [
    'You have achieved 5 level',
    'You have gained 120 xp',
    'You died',
    'You cannot get this quest until you have not got 20 level',
    'Quest has been finished succesfully',
];
const numsList = /[0-9]/;

const findStringWithNums = (arr, numsList) => arr.forEach(element => {
    if (numsList.test(element)) {
        console.log(element)
    }
});
findStringWithNums(stringArr, numsList);*/