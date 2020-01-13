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

<<<<<<< HEAD
    function checkInputData (input) {

        let value;

        if (typeof(input) === 'number') {
            value = input;
            console.log(typeof(input) === typeof(value));
            return value;
        
        } else  if (typeof (input) === 'string'){
            console.log(typeof(input) === typeof(value));
            value  = Number(input);
            console.log(typeof(input) === typeof(value));
        }
          if (typeof(value) === 'Number'&& ! isNaN(value)){
            return value;
          }    
         else {
          console.log(`Параметр ${input} содержит неправильное значение ${value}`);
        }
        return value;
        
    }
    

=======
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
    
>>>>>>> f0089f01ce2cce559356d0521ea826192ca958cd
    function getMonthsOfMorgage(date) {
      
        let dateNow = new Date();
        let futureDate = new Date(date)
        let months = (futureDate.getFullYear() - dateNow.getFullYear()) * 12 - dateNow.getMonth() + futureDate.getMonth();
  
<<<<<<< HEAD
        return Number(months);
    }


    let monthsToPay = getMonthsOfMorgage(date);
    

    let returnValue = checkInputData(amount) - checkInputData(contribution);

    let p = checkInputData(percent) / 1200;
=======
        return months;
    }


    let monthsToPay = checkInputData(getMonthsOfMorgage(date), 'Срок ипотеки')
    

    let returnValue = checkInputData(amount, 'Общая стоимость') - checkInputData(contribution, 'Начальный взнос');

    let p = checkInputData(percent, 'Процентная ставка') / 1200;
>>>>>>> f0089f01ce2cce559356d0521ea826192ca958cd

    let c = Math.pow((1 + p), monthsToPay);

    let monthlyPayment = returnValue * (p + (p / (c - 1)));

<<<<<<< HEAD
    let totalAmount = returnValue + monthlyPayment * monthsToPay;

    console.log(typeof(p));
    console.log(typeof(c));
    console.log(typeof(returnValue));
=======
    let totalAmount = monthlyPayment * monthsToPay;

    console.log(totalAmount);
>>>>>>> f0089f01ce2cce559356d0521ea826192ca958cd

    return totalAmount;

}


<<<<<<< HEAD

=======
>>>>>>> f0089f01ce2cce559356d0521ea826192ca958cd
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