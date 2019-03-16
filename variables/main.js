class StudentLog {
    constructor(name) {
        this.name = name,
        this.subjects = {};
    };

    getName() {
        return (this.name);
    };

    addGrade(grade, subject) {

        if (subject in this.subjects){
            //добавляем оценку к предмету, который уже существует
            ((grade > 0) && (grade <= 5)) ? this.subjects[subject].push(grade) : console.log(`Ошибка. Проверьте корректность ввода оценки по предмету ${subject}`);
        } else {
            //добавляем оценку к новому предмету
            ((grade > 0) && (grade <= 5)) ? this.subjects[subject] = [grade] : console.log(`Ошибка. Проверьте корректность ввода оценки по предмету ${subject}`);
        };
        return this.subjects[subject];
    };

    getAverageBySubject(subject){
        let sum = 0;
        
        if (subject in this.subjects){
            for (let i = 0; i < this.subjects[subject].length; i ++){
                //суммируем оценки по одному предмету
                sum += this.subjects[subject][i];  
                };
                // выводим среднее значение оценки
               return sum / this.subjects[subject].length;
        } else {
            return 0;
        };       
    };

    getTotalAverage(){
        let allMarksSum = 0;
        if (this.subjects !== undefined){
            allMarksSum += getAverageBySubject(subject); 
            i ++;
        } else {
            return 0;
        };
        //средний балл за ВСЕ предметы
        return allMarksSum / i;    
    };

    getGradesBySubject(subject){
        return (this.subjects[subject] === undefined) ? (this.subjects[subject] = []) : this.subjects[subject];
    };

    getGrades(){
        return (this.subjects === undefined) ? (this.subjects = {}) : this.subjects;
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





