// Задача 23. Дано масив літер. Сформувати рядок, який складається тільки з голосних літер.

const lettersArr = ['a', 'b', 'c', 'd', 'e', 'f'];
const vowelArr = ['a', 'e', 'i', 'o', 'u', 'y'];

compareFn = (startArr, arrToCompare) => {
    let newArr = startArr.filter((item, index, arr) => {
        if (startArr[item] === arrToCompare[item]) {

        }
        return newArr
    })
}
console.log(compareFn(lettersArr, vowelArr));