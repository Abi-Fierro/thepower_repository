// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  const uniqueElements = []; // Inicio un ARRAY para almacenar elementos únicos

  for (let element of param) { // Itera sobre cada elemento del array
    if (!uniqueElements.includes(element)) { // Verifica si el elemento ya está en el array único
      uniqueElements.push(element); // Si no está, lo agreg con push
    }
  }

  return uniqueElements; // Devuelvo el array que se creó en la función
}

// Llamo a la función y le paso el array inicial
const result = removeDuplicates(duplicates);
console.log(result); 
