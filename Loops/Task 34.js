/*34. Танчики. На полі з 10 клітинок розміщують танк. За один крок танк може переміщуватися на відстань від 0 до 1 у  будь-якому напрямку (в межах поля). 
При влучанні броня танка пошкоджується на 30 балів (всього 100). 
Гра продовжується поки або не закінчаться снаряди (кількість вводиться з клавіатури) або не буде влучання. Спробуйте відоразити гру графічно.
Спробуйте модифікувати попередню гру для випадку, коли танк також може стріляти по вашій гарматі (ваша гармата також знаходиться на цьому ж полі).*/

// Логіка гри

let tankPosition = Math.ceil(Math.random() * 10);

let сannonPosition = parseInt(prompt(`Deploy your cannon on the field from "1" to ${fieldLenght}`, '1'));
do {
    сannonPosition = Math.ceil(Math.random() * fieldLenght);
} while (сannonPosition === tankPosition)
alert(`We have to report, that our command decided to deploy cannon in more safe position number ${сannonPosition}`);

let cannonAmmoQty = parseInt(prompt('Enter quantity of ammo to destroy a tank'));
let tankArmorPoints = 100;
const сannonShotDamage = 30;

do {
    let cannonShotPosition = parseInt(prompt(`Choose a cell from "1" to ${fieldLenght} where to shoot`));
    cannonAmmoQty--;

    if (cannonShotPosition === tankPosition) {
        tankArmorPoints -= сannonShotDamage;
        let tankCellShot = document.getElementById(`${tankPosition}`);
        tankCellShot.textContent += `Tank is damaged! It has ${tankArmorPoints}% of armor!`;
        tankCellShot.style.backgroundColor = "red";
        alert(`You hit the tank! It has ${tankArmorPoints} armor points now!`);
    }

    if (tankArmorPoints < 1) {
        alert(`You have destroyed the tank! It's last position was ${tankPosition}.`);
        break
    }
    else if (cannonAmmoQty === 0) {
        alert('You are out of ammo! Game over!');
        break
    }

    let tankShotPosition = Math.ceil(Math.random() * fieldLenght);
    if (tankShotPosition === сannonPosition) {
        let cannonPositionCell = document.getElementById(`${сannonPosition}`);
        cannonPositionCell.style.backgroundColor = "black";
        cannonPositionCell.textContent = "Tank has destroyed your cannon!";
        alert(`You lost! Tank has shot your cannon in position number ${сannonPosition}`);
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