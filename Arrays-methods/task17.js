// Задача 17. Задача. Відсортувати масив імен за останньою літерою.

let femaleNamesArr = ['Jessica', 'Cameron', 'Angelina', 'Uma', 'Jennifer', 'Chloe', 'Scarlett', 'Judy', 'Julie', 'Julianne'];
console.log(femaleNamesArr);

const compareFn = (a, b) => {
    let firstElement = a[a.length - 1]; // чому ж не працює просто a[a.length - 1] - b[b.length - 1
    let secondElement = b[b.length - 1];
    if (firstElement > secondElement) {
        return 1;
    }
    if (firstElement < secondElement) {
        return -1;
    }
};
console.log(femaleNamesArr.sort(compareFn));