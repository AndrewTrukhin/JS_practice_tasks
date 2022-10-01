/* Задача 7. Дано масив розмірності N і число k ( k<N). Здійснити циклічний зсув елементів масиву вліво на k позицій. 
Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [3,4,5,6,1,2].*/

const array = [17, 25, 77, 80, 99];
shiftNumber = 4;

for (i = 0; i < shiftNumber; i++) {

    let firstElement = array[0];

    for (let j = 0; j < array.length; j++) {
        array[j] = array[j + 1];
    }
    array[array.length - 1] = firstElement;
}
console.log(array);

// Варіант з діленням з остачею

/*const numsArray = [17, 25, 77, 80, 99];
const shiftNumber = 1;
const shiftedArray = [];

for (let i = 0, j = 0; i < numsArray.length; i++, j++) {
    j = (i + shiftNumber) % numsArray.length;
    shiftedArray[i] = numsArray[j];
}
console.log(shiftedArray);*/


// Варіант з методами shift та push

/*const numsArray = [17, 25, 77, 80, 99];
const shiftNumber = 4;
const shiftedArray = [];

for (let i = 0, j = 0; i < shiftNumber; i++) {
    j = numsArray.shift(i);
    numsArray.push(j);
}
console.log(numsArray);*/