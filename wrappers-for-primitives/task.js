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
  console.log(n);

  //сумма, которую необходимо вернуть банку
  let refundSum = parseFloat(amount) - parseFloat(contribution);
    console.log(refundSum);

  //процентная ставка
  let interestRate = parseFloat(percent) / 100;
  console.log(interestRate);
  
  //Ежемесячная оплата 
  let p = interestRate * (1 / 12);
  let monthlyFee = refundSum * (p + p / (Math.pow((1 + p), n) - 1));
  console.log(monthlyFee);

  //сумма процентов за пользование кредитом
  let creditPercent = (monthlyFee * n) - refundSum;
  console.log(creditPercent);

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
    // код для задачи №2 писать здесь
    //return greeting;
}