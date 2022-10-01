//Задача 2. Створити функцію, яка за номером місяця повертає його назву.

const showMonthName = (month) => {
    switch (month) {
        case 1: return alert('It is January');
        case 2: return alert('It is February');
        case 3: return alert('It is March');
        case 4: return alert('It is April');
        case 5: return alert('It is May');
        case 6: return alert('It is June');
        case 7: return alert('It is July');
        case 8: return alert('It is August');
        case 9: return alert('It is September');
        case 10: return alert('It is October');
        case 11: return alert('It is November');
        case 12: return alert('It is December');
        default: return alert('You pressed wrong number');
    }
}
const monthNumber = parseInt(prompt('Enter any number of the month'));

showMonthName(monthNumber);