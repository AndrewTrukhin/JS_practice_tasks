/*Задача 24. З клавіатури вводиться пароль (правильний пароль- 78). Поки пароль не вірний дати можливість користувачу повторно ввести його. */

const correctPassword = 78;
let enterPassword;

do {
    enterPassword = parseInt(prompt('Enter your password'));
    if (enterPassword !== correctPassword) {
        alert('You`ve entered incorrect password!')
    }
} while (enterPassword !== correctPassword);

if (enterPassword === correctPassword) {
    alert('You`ve eneterd correct password!')
}


// Інший варіант

/*const correctPassword = 78;
let enterPassword;

do {
    enterPassword = parseInt(prompt('Enter your password'));
    if (enterPassword === correctPassword) {
        alert('You`ve eneterd correct password!')
        break
    }
    else {
        alert('You`ve entered incorrect password!')
    }
} while (true);*/