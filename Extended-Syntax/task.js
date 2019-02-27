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
  let d = b ^ 2 - 4 * a * c;
      
  if (d < 0){
    console.log('Корней нет');
  } else if (d === 0){
    x = (-b) / (2 * a);
    console.log(x);
    return x;
  } else {
    let x = [];  
    x[1] = (-b + Math.sqrt(d)) / (2 * a); 
    x[2] = (-b - Math.sqrt(d))/ (2 * a);
    console.log(x[1] + ' ' + x[2]);
    return x[i];
  };
};

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
};

function askDrink(name,dateOfBirthday){
    let age = new Date().getFullYear();
    result = (age > = 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    console.log(result);
    return result;
};

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
}