/*Задача 5.1. Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, 
    а довжиною серії - кількість цих елементів (довжина серії може дорівнювати 0.  
    Перетворити масив так, щоб замість кожної серії йшов один елемент, що утворює серію, та її довжину.*/


const numsArray = [1, 1, 7, 7, 7, 7, 9, 45, 45, 45, 99, 5, 5, 3];
const newNumsArray = [];
let step = 1;

for (let i = 0, j = 0; i < numsArray.length; i += step, j++) { //
    step = 1;

    for (k = i + 1; k < numsArray.length; k++) {
        if (numsArray[i] === numsArray[k]) {
            step++;
        }
        else {

            break

        }
    }
    newNumsArray[j] = numsArray[i];
}
console.log('Finalarray', newNumsArray);