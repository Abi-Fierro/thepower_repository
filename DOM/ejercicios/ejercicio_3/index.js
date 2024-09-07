// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.



// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
// const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// Creo el elemento ul
let ul = document.createElement('ul');

// Recorro el array countries y añade cada país en un li
countries.forEach(country => {
  let li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});

// Inserto la lista ul en el body
document.body.appendChild(ul);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

let elementToRemove = document.querySelector('.fn-remove-me');

elementToRemove.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
// const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// Selecciono el div que tiene el atributo data-function="printHere"
let divPrintHere = document.querySelector('div[data-function="printHere"]');

// Creo el elemento ul
let ulCars = document.createElement('ul');

// Recorro el array cars y añade cada coche en un li
cars.forEach(car => {
  let li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});

// Inserto la lista ul dentro del div
divPrintHere.appendChild(ulCars);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
// const countries = [
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
// 	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
// ];


// Lo llamaré countries2 
const countries2 = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

// Recorro el array de países y creo  un div para cada uno
countries2.forEach(country => {
  let div = document.createElement('div');
  
  // Creo el elemento h4 con el título
  let h4 = document.createElement('h4');
  h4.textContent = country.title;
  
  // Creo el elemento img con la URL de la imagen
  let img = document.createElement('img');
  img.src = country.imgUrl;
  
  // Añado el h4 y la img al div
  div.appendChild(h4);
  div.appendChild(img);
  
  // Inserto el div en el body
  document.body.appendChild(div);
});


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.

// Creo un botón
let buttonRemoveLastDiv = document.createElement('button');
buttonRemoveLastDiv.textContent = 'Eliminar último';

// Añade el botón al body
document.body.appendChild(buttonRemoveLastDiv);

// Añado un event listener al botón para eliminar el último div
buttonRemoveLastDiv.addEventListener('click', () => {
  let divs = document.querySelectorAll('div');
  if (divs.length > 0) {
    let lastDiv = divs[divs.length - 1];
    lastDiv.remove();
  }
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.

const buttonRemoveAllDivs = document.querySelectorAll("div");

for (const div of buttonRemoveAllDivs) {
    // Croa un botón para cada div
    const button = document.createElement("button");
    button.textContent = "Elimíname!";
    
    // Agrego un event listener para eliminar el div cuando se haga clic en el botón
    button.addEventListener("click", (e) => {
        e.target.parentElement.remove(); // Elimina el padre del botón, osea, el div
    });
    
    // Añado el botón dentro del div
    div.appendChild(button);
}
