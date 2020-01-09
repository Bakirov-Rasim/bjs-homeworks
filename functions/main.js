'use strict'
function getSolutions( a, b, c ) {

    let D = b*b - 4 * a * c;
    let x1;
    let x2;
    let obj = {};

    if (D === 0){
        x1 = (- b) / (2 * a);
        obj.roots = [x1];
    }

    else if (D > 0){
        x1 = (- b - Math.sqrt(D)) / (2 * a);
        x2 = (- b + Math.sqrt(D)) / (2 * a);
        obj.roots = [x1, x2];
    }
    
    obj.D = D;
    return obj;
}

function showSolutionsMessage( a, b, c ){

    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0){
        console.log('Уравнение не имеет вещественных корней');
    }

    else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }

    else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage( 20, 5, 1 );
showSolutionsMessage( 1, 2, 1 );
showSolutionsMessage( 2, 5, 1 );

//Задание 2

let data = {
  algebra: [2, 5, 4, 4],
  geometry: [2, 5, 4],
  russian: [2, 5, 4, 5, 6],
  physics: [2, 5, 4],
  music: [2, 5, 4],
  english: [2, 5, 4],
  chemistry: [3, 5, 3, 5],
  fremch: [5, 5, 4],
  poetry: [5, 5, 4]
}

function getAverageScore(data) {
  let sum = 0;
  let count = 0;
  let resultObject = {};
  
  for (let prop in data) {
    
    function propAverage(arr) {
      let sumProp = 0;
      for (let i = 0; i < arr.length; i++){
        sumProp += arr[i];
      }
      let resultAverage = sumProp / arr.length;
      return resultAverage;
    }
    
    resultObject[prop] = propAverage(data[prop]);
    sum += propAverage(data[prop]);
    count ++;
  }

  let avg = sum / count;
  resultObject['average'] = avg;
  return resultObject;
}
console.log(getAverageScore(data));