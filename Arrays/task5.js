/*Задача 5.	Дано масив розмірності N. Назвемо серією групу однакових елементів що йдуть поспіль, 
    а довжиною серії - кількість цих елементів (довжина серії може дорівнювати 0. Вивести масив, що містить довжини всіх серій вихідного масиву.*/

const numsArray = [4, 9, 9, 7, 7, 7];
const finalNumsArray = [];
let seriaLength = 1; // змінна для лічильника довжини серій

for (let i = 0, k = 0; i < numsArray.length; i += seriaLength, k++) { // проходимо по всій довжині масиву, а кроком буде те, коли закінчується серія
    seriaLength = 1;
    for (let j = i + 1; j < numsArray.length; j++) {

        if (numsArray[i] === numsArray[j]) {    // порівнюємо перший індекс "i" з наступним по порядку індексом "j"
            seriaLength++; // при кожній рівності збільшуємо довжину серії 
        }
        else { // якщо нерівність, то виходимо з циклу
            break
        }
    }

    if (seriaLength === 1) { // якщо вийшли з циклу та серія = 1, то міняємо на нуль реалізації умови задачі
        finalNumsArray[k] = 0;
    }
    else {
        finalNumsArray[k] = seriaLength;
    }
}
console.log('Final result', finalNumsArray);


// Варіант вирішення, коли довжина серії повинна мати вигляд звичайної послідовності індексів

/*const numsArray = [4, 9, 9, 7, 7, 7];
const finalNumsArray = [];
let seriaLength = 1; // змінна для лічильника довжини серій

for (let i = 0, k = 0; i < numsArray.length; i += seriaLength, k++) { // проходимо по всій довжині масиву, а кроком буде те, коли закінчується серія
    seriaLength = 1;
    for (let j = i + 1; j < numsArray.length; j++) {
        
        if (numsArray[i] === numsArray[j]) {    // порівнюємо перший індекс "i" з наступним по порядку індексом "j"
            seriaLength++; // при кожній рівності збільшуємо довжину серії 
            
        }
        else { // якщо нерівність, то виходимо з циклу
            break
        }
    }
    
    if (seriaLength === 1) { // якщо вийшли з циклу та серія = 1, то міняємо на нуль реалізації умови задачі
        finalNumsArray[k] = 0;
    }
    else {
        finalNumsArray[k] = seriaLength - 1;
    }
}
console.log('Final result', finalNumsArray);*/