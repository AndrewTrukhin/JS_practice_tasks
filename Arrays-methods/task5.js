// Задача 5. Дано масив імен. Сформувати новий масив, який складається з імен, які починаються на задану літеру.

const femaleNamesArr = ['Jessica', 'Cameron', 'Angelina', 'Uma', 'Jennifer', 'Chloe', 'Scarlett', 'Judy', 'Julie', 'Julianne'];
const namesFirstLetter = 'J';
const firstLetterValue = namesFirstLetter.charCodeAt();

const sortedArr = femaleNamesArr.map((value, index, array) => {
    if (firstLetterValue === array[index]) return value
});
console.log(sortedArr);