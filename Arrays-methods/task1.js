//Задача 1. Створити функцію, яка для одновимірного масиву знаходить кількість парних елементів.

const numsArray = [];
for (let i = 0; i < 10; i++) {
    numsArray[i] = Math.ceil(Math.random() * 10);
}
console.log(numsArray);

let evenNumsQty = 0;
numsArray.forEach(element => {
    if (element % 2 === 0) {
        evenNumsQty++;
    }
});
console.log(evenNumsQty);