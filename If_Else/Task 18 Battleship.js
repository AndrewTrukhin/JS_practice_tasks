/*Задача 18. Морський бій. Ворожий корабель, може знаходитись в одному із квадратів (кількість квадратів вводиться з клавіатури), 
які розташовані лінійно (один за одним) на річці. 

Позиція корабля визначається комп’ютером випадковим чином.
Гра відбувається за правилами: 
1) якщо користувач стріляє у заданий квадрат (тобто вводиться номер квадрата), то корабель потоплено;
2) якщо корабель знаходиться у сусідньому по відношенню до квадрата, де знаходиться корабель, то корабель пошкоджено (про це повідомляємо користувача).
За два постріли спробувати потопити корабель.*/

const fieldLength = parseInt(prompt('Enter length of the field'));
const shipPosition = Math.ceil(Math.random() * fieldLength);
let shipHealth;
let damageWhenCloseShot;
let damagedShip;
let takingShot = parseInt(prompt('You have two tries to sink a ship. Take the first shot!'));

if (takingShot < 0 || takingShot > fieldLength || !takingShot) {
    console.log('Plese, enter an appropriate number!');
}

else if (takingShot === shipPosition) {
    console.log('You sank a ship. You won!');
}
else {
    //shipHealth = 100;

    //damageWhenClosetShot = 50;

    damagedShip = shipHealth - damageWhenCloseShot;

    if (Math.abs(takingShot - shipPosition) === 1) {
        damagedShip = true;
        console.log('Good shot! The ship is damaged!');
    }

    takingShot = parseInt(prompt('This is your second try! Don`t miss!'));

    if (takingShot === shipPosition || Math.abs(takingShot - shipPosition) === 1 && damagedShip) { /// або shipHealth < 100
        console.log('You sank a ship. You won!');
    }

    else {
        console.log('You missed! You lost!')
    }
}