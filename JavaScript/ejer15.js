// Ejercicio 15

// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let product of products) { // Recorro cada producto en el array
  if (product.includes('Camiseta')) { // Verifico si el producto incluye la palabra camiseta
    console.log(product); // Muestro el producto en la consola
  }
}
