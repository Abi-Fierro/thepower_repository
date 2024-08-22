// Ejercicio 13

// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param, name) {

  const index = param.indexOf(name); // Encuentra el índice del nombre en el array

  if (index !== -1) { // Si el índice es diferente de -1, significa que el nombre existe
    return { existe: true, posicion: index }; // Le pedimos que devuelva TRUE y la posición en el array
  } else {
    return { existe: false }; // Si no existe, devuelve false
  }
}

// Pruebo la función
const result1 = finderName(nameFinder, 'Abimael');
console.log(result1); // No existe

const result2 = finderName(nameFinder, 'Jessica');
console.log(result2); // Existe