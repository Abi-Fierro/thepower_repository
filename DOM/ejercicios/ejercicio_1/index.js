// <!-- Dado el siguiente html -->

// <!-- 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

// 1.3 Usa querySelector para mostrar por consola todos los p

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe". -->

//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let boton = document.querySelector('.showme');
console.log(boton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

let titulo1 = document.querySelector('#pillado');
console.log(titulo1);

// 1.3 Usa querySelector para mostrar por consola todos los p

let parrafo = document.querySelectorAll('p');
console.log(parrafo);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// la clase.pokemon

let pokemones = document.querySelectorAll('.pokemon');
console.log(pokemones);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".

let elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(elementosTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe". -->

let tercerElementoTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(tercerElementoTestMe);