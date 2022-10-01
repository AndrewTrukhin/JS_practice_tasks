//15 Задані координати 3 точок. Визначити чи лежать вони на одній прямій, за допомогою підпрограми.
/*Ще один спосіб перевірити приналежність трьох точок прямий - порахуйте площу трикутника, який вони утворюють. 
Якщо всі точки лежать на прямій, то його площа дорівнює нулю. Будь ласка, вставте значення координат у формулу: 
S = 1/2 ((x1-х3) (у2-у3) - (х2-х3) (у1-у3)). 
Якщо після всіх обчислень ви отримали нуль - значить, три точки лежать на одній прямій.*/

import { calcOneLinePoints } from "./helpers/mathFormulasFunctions.mjs";

const triangleVertex_A_coordinate1 = -2; // вводимо координати (в даному випадку введені координати для прикладу)
const triangleVertex_A_coordinate2 = 3;

const triangleVertex_B_coordinate1 = 4;
const triangleVertex_B_coordinate2 = 3;

const triangleVertex_C_coordinate1 = 2;
const triangleVertex_C_coordinate2 = 5;

const addVar = 0.5;

const triangleSquare = calcOneLinePoints(triangleVertex_A_coordinate1, triangleVertex_A_coordinate2, triangleVertex_B_coordinate1, 
    triangleVertex_B_coordinate2, triangleVertex_C_coordinate1, triangleVertex_C_coordinate2, addVar); // викликаємо функцію пошуку площі (перевірки знаходження точок на одній лінії)
console.log(`The triangle square is: ${triangleSquare}`);

const isLayOnOneLine = triangleSquare === 0 ? true : false;
console.log(`All the points lay on one line: ${isLayOnOneLine}`);