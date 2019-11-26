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

    // код для задачи №1 писать здесь
    //return totalAmount;

    'use strict';

    function checkInputData (input, inputName) {

        let value = input;
         if ( value === '' || isNaN(value)){
            console.log(`Параметр ${inputName} содержит неправильное значение ${value}`);
        } 
        if (typeof(value) === 'string'){
            value  = parseInt(input);
        }
        return value;

    }
    
    function getMonthsOfMorgage(date) {
      
        let dateNow = new Date();
        let futureDate = new Date(date)
        let months = (futureDate.getFullYear() - dateNow.getFullYear()) * 12 - dateNow.getMonth() + futureDate.getMonth();
  
        return months;
    }


    let monthsToPay = checkInputData(getMonthsOfMorgage(date), 'Срок ипотеки')
    

    let returnValue = checkInputData(amount, 'Общая стоимость') - checkInputData(contribution, 'Начальный взнос');

    let p = checkInputData(percent, 'Процентная ставка') / 1200;

    let c = Math.pow((1 + p), monthsToPay);

    let monthlyPayment = returnValue * (p + (p / (c - 1)));

    let totalAmount = monthlyPayment * monthsToPay;

    console.log(totalAmount);

    return totalAmount;

}


function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    //return greeting;

    let greeting;


    if (typeof(name)=== 'string' && name !== '') {
    greeting = `Привет, мир! Меня зовут ${name}`;
    
    } else {
    
        greeting = 'Привет, мир! Меня зовут Аноним';
    
    }
 
  return greeting;
}