console.log('--EXERCISE 1: VARIABLES AND OPERATORS');

/*
a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
una tercera variable.
*/

console.log('-Exercise 1.a:')
var x = 5;
var y = 8;
var sum = x+y;
console.log(sum);

/*
b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una tercera variable.
*/

console.log('-Exercise 1.b:')
var s1 = 'Hello';
var s2 = 'world';
var words = (s1 + ' ' + s2);
console.log(words);

/*
c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
resultado de la suma en una tercera variable (utilizar lenght).
*/

console.log('-Exercise 1.c:')
var s3 = 'Ana';
var s4 = 'Paula';
var sumlen = s3.length + s4.length;
console.log(sumlen);