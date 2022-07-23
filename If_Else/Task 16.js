/*Задача 16. 
Комп’ютер загадує число від 1 до 5. Дати можливість користувачу за 2 спроби вгадати загадане комп’ютером число.*/

const randomNumber = Math.ceil(Math.random() * 5);

console.log(randomNumber);

let guessNumber = parseInt(prompt('Try to guess number from "1" to "5" for two tries'));

if (guessNumber < 1 || guessNumber > 5 || !guessNumber) {
    console.log('You entered incorrect number. Please, try again')
}

else if (guessNumber === randomNumber) {
    console.log('You won')
}

else {
    guessNumber = parseInt(prompt('You missed. You have the last try'));
    if (guessNumber === randomNumber) {
        console.log('You won')
    }
    else {
        console.log('You lost')
    }
}