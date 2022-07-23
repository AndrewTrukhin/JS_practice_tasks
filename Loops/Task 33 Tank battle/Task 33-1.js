/*33. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). 
При влучанні броня танка пошкоджується на 30 балів (всього 100). 
Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.*/

// Логіка гри

let tankPosition = Math.ceil(Math.random() * 10);
console.log('tankPosition', tankPosition)
let ammoQty = parseInt(prompt('Enter quantity of ammo to destroy a tank'));
let tankArmorPoints = 100;
const shotDamage = 30;

do {
    let shotPosition = parseInt(prompt(`Choose a cell from "1" to ${fieldLenght}`))
    ammoQty--;

    if (shotPosition === tankPosition) {
        tankArmorPoints -= shotDamage;
        let tankCellShot = document.getElementById(`${tankPosition}`);
        tankCellShot.textContent += `Tank is damaged! It has ${tankArmorPoints}% of armor!`;
        tankCellShot.style.backgroundColor = "red";
        alert(`You hit the tank! It has ${tankArmorPoints} armor points now!`);
    }

    if (tankArmorPoints < 1) {
        alert(`You have destroyed the tank! It's last position was ${tankPosition}.`);
        break
    }
    else if (ammoQty === 0) {
        alert('You are out of ammo! Game over!')
        break
    }

    const maxLeftMove = -1;
    const maxRightMove = 2;
    tankPosition += Math.floor(Math.random() * (maxRightMove - maxLeftMove) + maxLeftMove);
    if (tankPosition === 0) {
        tankPosition = 10;
    }
    else if (tankPosition > fieldLenght) {
        tankPosition %= fieldLenght;
    }

} while (true)