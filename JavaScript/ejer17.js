// Ejercicio 17

// Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let key in alien) { // recorro el objeto
  console.log(`${key}: ${alien[key]}`); // Muestro la clave y su valor
  
}
