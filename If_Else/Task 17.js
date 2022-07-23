/*Задача 17. Комп’ютер загадує число від 1 до 10. Двоє користувачів надають свої відповіді. 
Виграє той, у кого число знаходиться ближче до загаданого комп’ютером числа.*/

const randomNumber = Math.ceil(Math.random() * 10);

const firstPlayerNumber = parseInt(prompt('First player tries to guess closer number from 1 to 10', 1));

const secondPlayerNumber = parseInt(prompt('Second player tries to guess closer number from 1 to 10', 1));

console.log(secondPlayerNumber);

if (firstPlayerNumber === secondPlayerNumber) {
    console.log('It`s draw!');
}

else if (Math.abs(randomNumber - firstPlayerNumber) < Math.abs(randomNumber - secondPlayerNumber)) {
    console.log('First player wins');
}

else {
    console.log('Second player wins');
}
