//Задача 13. З клавіатури ввоидться номер місяця, вивести на екран пору року

/*const monthNumber = parseInt(prompt('Enter the number of month to find out what season is it now', 1));

if (monthNumber >= 1 && monthNumber <= 2 || monthNumber === 12) {
    console.log('winter');
}

else if (monthNumber >= 3 && monthNumber <= 5) {
    console.log('spring');
}

else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log('summer');
}

else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log('autumn')
}

else {
    console.log('You entered incorrect number')
}*/

//В даному випадку краще switch з групуванням

const monthNumber = parseInt(prompt('Enter the number of month to find out what season is it now', 1));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('winter')
        break
    case 3:
    case 4:
    case 5:
        console.log('spring')
        break
    case 6:
    case 7:
    case 8:
        console.log('summer')
        break
    case 9:
    case 10:
    case 11:
        console.log('autumn')
        break
    default:
        console.log('You entered incorrect number')
}
