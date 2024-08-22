// Ejercicio 10

// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]; 

// Segun internet para conseguir la media de algo se suman las cosas y luego se divide entre la cantidad de cosas que hay

function average(param) {
  let sum = 0; // Inicio la variable para la suma

  // Sumo todos los elementos del array
  for (let number of param) {
    sum += number;
  } 

  return sum / param.length; // Divido la suma de los elementos del array entre la cantidad de elementos del array
}


const media = average(numbers); // Llamo a la función y le pongo el valor a la variable constante "media"
console.log(media); 
