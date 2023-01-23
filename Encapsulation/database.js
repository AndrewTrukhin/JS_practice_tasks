/*Задача 4. База даних співробітників фірми містить наступні дані: 
паспортні дані, освіта, спеціальність, посада, оклад. Створити програму для пошуку усіх працівників :
1)з вищою освітою;
2) усіх інженерів;
3) усіх, у кого оклад є більшим за 10000.*/

class employerData {
    constructor(passportData, education, speciality, position, salary) {
        this._passportData = passportData;
        this.education = education;
        this.speciality = speciality;
        this.position = position;
        this._salary = salary;
    }

    get passportData() {
        return this._passportData;
    }

    set passportData(value) {
        const validationPassport = (passportData) => {
            const passportRegEx = /^[A-Z]{2}\d{6}$/;
            return passportRegEx.test(passportData);
        }
        if (!validationPassport(value)) {
            throw console.error('Invalid passport data. Enter only 2 uppercase letters and 6 numbers');
        }
        else {
            return this._passportData = value;
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value === isNaN || value < 0) {
            throw console.error('The value must be a positive number');
        }
        else {
            return this._salary = value;
        }
    }
}

const engineer = new employerData('LV254599', 'average', 'engineer', 'engineer', '15000.00');
const legalCouncel = new employerData('LP255688', 'high', 'law', 'legal councel', '20000.00');
const salesManager = new employerData('LP677889', 'high', 'marketing', 'export manager', '30000.00');
const accountManager = new employerData('LV559877', 'high', 'accounting', 'account manager', '19000.00');
const worker = new employerData('FR089991', 'average', 'mechanism-repairment', 'mechanic', '8500.00');

const employersArr = [];
employersArr.push(engineer, legalCouncel, salesManager, accountManager, worker);
console.log('employersArr', employersArr);

const educationLevel = 'high';
const position = 'engineer';
const salaryLevel = '10000.00';

const employerHighEducationArr = [];
const engineersArr = [];
const tenThousandEmployersSalaryArr = [];

employersArr.forEach((object) => {

    if (object.education === educationLevel) {
        employerHighEducationArr.push(object.education);
    }
    if (object.position === position) {
        engineersArr.push(object.position);
    }
    if (+object.salary > +salaryLevel) {
        tenThousandEmployersSalaryArr.push(+object.salary);
    }
});

console.log('high education', employerHighEducationArr);
console.log('engineersArr', engineersArr);
console.log('tenThousandEmployersSalaryArr', tenThousandEmployersSalaryArr);