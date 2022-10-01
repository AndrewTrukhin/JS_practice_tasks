//14 Задані координати вершин трикутника. Знайти його периметр та площу, за допомогою підпрограм.

import { calcSideLength, calcTrianglePerimeter, calcTriangleSquare, calcHalfPerimeter } from "./helpers/mathFormulasFunctions.mjs"; // Імпортуємо потрібні функції з допоміжного файлу та використовуємо їх за допомогою Node.js

const triangleVertex_A_coordinate1 = -2; // вводимо координати (в даному випадку введені координати для прикладу)
const triangleVertex_A_coordinate2 = 3;

const triangleVertex_B_coordinate1 = 4;
const triangleVertex_B_coordinate2 = 3;

const triangleVertex_C_coordinate1 = 2;
const triangleVertex_C_coordinate2 = 5;

const divider = 2;

const sideAB = calcSideLength(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_B_coordinate1, triangleVertex_B_coordinate2); // виклик функції на знаходження сторони та передача актуальних параметри
const sideBC = calcSideLength(triangleVertex_B_coordinate1, triangleVertex_B_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2); // аналогічно
const sideAC = calcSideLength(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2); // аналогічно

const trianglePerimeter = calcTrianglePerimeter(sideAB, sideBC, sideAC); // виклик функції на знаходження периметру та передамо актуальні параметри

const halfPerim = calcHalfPerimeter(trianglePerimeter, divider); // виклик функції на знаходження напівпериметр

const triangleSquare = calcTriangleSquare (sideAB, sideBC, sideAC, halfPerim); // виклик функції на знаходження периметру та передамо актуальні параметри
console.log(`Triangle \n Sides: ${sideAB}, ${sideBC}, ${sideAC} \n Perimeter: ${trianglePerimeter} \n Square: ${triangleSquare}`);