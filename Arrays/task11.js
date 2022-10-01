/* Задача 11. Дано числовий масив розмірності N.  Вважати, що його елементи утворюють числову послідовність, 
утворити новий масив що містить найдовшу зростаючу підпослідовність.*/

const array = [1, 2, 3, 4, 5, 9, 105, 1, 2, 3, 4, 10];
let finalArray = [];
let currentArray = [];
let biggestNum = 0;

for (let i = 0; i < array.length; i++) {

    currentArray = [];
    biggestNum = currentArray[0] = array[i];

    for (let j = i + 1, k = 0; j < array.length; j++) {

        if (array[j] > biggestNum) {
            biggestNum = array[j];
            k++
            currentArray[k] = biggestNum;
        }
    }

    if (currentArray.length > finalArray.length) {
        for (let l = 0; l < currentArray.length; l++) {
            finalArray[l] = currentArray[l];
        }
    }
    //console.log(`${i}---${currentArray}`)

}
console.log(finalArray);