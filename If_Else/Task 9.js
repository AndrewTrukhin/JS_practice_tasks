/*Задача 9. У двох дітей є цукерки трьох типів «Червоний мак», «Ліщина», «Білочка» 
(кількість кожного виду цукерок у кожної дитини вводиться з клавіатури). Вивести на екран одне із повідомлень:
1)у однієї із дітей кожного типу цукерок більше;
2)у однієї із дітей двох типів цукерок більше;
3)кількість кожного з видів цукерок однакова.
4)інше.*/

const firstChildRedPoppyQty = parseInt(prompt('Enter quantity of `Red Poppy` candies of the first child'));

const firstChildLishchynaQty = parseInt(prompt('Enter quantity of `Lishchyna` candies of the first child'));

const firstChildSquirrelQty = parseInt(prompt('Enter quantity of `Squirrel` candies of the first child'));

const secondChildRedPoppyQty = parseInt(prompt('Enter quantity of `Red Poppy` candies of the second child'));

const secondChildLishchynaQty = parseInt(prompt('Enter quantity of `Lishchyna` candies of the second child'));

const secondChildSquirrelQty = parseInt(prompt('Enter quantity of `Squirrel` candies of the second child'));

if(firstChildRedPoppyQty > secondChildRedPoppyQty && firstChildLishchynaQty > secondChildLishchynaQty &&
     firstChildSquirrelQty > secondChildSquirrelQty || firstChildRedPoppyQty < secondChildRedPoppyQty && firstChildLishchynaQty < secondChildLishchynaQty &&
     firstChildSquirrelQty < secondChildSquirrelQty) { // Більше кожного типу у однієї з дітей дитини
    console.log('One of the children has more candies of each type');
    }

else if (firstChildRedPoppyQty > secondChildRedPoppyQty && firstChildLishchynaQty > secondChildLishchynaQty ||
    firstChildRedPoppyQty > secondChildRedPoppyQty && firstChildSquirrelQty > secondChildSquirrelQty ||
    firstChildLishchynaQty > secondChildLishchynaQty && firstChildSquirrelQty > secondChildSquirrelQty || 
    firstChildRedPoppyQty < secondChildRedPoppyQty && firstChildLishchynaQty < secondChildLishchynaQty ||
    firstChildRedPoppyQty < secondChildRedPoppyQty && firstChildSquirrelQty < secondChildSquirrelQty ||
    firstChildLishchynaQty < secondChildLishchynaQty && firstChildSquirrelQty < secondChildSquirrelQty) { // Більше двох типів однієї з дітей дитини
console.log('One of the children has more candies of two types');
}

else {
    if (firstChildRedPoppyQty === secondChildRedPoppyQty && firstChildLishchynaQty === secondChildLishchynaQty &&
        firstChildSquirrelQty === secondChildSquirrelQty) {
            console.log('Each child has equal quantity of candies of each type');
    }

    else {
        console.log('Something else:)'); // Щось інше:)
    }
}
