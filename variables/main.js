class StudentLog {
    constructor(name) {
        this.name = name,
        this.subjects = {};
    };

    getName() {
        return (this.name);
    };

    addGrade(grade, subject) {
        //проверяем наличие предмета
        if (this.subjects[subject] === undefined){
            this.subjects[subject] = [];
        };      
        //добавляем оценку к предмету, который уже существует
        if ((grade > 0) && (grade <= 5)){
            this.subjects[subject].push(grade); 
        } else {
            console.log(`Ошибка. Проверьте корректность ввода оценки по предмету ${subject}`);
        };
        return this.subjects[subject].length;
    };

    getAverageBySubject(subject){
        let sum = 0; let average = 0;
        
        if (this.subjects[subject].length !== 0){
            for (let i = 0; i < this.subjects[subject].length; i ++){
                //суммируем оценки по одному предмету
                sum += this.subjects[subject][i];  
            };
                // выводим среднее значение оценки
               average = sum / this.subjects[subject].length;
        } else {
            average = 0;
        }; 
        return average;   
    };

    getTotalAverage(){
        let allMarksSum = 0, result = 0;
        for (this.subject in this.subjects){
            allMarksSum += this.getAverageBySubject(this.subject); 
        };
        //средний балл за ВСЕ предметы
        result = allMarksSum / Object.keys(this.subjects).length;
        return result;    
    };

    getGradesBySubject(subject){
        return this.subjects[subject] || [];
    };

    getGrades(){
        return this.subjects || {};
    };

};

let log = new StudentLog ('Ландыш Хусаенова');

// RPG ИГРА
//ОРУЖИЕ

class Weapon {
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = this.durability;
    };

    takeDamage(damage){
        this.durability = this.durability - damage;
        if (this.durability > 0){
            return this.durability;
        }else{    
            return this.durability = 0;
        };    
    };    

    getDamage(){
        if (this.durability >= (this.startDurability * 0.3)){
            return this.attack;
        } else if ((this.durability < (this.startDurability * 0.3)) && (this.isBroken())){
            return this.attack = this.attack / 2;
        } else {
            return 0;
        };
    };

    isBroken(){
        return (this.durability < 0);
    };
};

class Arm extends Weapon {
    constructor(){
        super('Рука', 1, Infinity, 1);
    };
};

class Bow extends Weapon{
    constructor(){
        super('Лук', 10, 200, 3);
    };
};

class Sword extends Weapon{
    constructor(){
        super('Меч', 25, 500, 1);
    };
};
  
class Knife extends Weapon{
    constructor(){
        super('Нож', 5, 300, 1);
    };
};

class Staff extends Weapon{
    constructor(){
        super('Посох', 8, 300, 2);
    };
};

class LongBow extends Bow{
    constructor(){
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    };
};

class Axe extends Sword{
    constructor(){
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
        this.startDurability = this.durability;
    };
};

class StormStaff extends Staff{
    constructor(){
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    };
};

const weapon = new Weapon('Старый меч', 20, 10, 1);
const arm = new Arm();
const sword = new Sword();
const bow = new Bow();
const knife = new Knife();
const staff = new Staff();
const longbow = new LongBow();
const axe = new Axe();
const stormStaff = new StormStaff();


//ИГРОКИ

class Player {
    constructor(name){
        this.life = 100;
        this.magic = 50;
        this.speed = 10;
        this.attack = 10;
        this.agility= 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Weapon();
        this.name = name;
        this.position = 0;
    };

    getLuck(){
        let randomNumber = Math.random() * 100;
            return (randomNumber + this.luck) / 100;
    };

    getDamage(distance){
        let weaponDamage = weapon.getDamage();
        if (distance <= weapon.range){
            return (((this.attack + weaponDamage) * this.getLuck()) / distance);
        }else{
            return 0;
        }; 
    };     

    takeDamage(damage){
        this.life = this.life - damage;
        if (this.life > 0){
            return this.life;
        }else{
            return this.life = 0;
        };   
    }; 

    isDead(){
        return (this.life === 0);
    };

    moveLeft(distance){
        if (distance <= this.speed){
            this.position = this.position - distance;
            return this.position;
        };
    };

    moveRight(distance){
        if (distance <= this.speed){
            this.position = this.position + distance;
            return this.position;
        };
    };

