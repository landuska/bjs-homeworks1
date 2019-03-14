class StudentLog {
    constructor(name) {
        this.name = name;
        this.subject = []
    };

    getName() {
        return (this.name);
    };

    addGrade(grade, subject) {
         if ((grade > 0) && (grade <= 5)){
        //добавляем оценку, если она соответсвует условию 1-5
            this.subject.push(grade);
        //увеличиваем счетчик количества оценок    
            count ++;
        } else {
            console.log(`Ошибка. Проверьте корректность ввода оценки по предмету ${subject}`);
        };
        console.log(this.subject)
        return (count);    
    };
};


let log = new StudentLog ('Ландыш Хусаенова'), count = 0;


console.log(log.getName());

console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade('отлично', 'math'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));




