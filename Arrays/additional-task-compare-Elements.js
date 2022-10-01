// Порівняти 0 з усіма елементами масиву. Якщо співпадає, то поставити 1

/*const array = [0, 1, 0, 0, 0, 2, 3, 0, 4];
const finalArray = [];
const someElement = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === someElement) {
        finalArray[i] = 1;
    }
    else {
        finalArray[i] = 0;
    }
}
console.log(finalArray);*/

// Порівняти усі елементи масиву між собою. Якщо співпадає, то поставити 1

const array = [0, 1, 0, 0, 0, 2, 3, 0, 4];
//let finalArray = [];

for (let i = 0; i < array.length - 1; i++) {
    let finalArray = [];

    for (let j = i + 1, k = 0; j < array.length; j++, k++) {
        if (array[i] === array[j]) {
            finalArray[k] = 1;
        }
        else {
            finalArray[k] = 0;
        }
    }
    console.log(`i:${i} ${finalArray}`)
}

