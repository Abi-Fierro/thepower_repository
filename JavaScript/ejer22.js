// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitsArray = 0; // array para recorrer las frutas

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) { // Si no es vegano
    foodSchedule[i].name = fruits[fruitsArray]; // Reemplazar con una fruta
    fruitsArray++; // Incrementar el array para usar la siguiente fruta
  }
}

// for (let i = 0; i < foodSchedule.length; i++) {
    
//   if (foodSchedule[i].isVegan === false) {
//       foodSchedule[i].name = fruits.splice(0, 1)[0];
//       foodSchedule.isVegan = true;
//   }
  
// }

console.log(foodSchedule);