    move(distance){
        if (distance < 0){
            this.moveLeft(distance);
        }else{
            this.moveRight(distance);
        };
    };

    isAttackBlocked(){
        return (this.getLuck() > ((100 - this.luck) / 100));
    };  
    
    dodged(){
        return (this.getLuck() > ((100 - this.agility - (this.speed * 3)) / 100));
    };

    takeAttack(damage){
        if (this.isAttackBlocked()){
            return this.weapon.takeDamage(damage);
        }else if(this.dodged()){
            return 0;
        }else{
            return this.takeDamage(damage);
        };
    };

    checkWeapon(){
        if (this.weapon.isBroken()){
            this.weapon = new Knife();
        };
        
        if(this.weapon.isBroken()){   
            this.weapon = new Arm();
        };
    };

    tryAttack(enemy){
        let distance = this.position - enemy.position;
        let damage = enemy.getDamage(distance);
        enemy.takeAttack(damage);
        if (this.position === enemy.position){
            enemy.moveRight(1);
            enemy.takeAttack(damage * 2);
        };
    };

   // chooseEnemy(players){
   //     for (let i = 0; i < players.length; i ++){
   //         ...
   //     };
   // };

};

class Warrior extends Player {
    constructor(){
        super();
        this.life = 120;
        this.startLife = this.life;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword();
        this.position = 20;
    };

    takeDamage(damage){
        this.life = this.life - damage;
        if ((this.life > (this.startLife / 2)) || (this.magic === 0)){
            return this.life;
        }else if ((this.life < (this.startLife / 2)) && (this.getLuck() > 0.8)){
            return this.magic = this.magic - damage;
        }; 
        return (this.life > 0) ? this.life : this.life = 0;
     };    
};

class Archer extends Player {
    constructor(){
        super();
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.agility = 10;
        this.description = 'Лучник';
        this.weapon = new Bow();
    };

    getDamage(distance){
        let weaponDamage = weapon.getDamage();
        if (distance <= weapon.range){
            return (((this.attack + weaponDamage) * this.getLuck() * distance) / weapon.range);
        }else{
            return 0;
        }; 
    };  
};

class Mage extends Player {
    constructor(){
        super();
        this.life = 70;
        this.magic = 100;
        this.startMagic = this.magic;
        this.attack = 5;
        this.agility = 8;
        this.description = 'Маг';
        this.weapon = new Staff();
    };

    takeDamage(damage){
        if (this.magic > (this.startMagic * 0.5)){
            this.life = (this.life - (damage / 1.5));
            this.magic = this.magic - 12;
        }else{    
            this.life = this.life - damage;
        };
        return (this.life > 0) ? this.life : this.life = 0;    
    };     
};

class Dwarf extends Warrior {
    constructor(){
        super();
        this.life = 130;
        this.attack = 15;
        this.luck = 20;
        this.description = 'Гном';
        this.weapon = new Axe();
        this.hit = 0;
    };

    takeDamage(damage){
        this.hit ++;
        if ((this.getLuck() > 0.5) && ((this.hit % 6) === 0)){
            this.life = this.life - (damage / 2);
        }else{
            this.life = this.life - damage;
        };
        return (this.life > 0) ? this.life : this.life = 0;  
    }; 
};

class Crossbowman extends Archer {
    constructor(){
        super();
        this.life = 85;
        this.attack = 8;
        this.agility = 20;
        this.luck = 15;
        this.description = 'Арбалетчик';
        this.weapon = new LongBow();
    };
};

class Demiurge extends Mage {
    constructor(){
        super();
        this.life = 80;
        this.magic = 120;
        this.attack = 6;
        this.luck = 12;
        this.description = 'Демиург';
        this.weapon = new StormStaff();
    };
    
    getDamage(distance){
        let weaponDamage = weapon.getDamage();
        if (distance <= weapon.range){
            if ((this.magic > 0) && (this.getLuck() > 0.6)){
                return ((this.attack + (weaponDamage  * 1.5)) * this.getLuck()) / distance;
            }else{
                return ((this.attack + weaponDamage) * this.getLuck()) / distance;
            };
        }else{
            return 0;
        }; 
    };     
};


const player = new Player ('Иван Демидов');
const warrior = new Warrior();
const archer = new Archer();
const mage = new Mage();
const dwarf = new Dwarf();
const crossbowman = new Crossbowman();
const demiurge = new Demiurge();
