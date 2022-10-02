// Задача 22. Дано масив номерів автомобілів. Сформувати масив тих, які починаються на літеру «А» і закінчуються на літеру «Р».

const licensePlateArr = ['AI7284BE', 'KA2373HP', 'AA9911HP', 'AI7373HP', 'AB1111AP', 'BE7771AE'];

getSortedArr = (startArr) => {
    let newSortedArr = startArr.filter((item) => item[0] === 'A' && item[item.length - 1] === 'P');
    return newSortedArr;
}
console.log(getSortedArr(licensePlateArr));