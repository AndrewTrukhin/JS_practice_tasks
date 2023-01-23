/*Задача 3. Створити клас «Покемон» (позиція (одне число  -- індекс як у одновимірному масиві ), кількість патронів, кількість здоров’я). 
  За один крок кожен з покемонів стріляє по базі (якщо є патрони) і переміщається випадковим чином у нову позицію. 
  База  у відповідь стріляє у якусь позицію і наносить шкоду кожному із покемонів, які знаходяться у заданій позиції.*/

class Base {
    constructor(maxField, hitpointsQty, damage) {
        this.fieldLength = maxField;
        this.health = hitpointsQty;
        this.damage = damage;
        this.position = this.getRandom();
        this.isAlive = true;
    }

    getRandom() {
        return Math.ceil(Math.random() * this.fieldLength);
    }

    shot(enemyOne, enemyTwo) {
        const randomShot = this.getRandom();
        console.log('enemyOne position:', enemyOne.position)
        console.log('enemyTwo position:', enemyTwo.position)
        console.log('base shot to:', randomShot)

        if (randomShot === enemyOne.position) {
            enemyOne.health -= this.damage
            if (enemyOne.health <= 0) {
                enemyOne.isAlive = false;
                console.log(`Base destroyed pokemon ${enemyOne}enemyOne was destroyed!`);
            }
        }
        else if (randomShot === enemyTwo.position) {
            enemyTwo.health -= this.damage
            if (enemyTwo.health <= 0) {
                enemyTwo.isAlive = false;
                console.log(`Base destroyed pokemon ${enemyTwo}enemyOne was destroyed!`);
            }
        }
        else if (!enemyOne.isAlive && !enemyTwo.isAlive) {
            console.log('Game over! The base win! Pokemons were destroyed!');
        }
        console.log('enemyOne health', enemyOne.health)
        console.log('enemyTwo health', enemyTwo.health)
    }
}

class Pokemon extends Base {
    constructor(ammoQty) {
        super(...arguments);
        this.ammoQty = ammoQty;
    }

    shot(enemy) {
        const randomShot = super.getRandom();
        console.log('pokemon shot to:', randomShot)

        this.ammoQty--;

        if (randomShot === enemy.position) {
            enemy.health -= this.damage
            if (enemy.health <= 0) {
                enemy.isAlive = false;
                console.log('Game over! Pokemon win! The base was destroyed!');
            }
        }

        console.log('enemy health', enemy.health)
    }

    move() {
        const move = Math.ceil(Math.random() * 2);
        if (move === 1) {
            this.position = this.position % this.fieldLength + 1;
        }
        else {
            if (this.position - 1 === 0) {
                this.position = this.fieldLength;
            }
            else {
                this.pokemonPos = this.pokemonPos - 1;
            }
        }
    }
}


class Game {
    constructor(maxField, pokemonAmmo, pokemonHitPoints, pokemonDamage, baseHitPoints, baseDamage) {
        this.pikachu = new Pokemon(maxField, pokemonHitPoints, pokemonDamage, pokemonAmmo);
        this.chermander = new Pokemon(maxField, pokemonHitPoints, pokemonDamage, pokemonAmmo);
        this.enemyBase = new Base(maxField, baseHitPoints, baseDamage);
    }

    play() {

        do {
            console.log('base position:', this.enemyBase.position)

            if (this.pikachu.isAlive) {
                this.pikachu.shot(this.enemyBase)
                this.pikachu.move()
            }

            if (this.chermander.isAlive) {
                this.chermander.shot(this.enemyBase)
                this.chermander.move()
            }

            if (this.enemyBase.isAlive) {
                this.enemyBase.shot(this.pikachu, this.chermander)
            }

            console.log('---------------------------------------')
        } while ((this.pikachu.isAlive || this.chermander.isAlive) && this.enemyBase.isAlive);

    }
}
// змінні для покемона
const maxField = 10;
const pokemonAmmo = 15;
const pokemonHitPoints = 100;
const pokemonDamage = 33;
// змінні для бази
const baseHitPoints = 100;
const baseDamage = 50;

const pokemonGame = new Game(maxField, pokemonAmmo, pokemonHitPoints, pokemonDamage, baseHitPoints, baseDamage);
pokemonGame.play()