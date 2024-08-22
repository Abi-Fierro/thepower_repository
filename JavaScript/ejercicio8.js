// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = ''; // Variable para almacenar la palabra más larga

  for (let word of param) { // Se supone que itera sobre cada palabra en el array
    if (word.length > longestWord.length) { // Verifica si la palabra actual es más larga que la almacenada
      longestWord = word; // Actualiza la palabra en la variable depues de verificarla
    }
  }

  return longestWord; // devuelve la palabra para seguir iterando

}

const longest = findLongestWord(avengers);
console.log(longest);