//Задача 1. Створити клас, що представляє прямокутник і має методи для знаходження площі, периметру та масштабування.

class Rectangle {
    constructor(width, length, screenWidth) {
        this._width = width;
        this._length = length;
        this._screenWidth = screenWidth;
    }

    get width() {
        return this._width;
    }

    get length() {
        return this._length;
    }

    get screenWidth() {
        return this._screenWidth;
    }

    set width(value) {
        if (value === isNaN || value < 0) {
            throw console.error('Width must be a positive number');
        }
        else {
            return this._width = value;
        }
    }

    set length(value) {
        if (value === isNaN || value < 0) {
            throw console.error('Length must be a positive number');
        }
        else {
            return this._length = value;
        }
    }

    set screenWidth(value) {
        if (value === isNaN || value < 0) {
            throw console.error('ScreenWidth must be a positive number');
        }
        else {
            return this._screenWidth = value;
        }
    }

    getSquare() {
        return this._width * this._length;
    }

    getPerimeter() {
        return (this._width + this._length) * 2;
    }

    getScale() {
        return this._screenWidth / this._length;
    }

    toString() {
        return `Rectangle's square is: ${this.getSquare()};\nRectangle's perimeter is: ${this.getPerimeter()};\nRectangle's scale is: ${this.getScale()}`;
    }
}

const width = 2;
const length = 4;
const screenWidth = 200;

const userRectangle = new Rectangle(width, length, screenWidth);
console.log(userRectangle.toString());