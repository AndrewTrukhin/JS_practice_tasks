/*Задача 6. 
З клавіатури вводяться імена двох дітей та кількість шоколадок. 
Вивести не екран ім’я того учня, у якого кількість шоколадок є більшою.*/

const firstChild = prompt('Enter the name of the first child');

const chocolatesFirstChildCount = parseInt(prompt('Enter quantity of chocolates which has the first child'));

const secondChild = prompt('Enter the name of the second child');

const chocolatesSecondChildCount = parseInt(prompt('Enter quantity of chocolateswhich has the second child'));

if (chocolatesFirstChildCount > chocolatesSecondChildCount) {
    console.log(firstChild);
}

else if (chocolatesSecondChildCount > chocolatesFirstChildCount) {
    console.log(secondChild);
}

else {
    console.log('Children have an equal quantity of chocolates')
}





