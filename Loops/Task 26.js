/*Задача 26. Комп’ютер загадує випадкове число від 1 до 10. Вгадати число шляхом введеня можливих варіантів. В кінці вивести кількість спроб користувача. */

const randomNumber = Math.ceil(Math.random() * 10);
let tryQty = 0;
let guessRandomNumber;

do {
    guessRandomNumber = parseInt(prompt('Guess computer\'s\ random number from "1" to "10"'));
    tryQty++;
} while (guessRandomNumber !== randomNumber)

alert(`You spent ${tryQty} tries to guess random number!`)