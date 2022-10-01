// File with functions for geometric formulas

export const calcSideLength = (vertex_1_coorX, vertex_1_coorY, vertex_2_coorX, vertex_2_coorY) => { // функція на знаходження довжини сторони, якщо знаємо координати вершин
    const sideLenght = Math.pow((vertex_2_coorX - vertex_1_coorX), 2) + Math.pow((vertex_2_coorY - vertex_1_coorY), 2);
    return parseFloat(Math.sqrt(sideLenght).toFixed(2));
}

export const calcTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3; // функція на знаходження периметру, якщо знаємо сторони

export const calcHalfPerimeter = (trianglePerim, divider) => trianglePerim / divider; // функція на знаходження напівпериметру

export const calcTriangleSquare = (side1, side2, side3, halfPerim) => { // функції на знаходження площі, якщо знаємо сторони
    const tempData = halfPerim * (halfPerim - side1) * (halfPerim - side2) * (halfPerim - side3);
    return Math.sqrt(tempData).toFixed(2);
}

export const calcOneLinePoints = (x1, y1, x2, y2, x3, y3, addVar) => { // функція на перевірку розтащування точок на одній прямій
    const oneLinePointsFormula = addVar * ((x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3));
    return parseFloat(oneLinePointsFormula.toFixed(2));
}

export const getMaxNumber = (var1, var2, var3) => { // описую функцію, яка знайде найбільше число з трьох
    let biggestNumber = var1; // змінна в яку записую найбільше 
    if (var2 > biggestNumber) biggestNumber = var2;
    if (var3 > biggestNumber) biggestNumber = var3;
    return biggestNumber;
}

export const getMinNumber = (var1, var2, var3) => { // описую функцію, яка знайде найменше число з трьох
    let smallestNumber = var1; // змінна в яку записую найменше 
    if (var2 < smallestNumber) smallestNumber = var2;
    if (var3 < smallestNumber) smallestNumber = var3;
    return smallestNumber;
}

export const getAverageNumber = (var1, var2, var3) => { // описую функцію, яка знайде середнє число з трьох
    let averageNumber = 0; // змінна в яку запишемо середнє
    if (var1 > var2 && var1 < var3 || var1 > var3 && var1 < var2) averageNumber = var1;
    if (var2 > var1 && var2 < var3 || var2 > var3 && var2 < var1) averageNumber = var2;
    if (var3 > var1 && var3 < var2 || var3 < var1 && var3 > var2) averageNumber = var3;
    return averageNumber;
}

export const isHypotenuse = (max, min, average) => Math.pow(max, 2) === Math.pow(min, 2) + Math.pow(average, 2) // описую функцію, яка відповідає теоремі Піфагора

export const calcQuadrangleSideLength = (x1, x2, y1, y2) => { //функція на знаходження довжини сторони чотирикутника
    const sideLength = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
    return Math.sqrt(sideLength).toFixed(2);
}

export const isQuadrangleRectangular = (side1, side2, side3, side4) => (side1 === side3 && side2 === side4); // функція для перевірки чи чотирикутник є прямокутником

export const calcRectangleSquare = (side1, side2) => (side1 * side2).toFixed(2); // функція на знаходження площі прямокутника

export const calcDiagonaleMiddleCoordinate = (anglePoint1, anglePoint2) => ((anglePoint1 + anglePoint2) / 2).toFixed(1); // функція на знаходження середини діагоналі для "x" та "y" - серединою діагоналі і буде точка їх перетину

export const calcSidesLengthProduct = (side1, side2, side3) => side1 * side2 * side3; // описую функцію, яка знайде добуток довжин сторін

export const calcSumSidesSquareRoot = (side1, side2, side3) => Math.sqrt((side1 + side2 + side3) * (side2 + side3 - side1) * (side3 + side1 - side2) * (side1 + side2 - side3)); // описую функцію, яка знайде квадратний корінь добутку сум двох сторін за мінусом третьої

export const calcCircleRadiusByCoordinates = (product, squareRoot) => (product / squareRoot).toFixed(2);  // описуємо функцію, яка знайде радіус кола за координатами вершин діленням добутку сторін на квадратний корінь добутку суми сторін...

export const calcSphereSquare = (side) => (4 * Math.PI * Math.pow(side, 2)).toFixed(2); // описую функцію знаходження площі сфери за радіусом (тому коефіцієнт буде 4) 

export const calcVolumeSphere = (side) => (4 / 3 * Math.PI * Math.pow(side, 3)).toFixed(2) // описую функцію об'єму кулі 