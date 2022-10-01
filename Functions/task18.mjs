//18 Задані координати вершин чотирикутника в порядку обходу за годинниковою стрілкою Знайти координати точки перетину його діагоналей, за допомогою підпрограми

import { calcDiagonaleMiddleCoordinate } from "./helpers/mathFormulasFunctions.mjs";

const pointA_x = 2; // для вирішення задачі потрібні координати лише двух протилежних вершин, наприклад "A" і "C" 
const pointA_y = 2;

const pointC_x = -3;
const pointC_y = -3;

const diagonalAC_x = calcDiagonaleMiddleCoordinate(pointA_x, pointC_x);
const diagonalAC_y = calcDiagonaleMiddleCoordinate(pointA_y, pointC_y);

console.log(`Diagonals of the quadrangle are being crossed at: x - ${diagonalAC_x}; y - ${diagonalAC_y}`);