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

class Player {
    constractor(life, mana, speed, attack, agility, luck){
        this.life = life;
        this.mana = mana;
        this.speed = speed;
        this.attack = attack;
        this.agility = agility;
        this.luck = luck;
    };
};





