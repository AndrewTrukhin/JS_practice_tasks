// Задача 8. Розробити функцію, яка би для довільної кількості переданих символів визначала, кількість букв «а».

const lettersArr = ['a', 'b', 'c', 'a', 'd', 'a'];
const searchedLetter = 'a';
let letterACount = 0;

const letterAQty = lettersArr.forEach(element => {
    if (element === searchedLetter) letterACount++;
});
console.log(letterACount);