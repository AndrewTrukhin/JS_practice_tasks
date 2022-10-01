/*16 Задано координати вершин трикутника. Визначити чи є він прямокутним, за допомогою підпрограми.  
Якщо так – вивести довжину гіпотенузи.*/

import { calcSideLength, getMaxNumber, getMinNumber, getAverageNumber, isHypotenuse } from "./helpers/mathFormulasFunctions.mjs"; // Імпортуємо потрібні функції з допоміжного файлу та використовуємо їх за допомогою Node.js

const triangleVertex_A_coordinate1 = 2; // вводимо координати (в даному випадку введені координати для прикладу)
const triangleVertex_A_coordinate2 = 4;

const triangleVertex_B_coordinate1 = -2;
const triangleVertex_B_coordinate2 = 1;

const triangleVertex_C_coordinate1 = 2;
const triangleVertex_C_coordinate2 = 1;

const sideAB = calcSideLength(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_B_coordinate1, triangleVertex_B_coordinate2); // виклик функції на знаходження сторони та передача актуальних параметри
console.log(`Side AB has length: ${sideAB}`);
const sideBC = calcSideLength(triangleVertex_B_coordinate1, triangleVertex_B_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2); // аналогічно
console.log(`Side BC has length: ${sideBC}`);
const sideAC = calcSideLength(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2); // аналогічно
console.log(`Side AC has length: ${sideAC}`);

const maxSide = getMaxNumber(sideAB, sideBC, sideAC);         // виклик функції знаходження найбільшої сторони
console.log(`Max side is: ${maxSide}`);

const minSide = getMinNumber(sideAB, sideBC, sideAC);         // виклик функції знаходження найменшої сторони
console.log(`Min side is: ${minSide}`);

const averageSide = getAverageNumber(sideAB, sideBC, sideAC); // виклик функції знаходження середньої сторони
console.log(`Average side is: ${averageSide}`);

const hypotenuse = isHypotenuse(maxSide, minSide, averageSide); // виклик функції для перевірки теореми Піфагора
console.log(`Triangle is rectangular: ${hypotenuse}`);
if (hypotenuse) console.log(`Hypotenuse length is: ${maxSide}`)