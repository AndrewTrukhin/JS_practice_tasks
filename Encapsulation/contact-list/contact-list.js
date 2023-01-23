/*9 Задача. Розробити клас «Список контактів»
Поля:
•	Список контактів адресатів (Фото адресата, Ім’я адресата, e-mail адресата)
•	Список контактів для відображення
Методи:
•	Метод знаходження контактів, імена яких які починаються із вказаного текстового фрагмента
•	Метод генерування розмітки*/

class Contact {
    constructor(photoPath, name, email) {
        this._photoPath = photoPath;
        this._name = name;
        this._email = email;
        this.contactListToShow = [];
    }

    get photoPath() {
        return this._photoPath;
    }

    set photoPath(path) {
        return this._photoPath = path;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        const nameLettersQty = 10;
        if (value === !isNaN || value.length > nameLettersQty) {
            throw console.error(`Name must contain only letters. Maximum letters allowed - ${nameLettersQty}`);
        }
        return this._name = value.trim().toLowercase();
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const validateEmail = (email) => {
            const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegEx.test(email);
        }
        if (!validateEmail(value)) {
            throw console.error('Email is not valid');
        }
        return this._email = value;
    }

    getContact() {
        this.contactListToShow.length = 0;
        const substringName = prompt('Enter beginning of name for search');

        contactsList.forEach(element => {

            if (element.name.toLowerCase().trim().startsWith(substringName.toLowerCase().trim())) {
                this.contactListToShow.push(element);
            }
        });

        console.log('Searched contacts', this.contactListToShow)
    }

    render() {
        document.querySelector('html').innerHTML = '';
        for (let i = 0; i < this.contactListToShow.length; i++) {
            document.write(`<img height="200" width="180" src="${this.contactListToShow[i].photoPath}"> <br> 
            ${this.contactListToShow[i].name} <br> 
            ${this.contactListToShow[i].email} <br>`);
            document.write('-------------------------------- <br>');
        }
    }
}

const userImagePathArr = [
    'contact-list/andrew.jpg',
    'contact-list/tanya.jpg',
    'contact-list/tanyazhuk.jpg',
    'contact-list/victor.jpg',
    'contact-list/dima.jpg',
    'contact-list/roma.jpg',
    'contact-list/anya.jpg',
]
const userNamesArr = ['Andrew', 'Tanya', 'Tanya', 'Victor', 'Dima', 'Roma', 'Anya'];
const userEmailArr = [
    'andriitrukhin@gmail.com',
    'boyarunya87@ukr.net',
    'tanyazhuk@ukr.net',
    'viktorzhuk@ukr.net',
    'dimazhuk@ukr.net',
    'romatrukhin@gmail.com',
    'anyabrovko-1990@ukr.net',
];

const contactsList = [];

for (let i = 0; i < userImagePathArr.length; i++) {
    contactsList[i] = new Contact(userImagePathArr[i], userNamesArr[i], userEmailArr[i]);
}

console.log('All contacts list', contactsList);

//contactsList[0].getContact();