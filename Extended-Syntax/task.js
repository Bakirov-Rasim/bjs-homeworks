"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
    let D = b*b - 4 * a * c;
    let x,
        x1,
        x2;

    if (D < 0){
        x = [];
    }
    else if (D == 0){
        x1 = (- b) / (2 * a);
        x = [x1];
    }
    else{
        x1 = (- b - Math.sqrt(D)) / (2 * a);
        x2 = (- b + Math.sqrt(D)) / (2 * a);
        x = [x1, x2];
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    //return averageMark;
    let sum = 0;
    if (marks.length <= 5){
      for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
      }
      averageMark = sum / marks.length;
  } else {
      console.log('Учитываюся первые 5 оценок');
      for (let i = 0; i < 5; i++) {
        sum += marks[i];    
      }
      averageMark = sum / 5;
  }
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    //console.log(result)
    //return result;
}