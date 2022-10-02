/* Задача 19. Задача. Дано масив років народження працівників. 
Вивести масив тих, які є призовного віку (менше 25 років). :(  апдейт – менше 60 років )*/;

const personAgeArr = [];
const recruitAge = 60;
const minAge = 30;
const maxAge = 70;

for (let i = 0; i < 10; i++) {
    personAgeArr[i] = Math.ceil(Math.random() * (maxAge - minAge) + minAge);
}
console.log(personAgeArr);

const recruitPersonAgeArr = personAgeArr.filter(element => element < recruitAge);
console.log(recruitPersonAgeArr);