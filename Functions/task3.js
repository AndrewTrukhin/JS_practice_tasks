//Задача 3. Створити функцію, яка за номером дня тижня повертає кількість уроків(так, як у вас було у школі).

const showLessonsQty = (day) => {
    switch (day) {
        case 1: return alert(`On Monday You have five lessons`);
        case 2: return alert(`On Tuesday You have six lessons`);
        case 3: return alert(`On Wednesday You have five lessons`);
        case 4: return alert(`On Thursday You have four lessons`);
        case 5: return alert(`On Friday You have three lessons`);
        default: return alert('This day is a weekend!')
    }
}
const weekDayNumber = parseInt(prompt('Enter number of the week day to know how many lessons do you have'));

showLessonsQty(weekDayNumber);