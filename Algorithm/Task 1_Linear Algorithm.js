/*Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. 
Визначити ширину елементів, які повинні бути відображені у цьому рядку. */

const screenWidth  = prompt('Width of the screen');

const elementsQty = prompt('Elements quantity');

const elementSize = screenWidth / elementsQty;

alert('Each elemet size = ' +  elementSize.toFixed(1));