// Ejercicio 11

// Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

// pista (typeof)


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let sum = 0; // Inicializa la suma en 0
  let count = 0; // Inicializa el contador de elementos en 0 para ver por donde vamos


  for (let element of param) {   // Itera sobre los elementos en el array
    if (typeof element === 'number') {
      sum += element; // Suma el número directamente
    } else if (typeof element === 'string') {
      sum += element.length; // Suma la longitud del string si es string
    }
    count++; // Incrementa el contador de elementos
  }

  // Calcular la media igual que en el ejercicio anterior
  return sum / count; 
}

// Llamamos la función
const average = averageWord(mixedElements);
console.log(average); 