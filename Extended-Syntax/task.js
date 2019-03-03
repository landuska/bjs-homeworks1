"use strict";

function calculateQuadraticEquation(){
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a,b,c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = " + result;
};

function getResult(a,b,c){
  let x;
  let d = Math.pow(b, 2) - 4 * a * c;
      
  if (d < 0){
    console.log('Корней нет');
  } else if (d === 0){
    x = (-b) / (2 * a);
    console.log(x);
    return x;
  } else {
    let x1, x2;  
    x1 = (-b + Math.sqrt(d)) / (2 * a); 
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log('Первый корень' + x1 + ' Второй корень' + x2);
    return [x1, x2];
  };
};

function calculateDrinkTask(){
  let name = window.personName.value;
  let dateOfBirthday = new Date(window.dateOfBirthday.value);
  let drink = askDrink(name, dateOfBirthday);
  window.drink.textContent = drink;
};

function askDrink(name, dateOfBirthday){
  let yearOfBirth = dateOfBirthday.getFullYear();
  let result = ((new Date().getFullYear() - yearOfBirth) >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  console.log(result);
  return result;
};

function calculateAverageRating(){
  let marks = window.marks.value.split("").map(Number);
  let averageMark = getAverageMark(marks);
  window.averageMark.textContent = averageMark;
};

function getAverageMark(marks){
  let sum = 0;
  let averageMark = 0;

  // задаем условие для вычисление среднего балла из 5 оценок
  if (marks.length < 5){
    for (let i = 0; i < marks.length; i ++){
    // вычисляем сумму из всех оценок
    sum = sum + marks[i];  
    };
  }else{
    console.log('Количество оценок больше 5');
    // удаляем лишние элементы из массива
    marks.splice(5);

    for (let i = 0; i < marks.length; i ++){
    // вычисляем сумму из всех оценок
    sum = sum + marks[i];  
    };
  }; 
  // вычисляем средний балл
  averageMark = sum / marks.length;
  return averageMark;
};