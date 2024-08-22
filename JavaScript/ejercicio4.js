// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);


// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers[0] = "IRONMAN"; // Aquí lo cambio 
console.log(avengers); // Si lo ejecuto y lo miro en la primera sigue saliendo HULK como resultado del ejercicio anterior 


// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(avengers.length); // Creo que se refieren a esto

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Mort", "Summer");

console.log(rickAndMortyCharacters); // Confirmo que se añadieron
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);



// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; // creo un nuevo array con otro nombre para no tener que crar otro fichero para el ejercicio.

// con pop se elimina el último elemento del array, con shift el primero y con splice se puede eliminar cualquier posicion del array

rickAndMortyCharacters2.pop(); // Elimino el último elemento del array
console.log(rickAndMortyCharacters2[0]); // Muestro el primer elemento
console.log(rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]); // mMestro el último elemento


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]; // Creo un nuevo array con otro nombre para no tener que crear otro fichero
rickAndMortyCharacters3.splice(1); // Elimino el segundo elemento del array
console.log(rickAndMortyCharacters3); // Muestro el array

