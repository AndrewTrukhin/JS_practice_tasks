/*Задача 2. Створити клас Rectangle, який представляє прямокутник. 
Властивості:	A
                B
Методи:	        Знаходження площі
                Знаходження периметру
                ToString

На основі цього класу створити клас Paralelepiped
Властивості:	A
                B
                H 
Методи:	        Знаходження площі поверхні
                Знаходження об’єму
                ToString*/

class Rectangle {
    constructor(width, length) {
        this.A = width;
        this.B = length;
    }

    getSquare() {
        return this.A * this.B;
    }

    getPerimeter() {
        return (this.A + this.B) * 2;
    }

    toString() {
        const square = this.getSquare();
        const perimeter = this.getPerimeter();
        const rectangleInfo = `Rectangle's square is: ${square}\nRectangle's perimeter is: ${perimeter}`;
        return rectangleInfo;
    }
}
const userRectangle = new Rectangle(2, 4);

class Paralelepiped extends Rectangle {
    constructor(width, length, height) {
        super(width, length);
        this.H = height;
    }

    getSurfaceSquare() {
        const multiplier = 2;
        return (this.A * this.B + this.A * this.H + this.B * this.H) * multiplier;
    }

    getVolume() {
        return this.A * this.B * this.H;
    }

    toString() {
        const surfaceSquare = this.getSurfaceSquare();
        const volume = this.getVolume();
        const geometricFictionsInfo = `${super.toString()}\nParalelepiped's perimeter is: ${surfaceSquare}\nParalelepiped's volume is: ${volume}`;
        return geometricFictionsInfo;
    }
}

const userParalelepiped = new Paralelepiped(2, 4, 6);
console.log(userParalelepiped.toString());