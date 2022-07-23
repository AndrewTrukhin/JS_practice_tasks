/*Задача 2. 
З клавіатури вводиться назва категорії водія. Вивести на екран назву транспортного засобу, яким він може керувати*/

const driveCategories = prompt('Enter your driving category from "A" to "D"');

switch (driveCategories) {
    case 'A':
        console.log('You have a right to drive a motorcycle')
        break
    case 'B':
        console.log('You have a right to drive a car')
        break
    case 'C':
        console.log('You have a right to drive a truck')
        break
    case 'D':
        console.log('You have a right to drive a bus')
        break
    default: 
        console.log('You entered incorrect letter');
}

// ще можна toLowerCase()/toUpperCase() заюзати, але тут необовязково