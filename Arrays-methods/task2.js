// Задача 2. Створити функцію, яка у масиві 0 заміняє на 1.

//Варіант з методом forEach
const array = [0, 2, 0, 2, 3, 0, 2, 3, 4, 0, 2, 3, 4, 5];
array.forEach((item, index, arr) => {
    if (item === 0) {
        arr[index] = 1;
    }
});
console.log(array);


// Варіант з методом map

/*let array = [0, 2, 0, 2, 3, 0, 2, 3, 4, 0, 2, 3, 4, 5];
array = array.map(item => item === 0 ? item = 1 : item);
console.log(array);*/