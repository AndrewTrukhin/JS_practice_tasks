/*Задача 18.1 Модифікувати попередню задачу з можливістю після пострілу переміщення корабля у випадковим чином вибрану сусідню клітинку 
(якщо звичайно корабель не було потоплено за першим разом).*/

const fieldLength = parseInt(prompt('Determine lenght of the field'));
let shipPosition = Math.ceil(Math.random() * fieldLength);
let takingShot = parseInt(prompt('You have two tries to sink a ship. The ship can move after shot to the right or left. Take the first shot!'));
if (takingShot < 1 || takingShot > fieldLength || !takingShot) {
    console.log('You should enter appropriate number!');
}

else if (takingShot === shipPosition) {
    console.log('You sank the ship! You won!');
}

else {
    let isCloseShot = Math.abs(shipPosition - takingShot) === 1;

    let variableToShiftShip = Math.ceil(Math.random() * 2);

    let shipHealth = 100; 

    let damage = 50;

    if (isCloseShot) {
        shipHealth = shipHealth - damage;
        console.log('Good shot! Your shot was close! Now, the ship moved one left or right');   
    }
        if (variableToShiftShip === 1) {                                                     
            shipPositionShifted = shipPosition % fieldLength + 1;                              
        }
        else {
            if ((shipPosition - 1) === 0) {
                shipPositionShifted = fieldLength;                      
            }
            else {
                shipPositionShifted = shipPosition - 1;
            }
        }
    
    takingShot = parseInt(prompt('This is your second try! Don`t miss!'));
    isCloseShot = Math.abs(shipPosition - takingShot) === 1;
        
    if (takingShot === shipPositionShifted || isCloseShot && shipHealth < 100) {
        console.log('You sank a ship. You won!');
    }
    else {
        if (isCloseShot === 1) {
            console.log('You were close, but you lost anyway:(')
        }
        else {
            console.log('You missed! You lost!')
        }
    }
}