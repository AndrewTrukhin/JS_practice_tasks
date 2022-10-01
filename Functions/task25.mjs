//25 Розв’язати квадратне рівняння, задане коефіцієнтами, за допомогою підпрограми.  Знаходження дискримінанта оформити як окрему підпрограму.
// Формула  ax2+bx+c=0, у якому a, b і c — дійсні числа та a≠0
// Формула дискримінанту D= b2−4ac

import { calcDiscriminant, showSquareRootsQty } from "./helpers/mathAlgebrFormulas.mjs";

const a = 1
const b = 7
const c = 12

const discriminant = calcDiscriminant(a, b, c); // Викликаю функцію знаходження дискримінанта, а також присвою його значення змінній
console.log(`Discriminant of this quadrantic equals ${discriminant}`);

showSquareRootsQty(a, b, discriminant); // Виклик функції на знаходження кількості коренів та їх значення