//14 Задані координати сторони трикутника. Знайти його периметр та площу, за допомогою підпрограм.


const triangleSideA = parseFloat(prompt('Enter length of the first side'));
const triangleSideB = parseFloat(prompt('Enter length of the second side'));
const triangleSideC = parseFloat(prompt('Enter length of the third side'));
const divider = 2;


const calcTrianglePerimeter = (side1, side2, side3) => side1 + side2 + side3; // опис першої функції на знаходження периметру
const trianglePerimeter = calcTrianglePerimeter(triangleSideA, triangleSideB, triangleSideC); // присвоєння та виклик функції периметру

const triangleHalfPerimeter = trianglePerimeter / 2; // знаходимо напівпериметр і запишемо у змінну

const calcTriangleSquare = (side1, side2, side3, halfPerim) => { // опис другої функції на знаходження площі
    const tempData = halfPerim * (halfPerim - side1) * (halfPerim - side2) * (halfPerim - side3);
    return Math.sqrt(tempData).toFixed(2);
}
const triangleSquare = calcTriangleSquare(triangleSideA, triangleSideB, triangleSideC, triangleHalfPerimeter); // виклик другої функції площі та запишемо у змінну
console.log(`Triangle \n Sides: ${triangleSideA}, ${triangleSideB}, ${triangleSideC} \n Perimeter: ${trianglePerimeter} \n Square: ${triangleSquare}`);