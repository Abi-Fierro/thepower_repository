// 1.1 Inserta dinamicamente en un html un div vacio con javascript.

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here


//1.1 Crea un nuevo elemento div
let newDiv = document.createElement('div');
document.body.appendChild(newDiv);


// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

// div
let newDivWithP = document.createElement('div');
// p
let newP = document.createElement('p');
// Añado la p dentro del div
newDivWithP.appendChild(newP);
// Inserto el div en el body
document.body.appendChild(newDivWithP);

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.

// nuevo elemento div
let newDivWith6P = document.createElement('div');

// Bucle para crear 6 p
for (let i = 0; i < 6; i++) {
  let newP = document.createElement('p');
  // Añade la p al div
  newDivWith6P.appendChild(newP);
}

// Inserto el div en el body
document.body.appendChild(newDivWith6P);

// 1.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.

// Crea un nuevo p
let dynamicP = document.createElement('p');
// Añado el texto a la p
dynamicP.textContent = 'Soy dinámico!';
// Inserto la p en el body
document.body.appendChild(dynamicP);


// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

// Cojo el h2 con la clase "fn-insert-here"
let h2InsertHere = document.querySelector('.fn-insert-here');
// Añado el texto 
h2InsertHere.textContent = 'Wubba Lubba dub dub';


// 1.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// Creo un nuevo elemento ul
let ul = document.createElement('ul');

// Recorro el array y añado cada elemento en un li
apps.forEach(app => {
  let li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
// Inserto la ul en el body
document.body.appendChild(ul);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

// Cojo todos los elementos con la clase "fn-remove-me"
let elementsToRemove = document.querySelectorAll('.fn-remove-me');

// Recorro los elementos seleccionados y los elimino
elementsToRemove.forEach(element => {
  element.remove();
});


// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

// Crea un nuevo elemento p
let pInBetween = document.createElement('p');
// Añade el texto "Voy en medio!" al p
pInBetween.textContent = 'Voy en medio!';

// Selecciono el primer div e inserto la p antes del segundo div
let firstDiv = document.querySelectorAll('div')[0];
firstDiv.insertAdjacentElement('afterend', pInBetween);


// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

// Selecciono todos los div con la clase "fn-insert-here"
let divsInsertHere = document.querySelectorAll('.fn-insert-here');

// Recorro los divs y añado una p con el texto a cada uno
divsInsertHere.forEach(div => {
  let pInside = document.createElement('p');
  pInside.textContent = 'Voy dentro!';
  div.appendChild(pInside);
});
