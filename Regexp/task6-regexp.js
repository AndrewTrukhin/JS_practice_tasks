// Задача 6. Дано рядок тексту, вивести усі числа, які є у тексті.

const editionVersion = '15.9.10, SSDT for VS 2017';
const numsList = /\d+/g;

const getNums = (string, numsList) => string.match(numsList);

const newNumsList = getNums(editionVersion, numsList);
console.log(newNumsList);