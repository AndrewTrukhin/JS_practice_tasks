/*Задача 10. Дано масив розмірності N і число k ( k <N). Здійснити циклічний зсув елементів масиву вправо на k позицій. 
Наприклад для масиву [1,2,3,4,5,6] та k=2 після виконання зсуву отримуємо [5,6,1,2,3,4].*/


const array = [17, 25, 77, 80, 99];
shiftNumber = 4;

for (i = 0; i < shiftNumber; i++) {

    let lastElement = array[array.length - 1];

    for (let j = array.length - 1; j > 0; j--) {
        array[j] = array[j - 1];
    }
    array[0] = lastElement;
}
console.log(array);

// Варіант з діленням з остачею

/*const array = [17, 25, 77, 80, 99];
const shiftedArray =[];
shiftNumber = 2;


for (let i = 0, j = 0; i < array.length; i++) {
    j = (i + shiftNumber) % array.length;
    shiftedArray[j] = array[i];
}
console.log(shiftedArray)*/