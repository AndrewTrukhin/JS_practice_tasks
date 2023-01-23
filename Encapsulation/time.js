/*Задача 6. Створити клас TTime для роботи із часом у форматі “години:хвилини”. 
Час представляється структурою із двома полями. 
Реалізувати методи збільшення/зменшення  часу на певну кількість годин чи хвилин.*/

class TTime {
    constructor() {
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        const maxHours = 23;
        if (value < 0 || value > maxHours || value === isNaN) {
            throw console.error('Wrong value for hours');
        }
        else {
            return this._hours = value;
        }
    }

    get minutes() {
        return this._minutes;
    }

    set minutes(value) {
        const maxMinutes = 59;
        if (value < 0 || value > maxMinutes || value === isNaN) {
            throw console.error('Wrong value for minutes');
        }
        else {
            this._minutes = value;
        }
    }

    get currentTime() {
        return `${this.hours}:${this.minutes}`;
    }

    set currentTime(value) {
        let currentTime = value.split(' ');
        console.log(currentTime)
        console.log(currentTime[0])
        console.log(currentTime[1])
        const hours = currentTime[0];
        const minutes = currentTime[1];
        // check for hours
        if (hours < 0 || hours > 23) {
            throw console.error('Wrong value for hours');
        }
        else {
            this._hours = hours;
        }
        // check for minutes
        if (minutes < 0 || minutes > 59) {
            throw console.error('Wrong value for minutes');
        }
        else {
            this.minutes = minutes;
        }
    }

    increaseHours(value) {
        const hoursPerDay = 24;
        return (this.hours + value) % hoursPerDay;
    }

    decreaseHours(value) {
        const hoursPerDay = 24;
        return Math.abs((this.hours - value) % hoursPerDay);
    }

    increaseMinutes(value) {
        const minutesPerDay = 60;
        return (this.minutes + value) % minutesPerDay;
    }

    decreaseMinutes(value) {
        const minutesPerDay = 60;
        return Math.abs((this.minutes - value) % minutesPerDay);
    }
}

const timer = new TTime();