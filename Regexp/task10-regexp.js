// Задача 10. Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

const ipAdress = '105.98.90.18'; // чи правильний правопис назви змінної ???
const doubleDigitNumsRegExp = /\b\d{2}\b/g;

const getDoubleDigitNumsArr = (string, regexp) => string.match(regexp).length;

const doubleDigitNumsArr = getDoubleDigitNumsArr(ipAdress, doubleDigitNumsRegExp); // виведу масив двоцифрових
console.log(doubleDigitNumsArr);