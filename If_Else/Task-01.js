/*Задача 0.1. На екран виводиться меню:
1. Веселий
2. Сумний
3. Обурений*/

const choosingSmile = parseInt(prompt('Enter how you feel when "1" is happy, "2" is sad and "3" is angry'));

switch (choosingSmile) {
    case 1:
        console.log('(^_^)');
        break
    case 2:
        console.log('(-_-)');
        break
    case 3:
        console.log('`(*_*)`')
}
