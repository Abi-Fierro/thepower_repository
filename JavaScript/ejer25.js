// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let totalSellCount = 0;

for (let i = 0; i < products.length; i++) {
totalSellCount += products[i].sellCount;
}

console.log("La media de ventas es:", totalSellCount/products.length); // el total de ventas dividido entre el numero de productos según los ejercicios anteriores...
