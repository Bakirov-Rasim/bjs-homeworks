
function getSolutions( a, b, c ) {

    let D = b*b - 4 * a * c;
    let x1;
    let x2;
    let obj = {};

    if (D === 0){
        x1 = (- b) / (2 * a);
        x = [x1];
        obj.roots = x;
    }

    else if (D > 0){
        x1 = (- b - Math.sqrt(D)) / (2 * a);
        x2 = (- b + Math.sqrt(D)) / (2 * a);
        x = [x1, x2];
        obj.roots = x;
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