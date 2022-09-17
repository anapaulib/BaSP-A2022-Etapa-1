console.log('--EXERCISE 3: ARRAYS');

/*
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
*/

console.log('-Exercise 3.a');
var months1 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
console.log(months1[4]);
console.log(months1[10]);

/*
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/

console.log('-Exercise 3.b');
var months2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
console.log(months2.sort());

/*
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/

console.log('-Exercise 3.c');
var months3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
months3.unshift('Meses');
months3.push('Año');
console.log(months3);

/*
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/

console.log('-Exercise 3.d');
var months4 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
var first = months4.shift();
var last = months4.pop();
console.log(months4);

/*
e. Invertir el orden del array (utilizar reverse).
*/

console.log('-Exercise 3.e');
var months5 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
console.log(months5.reverse());

/*
f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
*/

console.log('-Exercise 3.f');
var months6 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
console.log(months6.join('-'));

/*
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

console.log('-Exercise 3.g');
var months7 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
            'Noviembre', 'Diciembre'];
console.log(months7.slice(4,11));