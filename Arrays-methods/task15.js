// Задача 15. Дано масив імен працівників. Сформувати новий масив, який складається з перших літер імен.

const femaleNamesArr = ['Jessica', 'Cameron', 'Angelina', 'Uma', 'Jennifer', 'Chloe', 'Scarlett', 'Judy', 'Julie', 'Julianne'];

const firstLetterNamesArr = femaleNamesArr.map(element => element[0]);
console.log(firstLetterNamesArr);