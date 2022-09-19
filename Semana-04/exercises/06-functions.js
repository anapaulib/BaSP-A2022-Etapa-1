console.log('--EXERCISE 6: FUNCTIONS');

/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar
el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
*/

console.log('-Exercise 6.a');
function sum1(x, y){
    return x + y;
}
var x = 2;
var y = 7;
var s1 = sum1(x, y);
console.log(s1);

/*
b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número;
de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
*/

console.log('-Exercise 6.b');
function sum2(x, y){
    if (typeof(x) === 'number' && typeof(y) === 'number'){
        return x + y;
    }else{
        alert('It is not a number');
        return 'NaN';
    }
}
var x = 8;
var y = 5;
var s2 = sum2(x, y);
console.log(s2);

/*
c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número
entero.
*/

console.log('-Exercise 6.c');
function validateInteger(x){
    return Number.isInteger(x);
}

/*
d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que
los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido
a entero (redondeado).
*/

console.log('-Exercise 6.d');
function sum3(x, y){
    if (typeof(x) === 'number' && typeof(y) === 'number'){
        if (validateInteger(x) && validateInteger(y)){
            return x + y;
        }else{
            if (validateInteger(x) === false){
                alert('It is not an integer');
                return Math.round(x);
            }else{
                alert('It is not an integer');
                return Math.round(y);
            }
        }
    }else{
        alert('It is not a number');
        return 'NaN';
    }
}
var x = 1;
var y = 'a';
console.log(sum3(x,y));

/*
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que
todo siga funcionando igual.    
*/

console.log('-Exercise 6.e');
function doubleValidation(x, y){
    if (validateInteger(x) && validateInteger(y)){
        return true;
    }else{
        return false;
    }
}
function sum4(x, y){
    if (typeof(x) === 'number' && typeof(y) === 'number'){
        if (doubleValidation(x, y)){
            return x + y;
        }else{
            if(validateInteger(x) === false){
                alert('It is not an integer');
                return Math.round(x);
            }else{
                alert('It is not an integer');
                return Math.round(y);
            }
        }
    }else{
        alert('It is not a number');
        return 'NaN';
    }
}
var x = 1.5;
var y = 2;
console.log(sum4(x, y));