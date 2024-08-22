// Ejercicio 14

// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  const wordCount = {}; // Inicio un objeto para almacenar el conteo de palabras

  // Recorro cada palabra del array
  for (let word of param) {
    // Si la palabra ya está en el objeto, incremento el contador
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      // Si no está, la inicializo como 1
      wordCount[word] = 1;
    }
  }

  return wordCount; // Devuelve el objeto con el conteo de palabras
}

const result = repeatCounter(counterWords);
console.log(result);
