// Ejercicio 9

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58]; // Debe sumar 151 según la calculadora

function sumAll(param) {

  let sum = 0; // Inicio la variable que se va a sumar 

  for (let number of param){ // Recorro todos los numeros del array y se lo sumo a la variable
        sum+=number;
  }
  
  return sum; // Devuelvo la suma total a la variable
}

const sumaTotal = sumAll(numbers); 
console.log(sumaTotal);