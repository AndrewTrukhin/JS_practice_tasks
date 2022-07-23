/*Задача 21. На екрані виводиться меню:
    1.Ініціалізація (сума=0)
    2.Додати 2
    3.Додати 3
    4.Відняти 2
    5.Відняти 3.
    6.Вивести суму
    7.Вихід.
Шляхом поступового вибору відповідних пунктів спробувати отримати число N, яке вводиться з клавіатури.*/

let actionList;
const secretNumber = parseInt(prompt('Enter a number from 1 to 100'));
let totalAmount = 0;
let changerTwo = 2;
let changerThree = 3;

do {
    console.log(actionList !== 7)
    actionList = parseInt(prompt(`Press "1" to initialize sum to "0"; 
    "2" to plus 2; 
    "3" to plus 3; 
    "4" to minus 2; 
    "5" to minus 3; 
    "6" to withdraw the sum; 
    "7" to exit`));

    switch (actionList) {
        case 1:
            totalAmount = 0;
            alert(`You initialize sum to "0"`);
            break
        case 2:
            totalAmount += changerTwo;
            alert('You added 2');
            break
        case 3:
            totalAmount += changerThree;
            alert('You added 3');
            break
        case 4:
            totalAmount -= changerTwo;
            alert('You subtrackted 2');
            break
        case 5:
            totalAmount -= changerThree;
            alert('You subtrackted 3');
            break
        case 6:
            alert(`Your sum is: ${totalAmount}`);
            break
        case 7:
            alert('Please, come again');
            break
        default:
            alert('You pressed wrong number');
    }
} while (totalAmount !== secretNumber && actionList !== 7)

alert(`You won! The secret number was: ${secretNumber}`)