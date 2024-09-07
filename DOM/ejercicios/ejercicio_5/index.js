// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Creo un elemento ul
const ul = document.createElement('ul');

// Recorro el array de albums y creo un li por cada album
albums.forEach(album => {
  // Creo un nuevo li
  const li = document.createElement('li');
  
  // Asigno el texto del album a la li
  li.textContent = album;
  
  // Inserto el li dentro del ul
  ul.appendChild(li);
});

// Añado la ul al body del documento
document.body.appendChild(ul);
