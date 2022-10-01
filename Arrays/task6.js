/*Задача 6. Дано цілочисловий  масив розмірності N. 
Якщо він є перестановкою, то вивести ТАК, у противному випадку вивести номер першого недопустимого елемента.*/

const array = [2, 1, 4, 5];

for (let i = 0; i < array.length; i++) {

    for (let j = i + 1; j < array.length; j++) {
        let smallestNum = array[i];

        if (array[j] < smallestNum) {
            array[i] = array[j];
            array[j] = smallestNum;
        }
    }
}
console.log(array);

let isPermutation = true;
let invalidNum;

for (let i = 0; i < array.length - 1; i++) {

    if (array[i + 1] - array[i] !== 1) {
        isPermutation = false;
        invalidNum = array[i + 1];
        break
    }
}
isPermutation ? console.log('Yes') : console.log(`Invalid number is: ${invalidNum}`);