/*Розробити програму, яка за номером року Y визначає номер століття C (врахувати, що початком XX століття був 1901, а не 1900 рік)*/

const numberOfYear = prompt('Enter a year to define a century');

const centuryFind = Math.ceil(numberOfYear / 100);

alert(`Entered year is ${centuryFind} century`);