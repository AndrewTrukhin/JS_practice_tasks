/*Задача 12. З клавіатури вводиться рейтинг користувача. 1-Профі, 2-Досвідчений, 3-Знаючий, 4-Початківець.
 //Чи доволено робити коментарі (1, 2 -дозволено, 3,4- не дозволено)*/

/*const userLevel = parseInt(prompt('Enter your level of user (1 - proffesional; 2 - experienced; 3 - knowing; 4 - beginner)', 1));

if (userLevel === 1 || userLevel === 2) {
    console.log('It is allowed to make comments')
}

else if (userLevel === 3 || userLevel === 4) {
    console.log('It is not allowed to make comments')
}

else {
    console.log('You entered incorrect number')
}*/

//В даному випадку краще switch з групуванням

const userLevel = parseInt(prompt('Enter your level of user (1 - proffesional; 2 - experienced; 3 - knowing; 4 - beginner)', 1));

switch (userLevel) {
    case 1:
    case 2:
        console.log('It is allowed to make comments')
        break
    case 3:
    case 4:
        console.log('It is not allowed to make comments')
        break
    default:
        console.log('You entered incorrect number')
}
