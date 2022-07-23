//Задача 5.1 .Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби

const firstNumber = Math.random() * 5;
const randomNumber = Math.ceil(firstNumber);
let guessNumber = parseInt(prompt('You have to tries to guess the number from 1 to 5'));

if (guessNumber === randomNumber) {
    console.log('You won');
}

else {
    guessNumber = parseInt(prompt('You have the last try'));

    if (guessNumber === randomNumber) {
        console.log('You won');
    }

    else {
        console.log('You lost');
    }
}