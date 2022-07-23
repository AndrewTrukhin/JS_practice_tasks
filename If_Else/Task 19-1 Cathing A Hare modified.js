/*Задача 19.1. Модифікувати попередню задачу вказуючи початкову позицію зайця випадковим чином а також можливістю переміщення зайця після пастки.*/

let rabbitPositionRow;
let rabbitPositionColumn;
const varriableForRabbitRandomPosition = Math.ceil(Math.random() * 4);

if (varriableForRabbitRandomPosition === 1) {
    rabbitPositionRow = 1;
    rabbitPositionColumn = 1;
    console.log('Rabbit is in row 1, column 1');
}

else if (varriableForRabbitRandomPosition === 2) {
    rabbitPositionRow = 1;
    rabbitPositionColumn = 2;
    console.log('Rabbit is in row 1, column 2');
}

else if (varriableForRabbitRandomPosition === 3) {
    rabbitPositionRow = 2;
    rabbitPositionColumn = 1;
    console.log('Rabbit is in row 2, column 1');
}
else {
    rabbitPositionRow = 2;
    rabbitPositionColumn = 2;
    console.log('Rabbit is in row 2, column 2');
}

let placingTrapRow = parseInt(prompt('Choose a row (1 or 2) to place a trap'));
let placingTrapColumn = parseInt(prompt('Choose a column (1 or 2) to place a trap'));
let varriableForRabbitJump = Math.ceil(Math.random() * 4);
let rabbitJumpRow;
let rabbitJumpColumn;

if (varriableForRabbitJump === 1) {
    rabbitJumpRow = 1;
    rabbitJumpColumn = 1;
    console.log('Rabbit jumped in row 1, column 1');
}

if (varriableForRabbitJump === 2) {
    rabbitJumpRow = 1;
    rabbitJumpColumn = 2;
    console.log('Rabbit jumped in row 1, column 2');
}

if (varriableForRabbitJump === 3) {
    rabbitJumpRow = 2;
    rabbitJumpColumn = 1;
    console.log('Rabbit jumped in row 2, column 1');
}

if (varriableForRabbitJump === 4) {
    rabbitJumpRow = 2;
    rabbitJumpColumn = 2;
    console.log('Rabbit jumped in row 2, column 2');
}

if (rabbitJumpRow === rabbitPositionRow && rabbitJumpColumn === rabbitPositionColumn) {  // Щоб заєць не стрибав у те ж місце
    if (rabbitJumpRow === 1 && rabbitJumpColumn === 1) {
        rabbitJumpRow = rabbitJumpRow + 1;
        rabbitJumpColumn = rabbitJumpColumn + 1;
    }

    if (rabbitJumpRow === 1 && rabbitJumpColumn === 2) {
        rabbitJumpRow = rabbitJumpRow + 1;
        rabbitJumpColumn = rabbitJumpColumn - 1;
    }

    if (rabbitJumpRow === 2 && rabbitJumpColumn === 1) {
        rabbitJumpRow = rabbitJumpRow - 1;
        rabbitJumpColumn = rabbitJumpColumn + 1;
    }

    if (rabbitJumpRow === 2 && rabbitJumpColumn === 2) {
        rabbitJumpRow = rabbitJumpRow - 1;
        rabbitJumpColumn = rabbitJumpColumn - 1;
    }
    console.log('rabbitrow = rabbit jumprow', rabbitJumpRow);
    console.log('rabbitcolumn = rabbit jumprcolumn', rabbitJumpColumn);
}

if (placingTrapRow === rabbitJumpRow && placingTrapColumn === rabbitJumpColumn) {
    console.log('You won 100 scores!');
}
else {
    placingTrapRow = parseInt(prompt('This is the last try. Choose a row (1 or 2) to place a trap'));

    placingTrapColumn = parseInt(prompt('This is the last try. Choose a column (1 or 2) to place a trap'));

    if (varriableForRabbitJump === 1) {
        rabbitJumpRow = 1;
        rabbitJumpColumn = 1;
        console.log('Rabbit jumped in row 1, column 1');

        if (varriableForRabbitJump === 2) {
            rabbitJumpRow = 1;
            rabbitJumpColumn = 2;
            console.log('Rabbit jumped in row 1, column 2');
        }

        if (varriableForRabbitJump === 3) {
            rabbitJumpRow = 2;
            rabbitJumpColumn = 1;
            console.log('Rabbit jumped in row 2, column 2');
        }

        if (varriableForRabbitJump === 4) {
            rabbitJumpRow = 2;
            rabbitJumpColumn = 2;
            console.log('Rabbit jumped in row 2, column 2');
        }

        if (placingTrapRow === rabbitJumpRow && placingTrapColumn === rabbitJumpColumn) {
            console.log('You won 50 scores!');
        }

        else {
            console.log(`Rabbit jumped in row ${rabbitJumpRow}, column ${rabbitJumpColumn}! You lost!`)
        }
    }
}