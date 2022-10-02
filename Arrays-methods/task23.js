// Задача 23. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.

const leterrsArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'e'];
const vowelArr = ['a', 'e', 'i', 'o', 'u', 'y'];

getVowels = (firstArr, secondArr) => {
    let newArray = firstArr.filter((item) => secondArr.indexOf(item) !== -1);
    return newArray;
}
const result = getVowels(leterrsArr, vowelArr);
console.log(result);