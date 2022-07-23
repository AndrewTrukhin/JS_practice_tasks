/*Задача 1. Вивести на екран рядок тексту
а а. . . а с с . . . с
У рядку 37 букв «а» і 10 букв «с»*/

let quantityALetters = 37;
let quantityCLetters = 10;

for (let i = 0; i < quantityALetters; i++) {
    document.write('a');
}

for (let i = 0; i < quantityCLetters; i++) {
    document.write('c');
}