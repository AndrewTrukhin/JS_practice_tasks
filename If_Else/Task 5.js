//Задача 5. Комп’ютер випадковим чином генерує число. Вгадати, чи наступне число буде більшим чи меншим.

const firstNumber = Math.random();

const secondNumber = Math.random();

console.log(firstNumber.toFixed(2));

const isBigger = confirm('Will the next number be a bigger than previous one?');

console.log(secondNumber.toFixed(2));

if (isBigger && secondNumber > firstNumber) {
    console.log('You won');
}

else if (!isBigger && secondNumber < firstNumber) {
    console.log('You won')
}

else {
    console.log('You lost');
}
