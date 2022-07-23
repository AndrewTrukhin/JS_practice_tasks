/*Задача 16.1. Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). 
Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, 
або розташоване від нього (від лівого або правого краю) не більше ніж на 10.*/

const intervalStart = Math.ceil(Math.random() * 100);

console.log(intervalStart);

const intervalEnd = Math.ceil(Math.random() * (100 - intervalStart) + intervalStart);

console.log(intervalEnd);

const guessNumber = parseInt(prompt('Try to guess an interval beetween 1 and 100 by entering number'));

const stepCount = 10;

console.log(guessNumber)

if (guessNumber >= intervalStart - stepCount && guessNumber <= intervalEnd + stepCount) {
    console.log('You win')
}

else {
    console.log('You lost')
}