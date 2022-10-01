//Задача 1. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

function showSeason(month) { // 3. аргумент з введеною цифрою заходить в параметр
    switch (month) { // параметр з цифрою захоидть у switch де відбувається перевірка
        case 12:
        case 1:
        case 2:
            return alert('It is winter');
        case 3:
        case 4:
        case 5:
            return alert('It is spring');
        case 6:
        case 7:
        case 8:
            return alert('It is summer');
        case 9:
        case 10:
        case 11:
            return alert('It is autumn');
        default: return alert('You pressed wrong number');
    }
}
const monthNumber = parseInt(prompt('Enter number of any month')); // 1. вводиться цифра

showSeason(monthNumber); // 2. аргумент приймає якусь введену цифру

// Застосування стрілкової функції

/*const showSeason = (month) => {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return alert('It is winter');
        case 3:
        case 4:
        case 5:
            return alert('It is spring');
        case 6:
        case 7:
        case 8:
            return alert('It is summer');
        case 9:
        case 10:
        case 11:
            return alert('It is autumn');
        default: return alert('You pressed wrong number');
    }
}
const monthNumber = parseInt(prompt('Enter number of any month'));

showSeason(monthNumber);*/