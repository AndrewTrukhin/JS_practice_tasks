// Задача 7. Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

const string = 'Are you sure about that? - You cannot take this "quest", until you have not got 30 level!';
const punctuationRegExp = /[^a-z0-9\s]/gi; // не букви, не цифри та не пробіли

const getPunctuationMarks = (string, regexp) => string.match(regexp);

const punctuationMarksArr = getPunctuationMarks(string, punctuationRegExp);
console.log(punctuationMarksArr);