/*Задача 27. Комп’ютер загадує два випадкових числа від 1 до 10. Вгадати обидва числа шляхом введеня можливих варіантів. 
В кінці вивести кількість спроб користувача.*/

const firstRandomNumber = Math.ceil(Math.random() * 10);
const secondRandomNumber = Math.ceil(Math.random() * 10);
let guessRandomNumber = 0;
let isGuessedFirstNumber;
let isGuessedSecondNumber;
let triesQty = 0;

do {
    guessRandomNumber = parseInt(prompt('Guess computer\'s\ two random numbers from "1" to "10"'));

    if (guessRandomNumber !== firstRandomNumber && guessRandomNumber !== secondRandomNumber) { // виправлення: тепер якщо не вгадав - не заходить
    }
    else {
        if (guessRandomNumber === firstRandomNumber) {
            isGuessedFirstNumber = true;   // виправлення: дав булеве значення тру, якщо вгадав
            alert(`You have guessed random number! It is ${firstRandomNumber}`);
        }
        if (guessRandomNumber === secondRandomNumber) {
            isGuessedSecondNumber = true;   // виправлення: дав булеве значення тру, якщо вгадав
            alert(`You have guessed another random number! It is ${secondRandomNumber}`);
        }
    }
    triesQty++;
} while (!isGuessedFirstNumber || !isGuessedSecondNumber)      // виправлення: застосував в умові два булевих значення

alert(`You spent ${triesQty} tries to guess all random numbers!`)


// Варіант з підрахунком по кожному загаданому числу

/*const firstRandomNumber = Math.ceil(Math.random() * 10);

const secondRandomNumber = Math.ceil(Math.random() * 10);
let guessFirstRandomNumber = 0;
let guessSecondRandomNumber = 0;
let guessFirstNumberTryQty = 0;
let guessSecondNumberTryQty = 0;
let trySum = 0;

do {
    while (guessFirstRandomNumber !== firstRandomNumber) {
        guessFirstRandomNumber = parseInt(prompt('Guess the first computer\'s\ random number from "1" to "10"'));
        guessFirstNumberTryQty++;

        if (guessFirstRandomNumber === firstRandomNumber) {
            alert(`You've guessed the first number! It is ${firstRandomNumber}`);
            alert(`You spent ${guessFirstNumberTryQty} tries to guess first random number!`)
        }
    }

    guessSecondRandomNumber = parseInt(prompt('Guess the second computer\'s\ random number from "1" to "10"'));
    guessSecondNumberTryQty++;

    if (guessSecondRandomNumber === secondRandomNumber) {
        alert(`You've guessed the second number! It is ${secondRandomNumber}`);
        alert(`You spent ${guessSecondNumberTryQty} tries to guess second random number!`)
        break
    }
} while (true)

trySum = guessFirstNumberTryQty + guessSecondNumberTryQty;

alert(`You spent ${trySum} tries to guess all random numbers!`)*/