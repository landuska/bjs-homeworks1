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
        let allMarksSum = 0, result = 0, i = 0;
        for (this.subject in this.subjects){
            allMarksSum += this.getAverageBySubject(this.subject); 
            i ++;
        };
        //средний балл за ВСЕ предметы
        result = allMarksSum / i;
        return result;    
    };

    getGradesBySubject(subject){
        return (this.subjects[subject] === undefined) ? (this.subjects[subject] = []) : this.subjects[subject];
    };

    getGrades(){
        return (Object.keys(this.subjects).length === 0) ? (this.subjects = {}) : this.subjects;
    };

};

let log = new StudentLog ('Ландыш Хусаенова');

console.log(log.getName());

console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade('отлично', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('math'));

console.log(log.getTotalAverage());

console.log(log.getGradesBySubject('algebra'));
console.log(log.getGradesBySubject('geometry'));
console.log(log.getGradesBySubject('math'));

console.log(log.getGrades());


// RPG ИГРА
class Weapon {
    constructor(name, attack, durability, range){
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.startDurability = this.durability;
    };

    takeDamage(damage){
        if ((this.durability -= damage) > 0){
                return this.durability;
            }else{
                return this.durability = 0;
            };   
    };    

    getDamage(){
        if (this.durability >= (this.startDurability*0,3)){
            return this.attack;
        } else if ((this.durability < (this.startDurability*0,3)) && (this.durability > 0)){
            return this.attack /= 2;
        } else {
            return 0;
        };
    };

    isBroken(){
        return (this.durability > 0)
    };
};

class Arm extends Weapon {
};

class Bow extends Weapon{
};

class Sword extends Weapon{
};
  
class Knife extends Weapon{
};

class Staff extends Weapon{
};

class LongBow extends Bow{
    constructor(name, attack, durability, range){
        super(name, attack, durability, range);
    };
};

class Axe extends Sword{
    constructor(name, attack, durability, range){
        super(name, attack, durability, range);
    };
};

class StormStaff extends Staff{
    constructor(name, attack, durability, range){
        super(name, attack, durability, range);
    };
};

const weapon = new Weapon('Старый меч', 20, 10, 1);
weapon.takeDamage(5);
console.log(weapon.durability);
weapon.takeDamage(50);
console.log(weapon.durability);

const arm = new Arm('Рука', 1, Infinity, 1);
arm.takeDamage(20);
console.log(arm.durability);

const bow = new Bow('Лук', 10, 200, 3);
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(100);
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(50);
console.log(bow.getDamage(), bow.durability);
bow.takeDamage(150);
console.log(bow.getDamage(), bow.durability);

const sword = new Sword('Меч', 25, 500, 1);
sword.takeDamage(20);
sword.takeDamage(100);
console.log(sword.durability);

const knife = new Knife('Нож', 5, 300, 1);
const staff = new Staff('Посох', 8, 300, 2);
const longbow = new LongBow('Длинный лук', 15, 4);
const axe = new Axe('Секира', 27, 800);
const stormStaff = new StormStaff('Посох Бури', 10, 3);
