// Задача 11. Скласти скрипт для сортування масиву arr в порядку, коли спочатку йдуть всі парні чила, потім – непарні.

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sortArrayByEven = (a, b) => {
    return a % 2 - b % 2
}
console.log(numsArr.sort(sortArrayByEven));