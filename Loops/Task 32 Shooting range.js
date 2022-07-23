/*32. Тир. На полі з 10 клітинок розміщують зайця. За один крок заєць може стрибати на відстань від 0 до 3 позицій у будь-якому напрямку. 
З клавіатури вводиться позиція пострілу. 
Гра продовжується поки  у користувача не закінчаться патрони (кількість вводиться з клавіатури) або не буде влучання.*/

const fieldLenght = parseInt(prompt('Enter lenght of the line where rabbit hides'));
let ammoQty = parseInt(prompt('Enter quantity of ammo to hunt a rabbit'));
let rabbitPosition = Math.ceil(Math.random() * fieldLenght);
let isRabbitDead;
const maxLeftStep = -3;
const maxRightStep = 4;

do {
    let shotPosition = parseInt(prompt(`Choose a cell from "1" to "${fieldLenght}" where you want to shoot`));
    ammoQty--;
    isRabbitDead = (shotPosition === rabbitPosition);

    if (isRabbitDead) {
        alert('You shot the rabbit! You won!');
        break
    }

    else if (ammoQty === 0) {
        alert('You are out of ammo! Game over!');
        break
    }

    else {
        alert(`You have ${ammoQty} ammo left! The rabbit could jump from "0" to "3" left or right!`);
        rabbitPosition = Math.floor(Math.random() * (maxRightStep - maxLeftStep) + maxLeftStep) + rabbitPosition;
        if (rabbitPosition <= 0) {
            rabbitPosition = rabbitPosition + fieldLenght;
        }

        else if (rabbitPosition > fieldLenght) {
            rabbitPosition = rabbitPosition % fieldLenght;
            if (rabbitPosition === 0) {
                rabbitPosition = 10;
            }
        }
    }
} while (true)