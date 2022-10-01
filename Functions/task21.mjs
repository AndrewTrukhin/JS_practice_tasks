//21 Задані координати точки на поверхні і центра кулі. Знайти її об’єм і площу поверхні, за допомогою підпрограм.

import { calcSideLength, calcSphereSquare, calcVolumeSphere } from "./helpers/mathFormulasFunctions.mjs";

const pointA_x = -2;
const pointA_y = 3;

const pointB_x = 4;
const pointB_y = 3;

const sideLength = calcSideLength(pointB_x, pointA_x, pointB_y, pointA_y);

const sphereSquare = calcSphereSquare(sideLength);
console.log(`Sphere square is: ${sphereSquare}`);

const sphereVolume = calcVolumeSphere(sideLength);
console.log(`Sphere volume is: ${sphereVolume}`);