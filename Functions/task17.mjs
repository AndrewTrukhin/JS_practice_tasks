/*17 Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою. Визначити чи він є прямокутником, за допомогою підпрограми. 
Якщо так  знайти його площу.*/

//Задача буде вирішуватись за допомогою доведення рівності довжини протилежних сторін

import { calcQuadrangleSideLength, isQuadrangleRectangular, calcRectangleSquare } from "./helpers/mathGeometricFormulasFunctions.mjs";

const pointA_x = 2;
const pointA_y = 2;

const pointB_x = 3;
const pointB_y = -1;

const pointC_x = -3;
const pointC_y = -3;

const pointD_x = -4;
const pointD_y = 0;

const sideAB = calcQuadrangleSideLength(pointA_x, pointB_x, pointA_y, pointB_y); // виклик функції обрахування довжини сторони
console.log(`Side AB is: ${sideAB}`);
const sideBC = calcQuadrangleSideLength(pointB_x, pointC_x, pointB_y, pointC_y);
console.log(`Side BC is: ${sideBC}`);
const sideCD = calcQuadrangleSideLength(pointC_x, pointD_x, pointC_y, pointD_y);
console.log(`Side CD is: ${sideCD}`);
const sideAD = calcQuadrangleSideLength(pointA_x, pointD_x, pointA_y, pointD_y);
console.log(`Side AD is: ${sideAD}`);

const isRectangular = isQuadrangleRectangular(sideAB, sideBC, sideCD, sideAD); // виклик функції на перевірку рівності сторін
console.log(`Quadrangle is rectangular: ${isRectangular}`);

if (isRectangular) {
    const rectangularSquare = calcRectangleSquare(sideAB, sideBC); // знаходимо площу
    console.log(`Rectangular's square is: ${rectangularSquare}`);
}