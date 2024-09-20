const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Selecciono el div que tiene el atributo data-function="printHere"
const div = document.querySelector('div[data-function="printHere"]');

// Creo un elemento ul
const ul = document.createElement('ul');

// Recorro el array de places y creo un li por cada lugar
places.forEach(place => {
  // Creo un nuevo li
  const li = document.createElement('li');
  
  // Asigno el nombre del lugar al texto del li
  li.textContent = place;
  
  // Inserto el li dentro del ul
  ul.appendChild(li);
});

// Inserto el ul dentro del div seleccionado
div.appendChild(ul);