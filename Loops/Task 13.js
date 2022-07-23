/*Задача 13. Динамічно створити поля для введення назви предмета та кількості балів з введеної користувачем кількості предметів 
(для кожного предмета: два input з відповідними тегами label).*/

let subjectCount = prompt('Enter here quantity of subjects');

for (let j = 0; j < subjectCount; j++) {
    document.write(`<label for="subject">Subject ${j + 1}</label>`);
    document.write('<input type="text" name="subject" id="subject"> <br>');

    document.write(`<label for="score">Score ${j + 1}</label>`);
    document.write('<input type="text" name="score" id="score"> <br> ---------------------------------------------<br>');
}