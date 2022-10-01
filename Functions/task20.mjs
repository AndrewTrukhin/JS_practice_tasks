//20	Задані координати 3 точок. Визначити радіус описаного кола, за допомогою підпрограми.

import { calcSideLength, calcSidesLengthProduct, calcSumSidesSquareRoot, calcCircleRadiusByCoordinates } from "./helpers/mathFormulasFunctions.mjs";

const pointA_x = -2;
const pointA_y = 3;

const pointB_x = 4;
const pointB_y = 3;

const pointC_x = 2;
const pointC_y = 5;

const triangleSideLengthAB = calcSideLength(pointB_x, pointA_x, pointB_y, pointB_y); // виклик функції визначення довжини сторони
const triangleSideLengthBC = calcSideLength(pointC_x, pointB_x, pointC_y, pointA_y);
const triangleSideLengthAC = calcSideLength(pointC_x, pointA_x, pointC_y, pointA_y);

const sidesLengthProduct = calcSidesLengthProduct(triangleSideLengthAB, triangleSideLengthBC, triangleSideLengthAC); // виклик функції визначення добутку довжин сторін

const sumSidesSquareRoot = calcSumSidesSquareRoot(triangleSideLengthAB, triangleSideLengthBC, triangleSideLengthAC); // виклик функції визначення квадратного кореню добутку сум двох сторін за мінусом третьої

const circleRadius = calcCircleRadiusByCoordinates(sidesLengthProduct, sumSidesSquareRoot); // виклик функції визначення шуканого радіуса кола
console.log(`Circle radius is: ${circleRadius}`);