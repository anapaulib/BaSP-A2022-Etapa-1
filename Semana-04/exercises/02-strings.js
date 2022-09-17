console.log('--EXERCISE 2: STRINGS');

/*
a. Crear una variable de tipo String con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
toUpperCase).
*/

console.log('-Exercise 2.a');
var s1 = 'beautifully';
console.log(s1.toUpperCase());

/*
b. Crear una variable de tipo String con al menos 10 caracteres y generar un nuevo String con los primeros 5 caracteres
guardando el resultado en una nueva varible (utilizar substring).
*/

console.log('-Exercise 2.b');
var s2 = 'beautifully';
var subs2 = s2.substring(0,5);
console.log(subs2);

/*
c. Crear una variable de tipo String con al menos 10 caracteres y generar un nuevo String con los últimos 3 caracteres
guardando el resultado en una nueva variable (utilizar substring).
*/

console.log('-Exercise 2.c');
var s3 = 'beautifully';
var subs3 = s3.substring(8);
console.log(subs3);

/*
d. Crear una variable de tipo String con al menos 10 caracteres y generar un nuevo String con la primera letra en
mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +).
*/

console.log('-Exercise 2.d');
var s4 = 'bEaUtIfUlLy';
var s4Modified = s4.substring(0,1).toUpperCase() + s4.substring(1).toLowerCase();
console.log(s4Modified);

/*
e. Crear una variable de tipo String con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

console.log('-Exercise 2.e');
var s5 = 'Queen Elizabeth';
var spaceS5 = s5.indexOf(' ');
console.log(spaceS5);

/*
f. Crear una variable de tipo String con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo String que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y
el operador +).
*/

console.log('-Exercise 2.f');
var s6 = 'quEen eLizaBetH';
var spaceS6 = s6.indexOf(' ');
var s6Modified = s6.substring(0,1).toUpperCase() + s6.substring(1,spaceS6).toLowerCase() + ' '
                + s6.substring(spaceS6+1,spaceS6+2).toUpperCase() + s6.substring(spaceS6+2).toLowerCase();
console.log(s6Modified);