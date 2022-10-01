// Задача 12. Скласти скрипт, що знаходить всі парні елементи на непарних місцях.

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numsArr.forEach((element, index) => {
    if (element % 2 === 0 && index % 2 !== 0) {
        console.log(`Element ${element} is placed on index ${index}`)
    };
});