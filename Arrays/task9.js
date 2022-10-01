//Задача 9. Дано масив розмірності N.  Визначити максимальну кількість його однакових елементів.

const array = [17, 2, 9, 1, 17, 2, 17, 8, 7, 17, 17, 2, 2, 2, 2, 99, 2, 101, 2, 2, 2];
let currentSameElementsQty = 1; // змінна яка буде приймати поточну найбільшу кількість елементів
let sameElementsMaxQty = 0;


for (let i = 0; i < array.length; i++) {
    currentSameElementsQty = 1;


    for (let j = i + 1; j < array.length; j++) {


        if (array[i] === array[j]) {
            currentSameElementsQty++;
        }


    }
    if (currentSameElementsQty > sameElementsMaxQty) { // якщо поточна кількість більша ніж уже було співпадінь до цього, перезапишемо її
        sameElementsMaxQty = currentSameElementsQty;
    }


}
console.log(sameElementsMaxQty);