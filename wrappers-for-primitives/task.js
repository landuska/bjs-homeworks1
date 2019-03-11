'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  // количество месяцев 
  let dateOfEnd = new Date(date).getFullYear();
  let n = (dateOfEnd - new Date().getFullYear()) * 12;

  //сумма, которую необходимо вернуть банку
  let refundSum = parseFloat(amount) - parseFloat(contribution);
 
  //процентная ставка
  let interestRate = parseFloat(percent) / 100;
  
  //Ежемесячная оплата 
  let p = interestRate * (1 / 12);
  let monthlyFee = refundSum * (p + p / (Math.pow((1 + p), n) - 1));

  //сумма процентов за пользование кредитом
  let creditPercent = (monthlyFee * n) - refundSum;
  
  //общая сумма, которую придется заплатить клиенту
  let totalAmount = parseFloat(contribution) + refundSum + creditPercent;
  return totalAmount.toFixed(2);
};

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
  let greeting = (name != 0) ? `Привет, мир! Меня зовут ${name}` : `Привет, мир! Меня зовут Аноним`;

  console.log(greeting);
  return greeting;
};