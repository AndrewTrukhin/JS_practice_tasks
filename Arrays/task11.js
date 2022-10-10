/* Задача 11. Дано числовий масив розмірності N.  Вважати, що його елементи утворюють числову послідовність, 
утворити новий масив що містить найдовшу зростаючу підпослідовність.*/

const array = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
let matrixArray = [];
let i = 0;
let firstElement = array[0];

matrixArray[i] = [firstElement]; // в багатовимірний масив вкладаю новий масив

for (let j = i + 1; j < array.length; j++) { // буду порівнювати нуль з усіма елементами вихідного масиву

    let lastArrOfSequences = matrixArray[matrixArray.length - 1];               // змінна для останнього підмасиву
    let lastElemOfLastArr = lastArrOfSequences[lastArrOfSequences.length - 1];  // змінна для останнього елемента останнього підмасиву

    if (array[j] > lastElemOfLastArr) { // якщо наступний елемент вихідного масиву більше ніж останній елемент останнього підмасиву
        let tempArray;
        tempArray = [...lastArrOfSequences, array[j]];  // то скопіюємо старий підмасив для створення нового плюс додамо більший елемент
        matrixArray[matrixArray.length] = tempArray;    // у багатовимірний масив додамо останнім елементом новий підмасив з доданим еле-м
    }
    else {
        for (let k = matrixArray.length - 1; k >= 0; k--) { // інакше перевіряєм від останнього підмасиву
            let currArr = matrixArray[k];                   // змінна для останнього підмасиву
            let currLastElem = currArr[currArr.length - 1]; // змінна для останнього елемента останнього підмасиву
            if (array[j] > currLastElem) {                  // якщо число вихідно масиву більше ніж ост. елем ост підмасиву
                tempArray = [...currArr, array[j]];         // скопіюємо в тимчасову змінну цей підмасив цієї ітерації
                matrixArray[k + 1] = tempArray;             // та перезапишемо наступний підмасив тимчасовою змінною
                break                                       
            }
        }
    }
}
let LIS = matrixArray[matrixArray.length - 1];
console.log(LIS);