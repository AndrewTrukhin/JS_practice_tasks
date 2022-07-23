/* Задача 8. З клавіатури вводиться поточний час (дві змінні цілого типу: кількість годин і кількість хвилин) 
протягом якогось із перших 3 уроків (початок о 8.30).  
З’ясувати, який із трьох триває урок.*/

const currentHour = parseInt(prompt('Enter current hour'));

const currentMinute = parseInt(prompt('Enter current minute'));

const minutesPerHour = 60;

const currentTime = currentHour * 60 + currentMinute; // Переведемо час у загальну кількість хвилин 

const firstLessonStart = 8 * 60 + 30; // 8:30

const firstLessonEnd = 9 * 60 + 15; // 9:15

const secondLessonStart = 9 * 60 + 30; // 9:30

const secondLessonEnd = 10 * 60 + 15; // 10:15

const thirdLessonStart = 10 * 60 + 30; // 10:30

const thirdLessonEnd = 11 * 60 + 15 // 11:15

const firstBreakStart = 9 * 60 + 16; // 9:16

const firstBreakEnd = 9 * 60 + 29; // 9:29

const secondBreakStart = 10 * 60 + 16; // 10:16

const secondBreakEnd = 10 * 60 + 29; // 10:29

if (currentTime >= firstLessonStart && currentTime <= firstLessonEnd) {
    console.log('Now is the first lesson');
}

else if (currentTime >= secondLessonStart && currentTime <= secondLessonEnd) {
    console.log('Now is the second lesson');
}

else {
    if (currentTime >= thirdLessonStart && currentTime <= thirdLessonEnd) {
        console.log('Now is the third lesson');
    }
    else if (currentTime >= firstBreakStart && currentTime <= firstBreakEnd || currentTime >= secondBreakStart && currentTime <= secondBreakEnd) {
        console.log('Now is a break')
    }
    else {
        console.log('There are no lessons now:)')
    }
}


