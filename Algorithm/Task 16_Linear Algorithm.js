//Зашифрувати символ методом зміщення (шифр Цезаря).

const simpleLetter = prompt('Enter the letter "A" to be scripted by Caesar');

const shiftQty = parseInt(prompt('Enter "3" to shift letter "A"'));

const letterConvert = simpleLetter.charCodeAt(0);

const letterAndShiftSum = (letterConvert + shiftQty - 65) % 26 + 65; // ПІДМІНЯЄМО ДІАПАЗОНИ З 65-90 ДО 1-26

const shiftCircle = String.fromCharCode(letterAndShiftSum); // КОНВЕРТАЦІЯ 93 В "С"

alert(shiftCircle);