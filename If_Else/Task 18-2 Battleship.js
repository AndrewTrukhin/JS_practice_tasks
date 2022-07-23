//Задача 18.2. Морський бій. Модифікувати попередню задачу таким чином, що кораблем керує користувач, а комп’ютер стріляє.

const fieldLength = parseInt(prompt('Enter length of the field'))
let shipPosition = parseInt(prompt('Choose a place according to the lenght of the field where you want to hide a ship'));
let computerTakingShot = Math.ceil(Math.random() * fieldLength);

if (shipPosition < 1 || shipPosition > fieldLength || !shipPosition) {
    console.log('The ship hides in a cell according to the lenght of the field. You should enter appropriate number!');
}

else if (computerTakingShot === shipPosition) {
    console.log(`Computer hit a cell number ${computerTakingShot}!\nComputer wins!`)
}

else {
    let isComputerCloseShot = Math.abs(shipPosition - computerTakingShot) === 1;
    let isDamagedShip = isComputerCloseShot;

    if (isComputerCloseShot) {
        console.log('Computer almost sank the ship');
    }

    console.log(isComputerCloseShot);
    let isChooseHowToShiftShip = confirm('Press  "OK" to move the ship one cell to the right or press "Cancel" to move the ship one cell to the left');

    if (isChooseHowToShiftShip) {
        shipPosition = shipPosition % fieldLength + 1;
    }
    else {
        if (shipPosition === 0) {
            shipPosition = fieldLength
        }
        else {
            shipPosition--;
        }
    }

    computerTakingShot = Math.ceil(Math.random() * fieldLength);
    isComputerCloseShot = Math.abs(shipPosition - computerTakingShot) === 1;
    
    if (computerTakingShot === shipPosition || isComputerCloseShot && isDamagedShip) {
        console.log('Computer won!');
    }
    else {
        console.log('Computer missed! Computer lost!');
    }
}