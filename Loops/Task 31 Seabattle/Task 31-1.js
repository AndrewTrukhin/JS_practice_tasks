/*31. Морський бій. Комп’ютер випадковим чином розміщує одиночний корамель на полі 5*5. 
З клавіатури поступово вводяться координати пострілу поки корабель не буде потоплено. 
Спробуйте відоразити гру графічно.*/

// Логіка пострілу

const shipPositionRow = Math.ceil(Math.random() * rowQty);
const shipPositionColumn = Math.ceil(Math.random() * columnQty);

let userShotRow;
let userShotColumn;
let isShipGotShot;
let shotNumbers = 0;

do {
    userShotRow = parseInt(prompt(`Choose a row from "1" to "${rowQty}" to take a shot!`, '1'));
    userShotColumn = parseInt(prompt(`Choose a column from "1" to "${columnQty}" to take a shot!`, '1'));
    isShipGotShot = (userShotRow === shipPositionRow && userShotColumn === shipPositionColumn);

    if (isShipGotShot) {
        let hitShipsCell = document.getElementById(`${userShotRow}${userShotColumn}`); // якщо влучив - переміг
        hitShipsCell.style.backgroundColor = "red";
    }

    else if (userShotRow && userShotColumn) {
        shotNumbers++
        let hitEmptyCell = document.getElementById(`${userShotRow}${userShotColumn}`);
        hitEmptyCell.style.backgroundColor = "black";
        hitEmptyCell.textContent = `${shotNumbers}`;
    }
    
} while (!isShipGotShot && !isNaN(userShotRow) && !isNaN(userShotColumn))

if (isShipGotShot) {
    alert(`You hit the ship! It was on the row ${shipPositionRow} and column ${shipPositionColumn}`)
}